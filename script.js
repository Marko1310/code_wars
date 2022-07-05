"use strict";

// 1. SUM OF POSITIVE
//You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

// function positiveSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= 0) {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }

// 2. STRING REPEAT
// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// function repeatStr(n, s) {
//   let string = "";
//   for (let i = 0; i < n; i++) {
//     string += s;
//   }
//   return string;
// }

// 3. FAKE BINARY
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
//Note: input will never be an empty string

// function fakeBin(x) {
//   let str = x.split("");
//   let result = [];
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] < 5) {
//       result.push(0);
//     } else {
//       result.push(1);
//     }
//   }
//   return result.join("");
// }

// console.log(fakeBin(47384843));

// 4. BASIC MATHEMATICAL OPERATIONS
// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// function basicOp(operation, value1, value2) {
//   if (operation === "+") {
//     return value1 + value2;
//   } else if (operation === "-") {
//     return value1 - value2;
//   } else if (operation === "*") {
//     return value1 * value2;
//   } else if (operation === "/") {
//     return value1 / value2;
//   }
// }

// 5. COUNT OF POSITIVE / SUM OF NEGATIVE
// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.

// function countPositivesSumNegatives(input) {
//   let countPositive = 0;
//   let sumNegative = 0;
//   let sum = [];
//   if (input === null) {
//     return [];
//   } else {
//     for (let i = 0; i < input.length; i++) {
//       let counter = 0;
//       if (input[i] > 0) {
//         counter++;
//         countPositive += counter;
//       } else {
//         sumNegative += input[i];
//       }
//     }
//   }
//   sum.push(countPositive, sumNegative);

//   return countPositive === 0 && sumNegative === 0 ? [] : sum;
// }

// 6. SUM MIXED ARRAY

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

function sumMix(x) {
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    sum += Number(x[i]);
    console.log(sum);
  }
  return sum;
}
