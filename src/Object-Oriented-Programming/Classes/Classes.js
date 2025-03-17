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

  // Simulating method overloading using default parameters
  newCar(make, model, year = 2023, color = "white") {
    return new Car(make, model, year, color);
  }
}

// ✅ **Inheritance and Method Overriding**
class ElectricCar extends Car {
  constructor(make, model, year, color, batteryCapacity) {
    // Call the parent class constructor using `super`
    super(make, model, year, color);
    this.batteryCapacity = batteryCapacity; // Additional property for ElectricCar
  }

  // Overriding the `drive` method
  drive() {
    return "Let's go on a silent ride 🔋🚗";
  }

  // Method to display electric car details
  getDetails() {
    // Use `super` to call the parent class method
    const parentDetails = super.getDetails();
    return `${parentDetails}, Battery Capacity: ${this.batteryCapacity} kWh`;
  }
}

// ✅ **New Example: Normal Class with Method Overloading**
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  // Method to make the animal speak
  speak(sound = "generic sound") {
    return `${this.name} makes a ${sound}`;
  }

  // Method to display animal details
  getDetails() {
    return `Animal Details: Name: ${this.name}, Species: ${this.species}`;
  }

  // Simulating method overloading using default parameters
  updateDetails(name, species = "Unknown") {
    this.name = name;
    this.species = species;
    return `Updated Animal: ${this.name}, Species: ${this.species}`;
  }
}

// ✅ **New Example: Inheritance with Method Overriding**
class Bird extends Animal {
  constructor(name, species, wingSpan) {
    super(name, species); // Call the parent class constructor
    this.wingSpan = wingSpan; // Additional property for Bird
  }

  // Overriding the `speak` method
  speak(sound = "chirp") {
    return `${this.name} chirps: ${sound}`;
  }

  // Method to display bird details
  getDetails() {
    const parentDetails = super.getDetails(); // Call parent class method
    return `${parentDetails}, Wing Span: ${this.wingSpan} cm`;
  }
}

// 🆕 **Creating Instances**
const car1 = new Car("Toyota", "Corolla", 2021, "red");
const car2 = new Car("Honda", "Civic", 2022, "blue");
const electricCar = new ElectricCar("Tesla", "Model 3", 2023, "white", 75);

// 🔍 **Using Properties and Methods**
console.log(car1.make); // Output: Toyota
console.log(car2.drive()); // Output: Let's go on a new ride 🚗
console.log(car1.changeColor("green")); // Output: The new color is green
console.log(car2.getDetails()); // Output: Car Details: Honda Civic, Year: 2022, Color: blue
console.log(car1.newCar("Ford", "Focus", 2023, "black")); // Output: The new car is a Ford Focus from 2023 in black

// Using the ElectricCar class
console.log(electricCar.drive()); // Output: Let's go on a silent ride 🔋🚗
console.log(electricCar.getDetails()); // Output: Car Details: Tesla Model 3, Year: 2023, Color: white, Battery Capacity: 75 kWh

// Using the Animal class
const animal1 = new Animal("Leo", "Lion");
console.log(animal1.speak("roar")); // Output: Leo makes a roar
console.log(animal1.getDetails()); // Output: Animal Details: Name: Leo, Species: Lion
console.log(animal1.updateDetails("Max", "Tiger")); // Output: Updated Animal: Max, Species: Tiger

// Using the Bird class
const bird1 = new Bird("Tweety", "Canary", 25);
console.log(bird1.speak()); // Output: Tweety chirps: chirp
console.log(bird1.getDetails()); // Output: Animal Details: Name: Tweety, Species: Canary, Wing Span: 25 cm

// 📝 **Key Notes**
// - Classes provide a clean and organized way to define objects and their behavior.
// - Inheritance allows extending functionality and reusing code.
// - Method overriding enables customizing behavior in derived classes.
// - Default parameters can simulate method overloading in JavaScript.

// 🚀 **How to Implement**
// - Use the `class` keyword to define a class.
// - Use the `constructor` method to initialize properties.
// - Use `extends` to create a subclass and `super` to call the parent class constructor or methods.

// 🛠️ **When to Use**
// - Use classes when you need to create multiple objects with similar properties and methods.
// - Use inheritance to share functionality between related classes.
// - Use method overriding to customize behavior in subclasses.
