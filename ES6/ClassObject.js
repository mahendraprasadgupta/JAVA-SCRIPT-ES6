// JavaScript Classes
// JavaScript Classes are templates for JavaScript Objects.

// Use the keyword class to create a class.

// Always add a method named constructor():

class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }

const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);

console.log( myCar1);
console.log( myCar2);