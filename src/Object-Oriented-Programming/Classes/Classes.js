// 🏗️ **Classes in JavaScript**
// Classes are blueprints for creating objects. They define properties and methods that objects (instances) can use.
// JavaScript is a prototype-based language, meaning it doesn't have traditional classes like other languages, but ES6 introduced the `class` syntax for convenience.

// ✨ **Key Concepts**
// - **Class**: A template for creating objects.
// - **Object**: An instance of a class.
// - **Constructor**: A special method to initialize objects.
// - **this**: Refers to the current object instance.

// ✅ **Example: Class Declaration**
class Car {
  // The `constructor` initializes the object with properties.
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }

  // Method to simulate driving
  drive() {
    return "Let's go on a new ride 🚗";
  }

  // Method to change the car's color
  changeColor(newColor) {
    this.color = newColor;
    return `The new color is ${this.color}`;
  }

  // Method to display car details
  getDetails() {
    return `Car Details: ${this.make} ${this.model}, Year: ${this.year}, Color: ${this.color}`;
  }

  newCar(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;

    return `The new car is a ${this.make} ${this.model} from ${this.year} in ${this.color}`;
  }
}

// 🆕 **Creating Instances**
const car1 = new Car("Toyota", "Corolla", 2021, "red");
const car2 = new Car("Honda", "Civic", 2022, "blue");

// 🔍 **Using Properties and Methods**
console.log(car1.make); // Output: Toyota
console.log(car2.drive()); // Output: Let's go on a new ride 🚗
console.log(car1.changeColor("green")); // Output: The new color is green
console.log(car2.getDetails()); // Output: Car Details: Honda Civic, Year: 2022, Color: blue
console.log(car1.newCar("Ford", "Focus", 2023, "black")); // Output: The new car is a Ford Focus from 2023 in black

// 📝 **Key Notes**
// 1️⃣ Use the `class` keyword to define a class.
// 2️⃣ The `constructor` method initializes object properties.
// 3️⃣ Use the `new` keyword to create instances of the class.
// 4️⃣ The `this` keyword refers to the current object instance.
// 5️⃣ Access properties and methods using dot notation (e.g., `car1.make`).
// 6️⃣ Classes are useful for creating multiple objects with similar structures but different values.

// 🚀 **When to Use Classes**
// - To create objects with predefined structures but dynamic values.
// - Examples: user profiles, product details, or employee records.
