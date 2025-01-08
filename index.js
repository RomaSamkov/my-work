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

  static isLegal(age) {
    return age >= 18;
  }

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

class User extends Person {
  constructor(name, age, email, fruit) {
    super(name, age, email);
    this.fruit = fruit;
    this.isValidUser = false;
  }

  checkIsValidUser() {
    this.isValidUser = this.name !== "" && this.getmail !== "";
    if (this.isValidUser) {
      console.log("User is valid ))");
    }
  }
}

const minion = new User("Kevin", 25, "kevin@mail.com", "banana");
minion.checkIsValidUser();
console.log(minion);
