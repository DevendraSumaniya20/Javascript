// QUESTION 01: Password ASCII 🔐

/*
Problem statement: Aman, who is working at a software company 👨‍💻 forgot the password 
of his Linkedin id 🔑. But he knows the ASCII values of his password in reverse order. 
Help aman to find the password.

To decode the password:
1️⃣ First reverse the string of digits
2️⃣ Pick valid values from the string
3️⃣ Convert them to ASCII equivalents
4️⃣ Some values will have two digits, others three

ASCII value ranges 📋:
 The ASCII value of A to Z is 65 to 90 📢
 The ASCII value of a to z is 97 to 122 📢
 The ASCII value of space characters is 32 📢

Note: The password only has alphabets and blank spaces ✨

Given a string 📝, decode the password by following the steps mentioned above.

Constraints:
1<= |s| <=10^5
s[i] is an ascii character in the range [A-Za-z] or a space character

Sample Input: 📥
796115110113721110141108

Sample Output: 📤
PrepInsta

*/

function decodePassword(s) {
  // Step 1: Reverse the string
  let reversed = s.split("").reverse().join("");

  let password = "";
  let i = 0;

  // Step 2: Process the string from left to right
  while (i < reversed.length) {
    // Try to parse 3 digits first
    let code = parseInt(reversed.slice(i, i + 3));

    // If it's a valid ASCII code for letters or space
    if (
      (code >= 65 && code <= 90) ||
      (code >= 97 && code <= 122) ||
      code === 32
    ) {
      password += String.fromCharCode(code);
      i += 3;
    } else {
      // Try 2 digits if 3 digits don't work
      code = parseInt(reversed.slice(i, i + 2));
      if (
        (code >= 65 && code <= 90) ||
        (code >= 97 && code <= 122) ||
        code === 32
      ) {
        password += String.fromCharCode(code);
        i += 2;
      } else {
        i++; // Skip invalid codes
      }
    }
  }

  return password;
}

let s = "796115110113721110141108";
console.log(decodePassword(s)); // Output: PrepInsta
