/*
 * Once upon a time...
 */
class Vampire {
  constructor(props) {
    this.location = props.location;
    this.birthDate = props.birthDate;
    this.deathDate = props.deathDate;
    this.weaknesses = props.weaknesses;
  }

  get age() {
    return this.calcAge();
  }

  calcAge() {
    return this.deathDate - this.birthDate;
  }
}

// ...there was a guy named Orlok
// oxlint-disable-next-line no-unused-vars -- Its a bloody example, read the room!
const Dracula = new Vampire({
  birthDate: 1428,
  deathDate: 1476,
  location: "Transylvania",
  weaknesses: ["Sunlight", "Garlic"],
});
