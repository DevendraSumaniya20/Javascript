/*
Encapsulation in JavaScript:
1. Data Privacy: Using private fields (#) to hide internal state
2. Data Protection: Controlling access through public methods
3. Implementation Hiding: Internal workings are hidden from outside
4. Interface: Providing a clean public API for interaction
*/

// ✨ **Key Concepts**
// - Encapsulation bundles data and methods that operate on that data within a single unit
// - Private fields and methods are accessible only within the class
// - Public interface provides controlled access to the internal state
// - Protects data integrity and hides implementation details

// ✅ **Example: Class Declaration**
// The BankAccount class demonstrates encapsulation by:
// - Using private fields for data (#balance, #accountNumber, #transactionHistory)
// - Providing public methods for controlled interaction
// - Implementing validation and business rules internally

class BankAccount {
  // Private fields (marked with #)
  #balance;
  #accountNumber;
  #transactionHistory;

  constructor(accountNumber, initialBalance = 0) {
    this.#accountNumber = accountNumber;
    this.#balance = initialBalance;
    this.#transactionHistory = [];
  }

  // Private method - internal use only
  #validateAmount(amount) {
    return amount > 0 && typeof amount === "number";
  }

  // Public methods - interface for external interaction
  deposit(amount) {
    if (!this.#validateAmount(amount)) {
      throw new Error("Invalid deposit amount");
    }
    this.#balance += amount;
    this.#transactionHistory.push({
      type: "deposit",
      amount,
      date: new Date(),
    });
  }

  withdraw(amount) {
    if (!this.#validateAmount(amount)) {
      throw new Error("Invalid withdrawal amount");
    }
    if (amount > this.#balance) {
      throw new Error("Insufficient funds");
    }
    this.#balance -= amount;
    this.#transactionHistory.push({
      type: "withdrawal",
      amount,
      date: new Date(),
    });
  }

  // Getter methods - controlled access to private data
  get balance() {
    return this.#balance;
  }

  get accountDetails() {
    return {
      accountNumber: this.#accountNumber,
      balance: this.#balance,
    };
  }

  get transactionHistory() {
    // Return a copy to maintain encapsulation
    return [...this.#transactionHistory];
  }
}

// Usage examples
try {
  // Creating a new account
  const account = new BankAccount("1234567890", 1000);

  // Interacting through public interface
  account.deposit(500);
  account.withdraw(200);

  // Accessing data through getters
  console.log("Current Balance:", account.balance); // 1300
  console.log("Account Details:", account.accountDetails);
  console.log("Transaction History:", account.transactionHistory);

  // Demonstrating encapsulation
  // These will throw errors:
  // console.log(account.#balance); // ❌ Cannot access private field
  // account.#validateAmount(100); // ❌ Cannot access private method
  // account.#transactionHistory.push({}); // ❌ Cannot modify private data
} catch (error) {
  console.error("Error:", error.message);
}

// Benefits of Encapsulation demonstrated in this example:
// 1. Data hiding (private fields)
// 2. Controlled access (through getters)
// 3. Input validation (private validation method)
// 4. Immutable history (returning copies)

// 📝 **Key Notes**
// - Private fields are denoted with # prefix in JavaScript
// - Encapsulation helps in maintaining and modifying code
// - Prevents unauthorized access to internal implementation
// - Reduces complexity for the end user of the class

// 🚀 **How to Implement**
// 1. Identify the data that needs to be protected
// 2. Define private fields using the # prefix
// 3. Create public methods for necessary interactions
// 4. Implement validation and business logic
// 5. Use getters/setters for controlled access

// 🛠️ **When to Use Polymorphism**
// - When you need to protect sensitive data
// - When implementing complex business rules
// - When creating maintainable and scalable code
// - When providing a clean API for other developers
