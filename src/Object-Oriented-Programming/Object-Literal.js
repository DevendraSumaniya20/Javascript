/*
🌟 **Understanding Objects in JavaScript** 🌟

In JavaScript, an **Object** is a collection of **properties** (data) and **methods** (functions). 
Think of it like a real-world object! 🚗

📌 **Key Concepts**:
- **Properties**: Characteristics of an object (e.g., color, model).
- **Methods**: Actions an object can perform (e.g., drive, honk).

✨ **Ways to Create Objects**:
1️⃣ **Object Literal** (simplest and most common way)
2️⃣ **Object Constructor**

💡 **Trick**: Methods are just functions stored as object properties.
*/

// ✅ **Example: Object Literal**
let car = {
  // Properties
  make: "Toyota",
  model: "Corolla",
  year: 2021,
  color: "red",

  // Method
  drive() {
    return "Let's go on a new ride 🚗";
  },
  changeColor(newColor) {
    this.color = newColor;
    return `The new color is ${this.color}`;
  },
};

// Accessing properties and methods
console.log(car.make); // Output: Toyota
console.log(car.drive()); // Output: Let's go on a new ride 🚗
console.log(car.changeColor("blue")); // Output: The new color is blue

/*
📝 **Key Notes**:
1️⃣ Use **dot notation** (car.make) or **bracket notation** (car["make"]) to access properties.
2️⃣ Object literals are great for creating simple objects quickly.
3️⃣ Methods make objects dynamic and interactive.
*/
