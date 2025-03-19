// 🏗️ **Control Flow in JavaScript**

// ✨ **Key Concepts**
// - Decision-making in programs
// - Boolean expressions
// - Branching logic

// ✅ **Examples:**

// 1️⃣ **Simple if condition**
/**
 * 📌 @real_time_scenario
 * - Checking if a user is eligible for a discount.
 *
 * 🏷️ @key_concepts
 * - Single condition evaluation.
 * - Boolean expressions.
 */
let a = 5;
if (a > 0) {
  console.log("✅ a is positive");
}
// Output: ✅ a is positive

// 2️⃣ **if-else condition**
/**
 * 📌 @real_time_scenario
 * - Checking if a user is a minor or an adult.
 *
 * 🏷️ @key_concepts
 * - Two-way branching.
 * - Boolean expressions.
 * - Comparison operators.
 */
let age = 18;
if (age >= 18) {
  console.log("🧑 Adult");
} else {
  console.log("🧒 Minor");
}
// Output: 🧑 Adult

// 3️⃣ **if-else ladder (multiple conditions)**
/**
 * 📌 @real_time_scenario
 * - Student grading system based on exam scores.
 *
 * 🏷️ @key_concepts
 * - Multi-way branching.
 * - Logical flow of conditions.
 * - Comparison operators.
 */
let score = 75;
if (score >= 90) {
  console.log("🏆 Grade A");
} else if (score >= 80) {
  console.log("🥈 Grade B");
} else if (score >= 70) {
  console.log("🥉 Grade C");
} else {
  console.log("❌ Grade D");
}
// Output: 🥉 Grade C

// 4️⃣ **Nested if-else**
/**
 * 📌 @real_time_scenario
 * - Checking if a number is positive and even/odd.
 *
 * 🏷️ @key_concepts
 * - Nested conditions.
 * - Logical operators.
 * - Code block scope.
 */
let num = 15;
if (num > 0) {
  if (num % 2 === 0) {
    console.log("🔵 Positive even number");
  } else {
    console.log("🟢 Positive odd number");
  }
}
// Output: 🟢 Positive odd number

// 5️⃣ **switch statement (better alternative to multiple if-else)**
/**
 * 📌 @real_time_scenario
 * - Displaying the day of the week based on a numeric input.
 *
 * 🏷️ @key_concepts
 * - Multi-way branching.
 * - Constant case evaluation.
 * - Break statement to prevent fall-through.
 */
let day = 3;
switch (day) {
  case 1:
    console.log("📅 Monday");
    break;
  case 2:
    console.log("📅 Tuesday");
    break;
  case 3:
    console.log("📅 Wednesday");
    break;
  case 4:
    console.log("📅 Thursday");
    break;
  case 5:
    console.log("📅 Friday");
    break;
  case 6:
    console.log("📅 Saturday");
    break;
  case 7:
    console.log("📅 Sunday");
    break;
  default:
    console.log("⚠️ Invalid day");
}
// Output: 📅 Wednesday
