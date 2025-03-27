// let num = [1, 2, 3, 4, 5];
// num[0] = 15;

// console.log(num); // [15, 2, 3, 4, 5]

// let nums = [1, 2, 3];
// let numbers = [1, 2, 3];

// console.log(nums == numbers); // false

// let userOne = {
//   name: "Asabeneh",
//   role: "teaching",
//   country: "Finland",
// };

// let userTwo = {
//   name: "Asabeneh",
//   role: "teaching",
//   country: "Finland",
// };

// console.log(userOne == userTwo); // false

// let nums = [1, 2, 3];
// let numbers = nums;

// console.log(nums == numbers); // true

// let userOne = {
//   name: "Asabeneh",
//   role: "teaching",
//   country: "Finland",
// };

// let userTwo = userOne;

// console.log(userOne == userTwo); // true

// let randomNum = Math.floor(Math.random() * 100); // generates number from 0 to 9

// console.log(randomNum);

//  strings

// let space = " "; // an empty space string
// let firstName = "Asabeneh";
// let lastName = "Yetayeh";
// let country = "Finland";
// let city = "Helsinki";
// let language = "JavaScript";
// let job = "teacher";
// let quote = "The saying,'Seeing is Believing' is not correct in 2020.";
// let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`;

// let fullName = firstName + space + lastName; // concatenation, merging two string together.
// console.log(fullName);

// const paragraph =
//   "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
// I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
// Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
// In the end of 2019, I was thinking to expand my teaching and to reach \
// to global audience and I started a Python challenge from November 20 - December 19.\
// It was one of the most rewarding and inspiring experience.\
// Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
// I hope you are enjoying too.";

// console.log(paragraph);

// console.log(
//   "I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?"
// ); // line break
// console.log("Days\tTopics\tExercises");
// console.log("Day 1\t3\t5");
// console.log("Day 2\t3\t5");
// console.log("Day 3\t3\t5");
// console.log("Day 4\t3\t5");
// console.log("This is a backslash  symbol (\\)"); // To write a backslash
// console.log('In every programming language it starts with "Hello, World!"');
// console.log("In every programming language it starts with 'Hello, World!'");
// console.log("The saying 'Seeing is Believing' isn't correct in 2020");

// let string = "JavaScript";

// let lastIndex = string.length - 5;

// console.log(lastIndex); // 9
// console.log(string[lastIndex]); // t

// let name = "Devloperxyzzzzz";

// let uppercase = name.toUpperCase();
// let lowercase = name.toLowerCase();

// console.log(uppercase); // DEVELOPER
// console.log(lowercase); // developer

// let sliceName = name.slice(0, name.length / 5);
// console.log(sliceName); // De

// console.log(name.substring(8, 4));

// let string = "30 Days Of JavaScript";

// let split = string.split(" ").reverse().join(" ");
// console.log(split);

// let string = "   30 Days Of JavaScript   ";

// let trim = string.trim("   ");
// console.log(trim);

// let string = "30 Days Of JavaScript";

// let includes = string.includes("Of"); // true
// let includes2 = string.includes("of"); // false
// console.log(includes); // true
// console.log(includes2); // false

// let string = "30 Days Of JavaScript";

// let replace = string.replace("Of", "for");
// console.log(replace);

// let string = "30 Days Of JavaScript";
// let last = string.length - 1;

// let charAt = string.charAt(12); // 3

// console.log(last);
// console.log(charAt); // 3

// let string = "30 Days Of JavaScript";

// let charAt = string.indexOf("O");
// console.log(charAt); //

// let string = "30 Days Of JavaScript";

// console.log(string.indexOf("D")); // 3
// console.log(string.indexOf("Days")); // 3
// console.log(string.indexOf("days")); // -1
// console.log(string.indexOf("a")); // 4
// console.log(string.indexOf("JavaScript")); // 11
// console.log(string.indexOf("Script")); //15
// console.log(string.indexOf("script")); // -1

// let string = "30 Days Of JavaScript";

// let lastIndexOf = string.lastIndexOf("a");

// console.log(lastIndexOf); // 19

// let string = "30 Days Of JavaScript";

// let concat = string.concat(
//   " is amazing",
//   " and enjoyable",
//   " programming language"
// );
// console.log(concat);

// let string = "30 Days Of JavaScript";

// let startsWith = string.startsWith("J"); // false
// console.log(startsWith);

// let string = "30 Days Of JavaScript";

// let endsWith = string.endsWith("t"); // true
// console.log(endsWith);

// let string = "30 Days Of JavaScript";

// let seach = string.search("a");
// console.log(seach);

// let string =
//   "I love JavaScript. If you do not love JavaScript what else can you love.";
// console.log(string.search("love")); // 2
// console.log(string.search(/javascript/gi)); // 7

// let string = "30 Days Of JavaScript";

// let match = string.match("JavaScript");
// console.log(match);

// let txt =
//   "In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge";
// let regEx = /\d+/;
// let regEx2 = /\s+/g;

// let regEx3 = /\S+/g;
// let regEx4 = /\w+/g;

// // d with escape character means d not a normal d instead acts a digit
// // + means one or more digit numbers,
// // if there is g after that it means global, search everywhere.

