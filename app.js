// class
class Person {
  name = 'name'
  constructor() {
    this.age = 20
  }
  greet() {
    console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old`)
  }
}

const person = new Person()
person.greet()

// constructor function
function Person2() {
  this.age = 20
  this.name = 'name'
  this.greet = function () {
    console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old`)
  }
}

const person2 = new Person2()
person.greet()
