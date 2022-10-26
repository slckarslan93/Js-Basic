class Person {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }
  logPersonInformation() {
    console.log(this.name, this.surname, this.age);
  }
  mergeNameAndSurname() {
    return this.name + " " + this.surname;
  }
}

const selcuk = new Person("selcuk", "Arslan", 29);
selcuk.logPersonInformation();
const nameAndSurname = selcuk.mergeNameAndSurname();
console.log(nameAndSurname);
