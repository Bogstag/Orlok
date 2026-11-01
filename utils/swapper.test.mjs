import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdirSync, mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { after, before, test } from "node:test";

const projectRoot = resolve(import.meta.dirname, ".."),
 cliPath = join(projectRoot, "utils", "swapper.ts"),
 tsxPath = join(
  projectRoot,
  "node_modules",
  ".bin",
  process.platform === "win32" ? "tsx.cmd" : "tsx",
),
 scratchDirectories = [];

function createProject() {
  const root = mkdtempSync(join(tmpdir(), "orlok-swapper-test-"));
  scratchDirectories.push(root);
  mkdirSync(join(root, "theme"), { recursive: true });
  mkdirSync(join(root, "source"), { recursive: true });
  writeFileSync(
    join(root, "theme", "colors.toml"),
    'primary = "#112233"\nalias = "#112233"\nsecondary = "#445566"\n',
  );
  return root;
}

function runSwapper(root, source) {
  return spawnSync(tsxPath, [cliPath, "theme/colors.toml", source], {
    cwd: root,
    encoding: "utf8",
    shell: process.platform === "win32",
  });
}

before(() => {
  assert.ok(readFileSync(cliPath, "utf8"));
});

after(() => {
  for (const directory of scratchDirectories) {
    rmSync(directory, { force: true, recursive: true });
  }
});

test("single-file input uses the first variable for shared colors and overwrites output", () => {
  const root = createProject(),
   source = join(root, "source", "terminal.conf"),
   output = join(root, "tpl", "terminal.conf.tpl"),
   original = "foreground = #112233\nbackground = #445566\n";
  writeFileSync(source, original);

  const firstRun = runSwapper(root, "source/terminal.conf");
  assert.equal(firstRun.status, 0, firstRun.stderr);
  assert.equal(
    readFileSync(output, "utf8"),
    "foreground = {{ primary }}\nbackground = {{ secondary }}\n",
  );
  assert.equal(readFileSync(source, "utf8"), original);

  writeFileSync(output, "stale template\n");
  const secondRun = runSwapper(root, "source/terminal.conf");
  assert.equal(secondRun.status, 0, secondRun.stderr);
  assert.equal(
    readFileSync(output, "utf8"),
    "foreground = {{ primary }}\nbackground = {{ secondary }}\n",
  );
  assert.equal(readFileSync(source, "utf8"), original);
});

test("directory input recursively generates flattened templates", () => {
  const root = createProject();
  mkdirSync(join(root, "source", "nested"), { recursive: true });
  writeFileSync(join(root, "source", "one.conf"), "one=#112233\n");
  writeFileSync(join(root, "source", "nested", "two.conf"), "two=#445566\n");

  const result = runSwapper(root, "source");
  assert.equal(result.status, 0, result.stderr);
  assert.deepEqual(readdirSync(join(root, "tpl")).sort(), ["one.conf.tpl", "two.conf.tpl"]);
  assert.equal(readFileSync(join(root, "tpl", "two.conf.tpl"), "utf8"), "two={{ secondary }}\n");
});

test("directory input rejects duplicate output names without writing templates", () => {
  const root = createProject();
  mkdirSync(join(root, "source", "first"), { recursive: true });
  mkdirSync(join(root, "source", "second"), { recursive: true });
  writeFileSync(join(root, "source", "first", "same.conf"), "first=#112233\n");
  writeFileSync(join(root, "source", "second", "same.conf"), "second=#445566\n");

  const result = runSwapper(root, "source");
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /would both write 'tpl\/same\.conf\.tpl'/);
  assert.deepEqual(readdirSync(join(root, "tpl")), []);
});
