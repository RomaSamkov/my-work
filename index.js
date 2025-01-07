// && возвращает первое ложное значение (или последнее истинное, если все истинны).
// || возвращает первое истинное значение (или последнее ложное, если все ложные).

class Person {
  #email;
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.#email = email;
  }

  static rights = {
    admin: true,
    user: false,
  };

  get getmail() {
    return this.#email;
  }

  set setEmail(newEmail) {
    return (this.#email = newEmail);
  }

  setShowAge() {
    console.log(this.age);
  }
}

const kevin = new Person("Kevin", 25, "kevin@mail.com");
console.log(kevin.getmail);
kevin.setEmail = "It";
console.log(kevin.getmail);
console.log(Person.rights.admin);

kevin.setShowAge();
