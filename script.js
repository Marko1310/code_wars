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

function repeatStr(n, s) {
  let string = "";
  for (let i = 0; i < n; i++) {
    string += s;
  }
  return string;
}
