class Person {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }
  nameAndSurname() {
    return this.name + " " + this.surname;
  }
  logPersonInformation() {
    console.log(this.name, this.surname, this.age);
  }
}

class Teacher extends Person {
  constructor(name, surname, age, subject, experience) {
    super(name, surname, age);
    this.subject = subject;
    this.experience = experience;
  }
  logTeacherInformation() {
    console.log(
      this.name,
      this.surname,
      this.age,
      this.subject,
      this.experience
    );
  }
}

const Teacher = new Teacher("selçuk", "Arslan", 29, "Yazılım", 2);

Teacher.logTeacherInformation();
