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

function fakeBin(x) {
  let str = x.split("");
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] < 5) {
      result.push(0);
    } else {
      result.push(1);
    }
  }
  return result.join("");
}
