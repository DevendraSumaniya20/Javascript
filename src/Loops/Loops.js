// 1 to 5 pattern

let i, j;
// for (i = 0; i <= 5; i++) {
//   for (j = 0; j <= 1; j++) {
//     // console.log(i + "");
//     document.writeln(i + "");
//   }
//   //   console.log("\n");
//   document.writeln("<br>");
// }

for (let i = 1; i <= 5; i++) {
  // Print spaces for right alignment
  for (let k = 5; k > i; k--) {
    document.write("&nbsp;&nbsp;");
  }
  // Print numbers
  for (let j = 1; j <= i; j++) {
    document.write(j + " ");
  }
  document.write("<br>");
}

/*
// Pattern 1: Right-angled triangle
console.log("Pattern 1:");
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

// Pattern 2: Inverted right-angled triangle
console.log("\nPattern 2:");
for (let i = 5; i >= 1; i--) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

// Pattern 3: Pyramid
console.log("\nPattern 3:");
for (let i = 1; i <= 5; i++) {
  let row = " ".repeat(5 - i) + "*".repeat(2 * i - 1);
  console.log(row);
}

// Pattern 4: Diamond
console.log("\nPattern 4:");
for (let i = 1; i <= 5; i++) {
  let row = " ".repeat(5 - i) + "*".repeat(2 * i - 1);
  console.log(row);
}
for (let i = 4; i >= 1; i--) {
  let row = " ".repeat(5 - i) + "*".repeat(2 * i - 1);
  console.log(row);
}

// Pattern 5: Hollow square
console.log("\nPattern 5:");
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= 5; j++) {
    if (i === 1 || i === 5 || j === 1 || j === 5) {
      row += "*";
    } else {
      row += " ";
    }
  }
  console.log(row);
}
*/
