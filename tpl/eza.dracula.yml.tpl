colourful: true
# yellow {{ color3 }}
# red    {{ color1 }}
# purple {{ accent }}
# pink   {{ color5 }}
# orange {{ orange }}
# green  {{ color2 }}
# cyan   {{ color6 }}
# others:
# dark-blue    {{ color8 }}
# foreground   {{ cursor }}
# current_line {{ selection_background }}

filekinds:
  normal: {foreground: "{{ cursor }}"}
  directory: {foreground: "{{ color6 }}"}
  symlink: {foreground: "{{ accent }}"}
  pipe: {foreground: "{{ color8 }}"}
  block_device: {foreground: "{{ color1 }}"}
  char_device: {foreground: "{{ color1 }}"}
  socket: {foreground: "{{ selection_background }}"}
  special: {foreground: "{{ color5 }}"}
  executable: {foreground: "{{ color2 }}"}
  mount_point: {foreground: "{{ orange }}"}

perms:
  user_read: {foreground: "{{ cursor }}"}
  user_write: {foreground: "{{ orange }}"}
  user_execute_file: {foreground: "{{ color2 }}"}
  user_execute_other: {foreground: "{{ color2 }}"}
  group_read: {foreground: "{{ cursor }}"}
  group_write: {foreground: "{{ orange }}"}
  group_execute: {foreground: "{{ color2 }}"}
  other_read: {foreground: "{{ cursor }}"}
  other_write: {foreground: "{{ orange }}"}
  other_execute: {foreground: "{{ color2 }}"}
  special_user_file: {foreground: "{{ color5 }}"}
  special_other: {foreground: "{{ color8 }}"}
  attribute: {foreground: "{{ cursor }}"}

size:
  major: {foreground: "{{ color3 }}"}
  minor: {foreground: "{{ accent }}"}
  number_byte: {foreground: "{{ cursor }}"}
  number_kilo: {foreground: "{{ cursor }}"}
  number_mega: {foreground: "{{ color6 }}"}
  number_giga: {foreground: "{{ color5 }}"}
  number_huge: {foreground: "{{ color5 }}"}
  unit_byte: {foreground: "{{ cursor }}"}
  unit_kilo: {foreground: "{{ color6 }}"}
  unit_mega: {foreground: "{{ color5 }}"}
  unit_giga: {foreground: "{{ color5 }}"}
  unit_huge: {foreground: "{{ orange }}"}

users:
  user_you: {foreground: "{{ cursor }}"}
  user_root: {foreground: "{{ color1 }}"}
  user_other: {foreground: "{{ color5 }}"}
  group_yours: {foreground: "{{ cursor }}"}
  group_other: {foreground: "{{ color8 }}"}
  group_root: {foreground: "{{ color1 }}"}

links:
  normal: {foreground: "{{ accent }}"}
  multi_link_file: {foreground: "{{ orange }}"}

git:
  new: {foreground: "{{ color2 }}"}
  modified: {foreground: "{{ orange }}"}
  deleted: {foreground: "{{ color1 }}"}
  renamed: {foreground: "{{ color6 }}"}
  typechange: {foreground: "{{ color5 }}"}
  ignored: {foreground: "{{ color8 }}"}
  conflicted: {foreground: "{{ color1 }}"}

git_repo:
  branch_main: {foreground: "{{ cursor }}"}
  branch_other: {foreground: "{{ color5 }}"}
  git_clean: {foreground: "{{ color2 }}"}
  git_dirty: {foreground: "{{ color1 }}"}

security_context:
  colon: {foreground: "{{ color8 }}"}
  user: {foreground: "{{ cursor }}"}
  role: {foreground: "{{ color5 }}"}
  typ: {foreground: "{{ color8 }}"}
  range: {foreground: "{{ color5 }}"}

file_type:
  image: {foreground: "{{ orange }}"}
  video: {foreground: "{{ color1 }}"}
  music: {foreground: "{{ color2 }}"}
  lossless: {foreground: "{{ color2 }}"}
  crypto: {foreground: "{{ color8 }}"}
  document: {foreground: "{{ cursor }}"}
  compressed: {foreground: "{{ color5 }}"}
  temp: {foreground: "{{ color1 }}"}
  compiled: {foreground: "{{ color6 }}"}
  build: {foreground: "{{ color8 }}"}
  source: {foreground: "{{ color6 }}"}

punctuation: {foreground: "{{ color8 }}"}
date: {foreground: "{{ orange }}"}
inode: {foreground: "{{ cursor }}"}
blocks: {foreground: "{{ cursor }}"}
header: {foreground: "{{ cursor }}"}
octal: {foreground: "{{ color2 }}"}
flags: {foreground: "{{ color5 }}"}

symlink_path: {foreground: "{{ accent }}"}
control_char: {foreground: "{{ color6 }}"}
broken_symlink: {foreground: "{{ color1 }}"}
broken_path_overlay: {foreground: "{{ color8 }}"}
