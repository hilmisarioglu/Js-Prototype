class Dog {
  constructor(name) {
    name: name;
  }
  bark() {
    console.log("bark bark");
  }
}

Dog.prototype.smallBark = function () {
  console.log("barrrk");
};
const karabas = new Dog("karabas");
karabas.bark();
karabas.smallBark();

// --------------------------

// parentClass
class Person {
  constructor(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.employment = "";
  }

  selamla() {
    console.log(`Merhaba ${this.firstName} ${this.lastName}`);
  }
}

// childClass
class Student extends Person {
  constructor(firstName, lastName, birthYear) {
    console.log("Student objesi olusturuldu");
    super(firstName, lastName, birthYear);
    this.employment = "Student";
  }

  dersCalis(){
    //   super.selamla();
    //   this.selamla();
      console.log("JS calisiyor.")
  }
  selamla() {
    console.log("Helloooo");
  }
}


let hilmi = new Student("Hilmi", "Sarioglu", 1994);

hilmi.selamla();
hilmi.dersCalis();

// ----------------------------------
// this arrow fonksiyon icinde ise fonksiyonu göstermez

const teacher = {
    firstName: 'Hilmi',
    lastName: 'Sarioglu',
    birthYear: 1994,

    calcAge : function () {
        console.log("Function ile olusturuldu")
        console.log(this)
        console.log(2021 - this.birthYear)
    },
    
    calcAgeArrow : () => {
        console.log("Arrow Function ile olusturuldu")
        console.log(this)
        console.log(2021 - this.birthYear)
    }
} 
teacher.calcAge()
teacher.calcAgeArrow()