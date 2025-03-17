// 🏗️ **Inheritance in JavaScript**
// Inheritance allows a class to inherit properties and methods from another class.

// ✅ **Base Class**
class Car {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }

  drive() {
    return "Let's go on a new ride 🚗";
  }

  changeColor(newColor) {
    this.color = newColor;
    return `The new color is ${this.color}`;
  }

  getDetails() {
    return `Car Details: ${this.make} ${this.model}, Year: ${this.year}, Color: ${this.color}`;
  }
}

// ✅ **Derived Class**
class ElectricCar extends Car {
  constructor(make, model, year, color, batteryCapacity) {
    // Call the parent class constructor using `super`
    super(make, model, year, color);
    this.batteryCapacity = batteryCapacity; // New property specific to ElectricCar
  }

  // New method specific to ElectricCar
  chargeBattery() {
    return `Charging the battery to ${this.batteryCapacity} kWh 🔋`;
  }

  // Overriding a method from the parent class
  getDetails() {
    return `${super.getDetails()}, Battery Capacity: ${
      this.batteryCapacity
    } kWh`;
  }
}

// 🆕 **Creating Instances**
const car1 = new Car("Toyota", "Corolla", 2021, "red");
const electricCar1 = new ElectricCar("Tesla", "Model 3", 2023, "white", 75);

// 🔍 **Using Properties and Methods**
console.log(car1.getDetails()); // Output: Car Details: Toyota Corolla, Year: 2021, Color: red
console.log(electricCar1.getDetails()); // Output: Car Details: Tesla Model 3, Year: 2023, Color: white, Battery Capacity: 75 kWh
console.log(electricCar1.chargeBattery()); // Output: Charging the battery to 75 kWh 🔋
console.log(electricCar1.drive()); // Output: Let's go on a new ride 🚗

// 📝 **Key Notes**
// 1️⃣ Use the `extends` keyword to create a derived class.
// 2️⃣ Use `super` to call the parent class constructor or methods.
// 3️⃣ Derived classes can add new properties and methods or override existing ones.
// 4️⃣ Inheritance promotes code reuse and a cleaner structure.