// console.log(txt.match(regEx)); // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
// console.log(txt.match(regEx2)); // [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
// console.log(txt.match(regEx3)); // ["In", "2019,", "I", "ran", "30", "Days", "of", "Python.", "Now,", "in", "2020", "I", "am", "super", "exited", "to", "start", "this", "challenge"]
// console.log(txt.match(regEx4)); // ["In", "2019", "I", "ran", "30", "Days", "of", "Python", "Now", "in", "2020", "I", "am", "super", "exited", "to", "start", "this", "challenge"]

// console.log(txt.match(/\d+/g)); // ["2019", "30", "2020"]

// let string = "30 Days Of JavaScript";

// let repeat = string.repeat(20).split("").join(", ");

// console.log(repeat);

// Checking Data Types and Casting

// Changing Data Type (Casting)
// Casting: Converting one data type to another data type. We use parseInt(), parseFloat(), Number(), + sign, str() When we do arithmetic operations string numbers should be first converted to integer or float if not it returns an error.

// String to Int
// We can convert string number to a number. Any number inside a quote is a string number. An example of a string number: '10', '5', etc. We can convert string to number using the following methods:

// parseInt()
// Number()
// Plus sign(+)

// let num = "10";
// let intNum = parseInt(num);
// let number = Number(num);
// let plus = +num;
// console.log(intNum); // 10
// console.log(number); // 10
// console.log(plus); // 10

// String to Float
// We can convert string number to a float number. Any number inside a quote is a string number. An example of a string number: '10.5', '5.5', etc. We can convert string to number using the following methods:

// parseFloat()
// Number()
// Plus sign(+)

// let floatNum = "10.5";
// let float = parseFloat(floatNum);
// let numberFloat = Number(floatNum);
// let plusFloat = +floatNum;
// console.log(float); // 10.5
// console.log(numberFloat); // 10.5
// console.log(plusFloat); // 10.5

// Int to String
// We can convert an integer to a string. We can convert an integer to a string using the following methods:

// String()
// Concatenation

// let integer = 10;
// let strInt = String(integer);
// let concat = "" + integer;

// console.log(strInt); // "10"
// console.log(concat); // "10"

// Float to String
// We can convert a float to a string. We can convert a float to a string using the following methods:

// String()
// Concatenation

// let floatNumber = 10.5;
// let strFloat = String(floatNumber);
// let concatFloat = "" + floatNumber;

// console.log(strFloat); // "10.5"
// console.log(concatFloat); // "10.5"

// Float to Int
// We can convert a float to an integer. We can convert a float to an integer using the following methods:

// parseInt()

// let floatNumber = 10.5;
// let int = parseInt(floatNumber);
// console.log(int); // 10

// Exercise: Level 1
//1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.

// let challenge = "30 Days Of JavaScript";
// console.log(challenge);

//2. Print the string on the browser console using console.log()
// console.log("Print the string on the browser console using console.log()");

//3. Print the length of the string on the browser console using console.log()
// let challenge = "30 Days Of JavaScript";
// console.log(challenge.length);

//4. Change all the string to capital letters using toUpperCase() method
// let challenge = "30 Days Of JavaScript";
// console.log(challenge.toUpperCase());

//5. Change all the string to lowercase letters using toLowerCase() method

// let challenge = "30 Days Of JavaScript";
// console.log(challenge.toLowerCase());

//6. Cut (slice) out the first word of the string using substr() or substring() method

// let challenge = "30 Days Of JavaScript";
// let slice = challenge.substring(0, 2);

// console.log(slice);

// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.

// console.log(
//   `The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`
// );

// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

// let num = "10";

// let intNumber = parseInt(num);

// console.log(intNumber);

//  Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
// let floatNum = "9.8";

// let flot = parseFloat(floatNum); // Convert string to float

// if (flot !== 10) {
//   flot = Math.ceil(flot); // Round up to 10
// }

// console.log(flot); // Output: 10

// Check if 'on' is found in both python and jargon

// let python = "python";
// let jargon = "jargon";

// let checkPython = python.includes("on");
// let checkJargon = jargon.includes("on");

// console.log(checkPython); // true
// console.log(checkJargon); // false

// I hope this course is not full of jargon. Check if jargon is in the sentence.

// let sentence = "I hope this course is not full of jargon.";

// let checkJargon = sentence.includes("jargon");
// console.log(checkJargon); // true

// Generate a random number between 0 and 100 inclusive.

// let randomNumber = Math.floor(Math.random() * 100);

// console.log(randomNumber);

// Generate a random number between 50 and 100 inclusive.

// let randomNumber = Math.floor(Math.random() * 50) + 50;

// console.log(randomNumber);

// Generate a random number between 0 and 255 inclusive.

// let randomNumber = Math.floor(Math.random() * 255);

// console.log(randomNumber);

// Access the 'JavaScript' string characters using a random number.
// let string = "JavaScript";
// let randomIndex = Math.floor(Math.random() * string.length);
// console.log(randomIndex);

// Use console.log() and escape characters to print the following pattern.
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125

// console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");

// Use substr to slice out the phrase because because because in the following sentence: 'You cannot end a sentence with because because because is a conjunction'.
// let sentence =
//   "You cannot end a sentence with because because because is a conjunction";

// let slice = sentence.substr(31, 23);
// console.log(slice);
