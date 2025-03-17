// 🏗️ **Object Constructor Function**
// An Object Constructor is a blueprint for creating objects with similar properties and methods.
// It is a reusable way to create multiple objects dynamically.

// 📌 **Key Concepts**:
// - **Properties**: Characteristics of an object (e.g., color, model).
// - **Methods**: Actions an object can perform (e.g., drive, honk).

// ✨ **Ways to Create Objects**:
// 1️⃣ **Object Literal** (simplest and most common way)
// 2️⃣ **Object Constructor**

function Person(firstName, lastName) {
  // 🧩 `this` keyword refers to the current object being created.
  this.firstName = firstName; // Assigns the `firstName` property to the object.
  this.lastName = lastName; // Assigns the `lastName` property to the object.
}

// 🆕 Creating instances of the `Person` constructor using the `new` keyword.
const person1 = new Person("John", "Doe"); // Creates an object with firstName: "John", lastName: "Doe".
const person2 = new Person("Jane", "Smith"); // Creates an object with firstName: "Jane", lastName: "Smith".

// 🔍 Accessing properties using dot notation.
console.log(person1.firstName); // Output: John
console.log(person2.lastName); // Output: Smith

// 📝 **Key Notes**:
// 1️⃣ **Object Constructor** is a reusable blueprint for creating objects with similar properties and methods. 🏗️
// 2️⃣ Use the **new** keyword to create an instance of the object. It initializes the object and binds `this` to the new instance. 🆕
// 3️⃣ The **this** keyword refers to the current object being created. It allows you to assign dynamic properties. 🧩
// 4️⃣ Object Constructors are ideal for creating multiple objects with similar structures but different values. 🔄
// 5️⃣ Always capitalize the first letter of the constructor function (e.g., `Person`) to distinguish it from regular functions. 🔤
// 6️⃣ Use **dot notation** (e.g., `person1.firstName`) to access or modify properties of the object. 🔍
// 7️⃣ Object Constructors are useful when you need to create objects dynamically with varying data. 🛠️
// 8️⃣ **Constructor functions** in JavaScript are similar to classes in other programming languages like Java or Python. 🏫

// 🛠️ **When to Use Object Constructors**:
// - When you need to create multiple objects with similar properties and methods.
// - When the structure of the objects is predefined, but the values are dynamic.
// - For example, creating user profiles, product details, or employee records dynamically.

// 🚀 **How to Use Object Constructors**:
// 1️⃣ Define a constructor function with the desired properties and methods.
// 2️⃣ Use the `new` keyword to create instances of the constructor.
// 3️⃣ Access or modify the properties of the created objects using dot notation.
