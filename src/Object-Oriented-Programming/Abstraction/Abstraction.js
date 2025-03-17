// 🏗️ **Abstraction in JavaScript**
// Abstraction is a concept in object-oriented programming that hides the implementation details and exposes only the essential features of an object.
// It simplifies complex systems by breaking them into smaller, more manageable parts.
// JavaScript supports abstraction through classes and objects.

// ✨ **Key Concepts**
// - **Class**: A blueprint for creating objects.
// - **Object**: An instance of a class.
// - **Constructor**: A special method to initialize object properties.
// - **this**: Refers to the current object instance.

// ✅ **Example: Class Declaration**

class Car {
  constructor(make, model, year) {
    this.make = make; // Car manufacturer
    this.model = model; // Car model
    this.year = year; // Manufacturing year
  }

  // Method to display car details
  displayDetails() {
    return `${this.year} ${this.make} ${this.model}`;
  }
}

// Creating instances of the Car class
const car1 = new Car("Toyota", "Corolla", 2020);
const car2 = new Car("Honda", "Civic", 2022);

console.log(car1.displayDetails()); // Output: 2020 Toyota Corolla
console.log(car2.displayDetails()); // Output: 2022 Honda Civic

// 📝 **Key Notes**
// 1️⃣ Abstraction hides the complexity of the implementation and only shows the necessary details.
// 2️⃣ Classes in JavaScript provide a way to implement abstraction.
// 3️⃣ The `constructor` method initializes object properties.
// 4️⃣ Methods in a class define the behavior of objects.
// 5️⃣ Use the `new` keyword to create instances of a class.

// 🚀 **How to Implement Abstraction**
// 1️⃣ Define a class with properties and methods.
// 2️⃣ Encapsulate the internal details within the class.
// 3️⃣ Expose only the essential features through methods.
// 4️⃣ Create instances of the class and interact with them.
// 5️⃣ Access the object properties and methods using dot notation.

// 🛠️ **When to Use Abstraction**
// - When you want to hide the internal implementation details.
// - When you need to expose only the essential features of an object.
// - Real-world examples:
//   - Creating classes for user authentication.
//   - Payment processing systems.
//   - Data storage and retrieval mechanisms.
