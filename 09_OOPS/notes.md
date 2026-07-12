# javascript and classes
its a prototype-based language ::JavaScript supports Object-Oriented Programming (OOP) through classes (ES6+), which are really just syntactic sugar over JS's underlying prototype-based system.

# OOP
programming paradime::style of writing the program

## Object
--collection of properties and methods
--toLowerCase,promises

## why use OOP

Organizing related data + behavior together
Without OOP, you end up passing the same data through a pile of separate functions

## parts of oop
Object literal

--Constructor function
--prototypes
--classes
--instances (new,this)


### 4 pillarss

## Encapsulation — bundling data + methods, controlling access
class BankAccount {
  #balance = 0; // private field (# prefix, ES2022+)

  constructor(owner) {
    this.owner = owner;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount("Ashish");
acc.deposit(100);
console.log(acc.getBalance()); // 100
console.log(acc.#balance); // ❌ SyntaxError — private, inaccessible outside class

## Inheritance — one class extends another

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks`); // overrides parent method
  }
}

const d = new Dog("Rex");
d.speak(); // "Rex barks"

# extends sets up the prototype chain; super() calls the parent constructor
class Dog extends Animal {
  constructor(name, breed) {
    super(name);      // must call super() before using `this`
    this.breed = breed;
  }
}


## Polymorphism — same method name, different behavior per class

class Shape {
  area() { return 0; }
}
class Circle extends Shape {
  constructor(r) { super(); this.r = r; }
  area() { return Math.PI * this.r ** 2; }
}
class Square extends Shape {
  constructor(s) { super(); this.s = s; }
  area() { return this.s ** 2; }
}

[new Circle(2), new Square(3)].forEach(shape => console.log(shape.area()));
// each calls its own version of area()


## Abstraction — hiding complexity, exposing only what's needed

JS has no true abstract keyword, but it's commonly simulated
class Shape {
  area() {
    throw new Error("area() must be implemented by subclass");
  }
}


