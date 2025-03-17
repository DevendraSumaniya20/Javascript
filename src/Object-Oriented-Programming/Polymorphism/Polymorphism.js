/*
🌟 Polymorphism in JavaScript 🌟

Polymorphism is a key concept in object-oriented programming (OOP) that allows objects to be treated as instances of their parent class, but with the flexibility to behave differently. 🚀

💡 What is Polymorphism?
Polymorphism comes from "poly" (many) and "morphism" (forms). It means the same function can behave differently depending on the object it is acting upon. 🌀

✨ Why is it useful?
It allows you to call the same method on different objects, and each object responds in its own unique way. This makes your code more flexible and reusable. 🔄

📚 Types of Polymorphism in JavaScript:
1️⃣ **Method Overriding**: A child class overrides a method of its parent class.
2️⃣ **Method Overloading (simulated)**: A function behaves differently based on the number or type of its arguments.
*/

// ✨ **Key Concept**
// Polymorphism enables objects of different types to be treated uniformly through a shared interface or base class,
// while allowing each object to define its own specific behavior for shared methods.

///////////////////////////
// 🐾 Example 1: Animals //
///////////////////////////

class Animal {
  speak() {
    console.log("The animal makes a sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("The dog barks");
  }
}

class Cat extends Animal {
  speak() {
    console.log("The cat meows");
  }
}

// ✅ **Polymorphism in Action**
const animals = [new Animal(), new Dog(), new Cat()];

animals.forEach((animal) => {
  animal.speak(); // Each object responds in its own unique way
});

///////////////////////////
// 🎨 Example 2: Shapes  //
///////////////////////////

class Shape {
  draw() {
    console.log("Drawing a shape");
  }
}

class Circle extends Shape {
  draw() {
    console.log("Drawing a circle");
  }
}

class Rectangle extends Shape {
  draw() {
    console.log("Drawing a rectangle");
  }
}

// ✅ **Polymorphism in Action**
const shapes = [new Shape(), new Circle(), new Rectangle()];

shapes.forEach((shape) => {
  shape.draw(); // Each shape object responds in its own unique way
});

//////////////////////////////
// 🛠️ Example: Method Overriding //
//////////////////////////////

class Parent {
  greet() {
    console.log("Hello from the parent class!");
  }
}

class Child extends Parent {
  greet() {
    console.log("Hello from the child class!");
  }
}

const parent = new Parent();
const child = new Child();

parent.greet(); // Output: Hello from the parent class!
child.greet(); // Output: Hello from the child class!

//////////////////////////////
// 🛠️ Example: Method Overloading (Simulated) //
//////////////////////////////

function greet(name, age) {
  if (age !== undefined) {
    console.log(`Hello ${name}, you are ${age} years old.`);
  } else {
    console.log(`Hello ${name}!`);
  }
}

greet("Alice"); // Output: Hello Alice!
greet("Bob", 25); // Output: Hello Bob, you are 25 years old.

// 📝 **Key Notes**
// - Polymorphism allows you to write more generic and reusable code.
// - It promotes the use of interfaces or base classes to define common behavior.

// 🚀 **How to Implement Polymorphism**
// 1. Create a base class with a method that defines a common behavior.
// 2. Extend the base class to create child classes.
// 3. Override the method in the child classes to provide specific behavior.
// 4. Use the base class reference to call the method on different objects.

// 🛠️ **When to Use Polymorphism**
// - When you have a hierarchy of classes with shared behavior.
// - When you want to write code that works with objects of different types in a unified way.
// - When you want to promote code reusability and reduce duplication.
// - When you need to add new types of objects without modifying existing code.

// 📝 **Key Takeaway**
// Polymorphism is not limited to animals or shapes; it can be applied to any hierarchy of objects
// where shared behavior is defined in a base class or interface.
