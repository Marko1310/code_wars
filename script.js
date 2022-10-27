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

// function sumMix(x) {
//   let sum = 0;
//   for (let i = 0; i < x.length; i++) {
//     sum += Number(x[i]);
//     console.log(sum);
//   }
//   return sum;
// }

// 7. BEGINNERS SERIES #2 CLOCK

// Your task is to write a function which returns the time since midnight in milliseconds.
// Input constraints:
// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

// function past(h, m, s) {
//   return h * 3600000 + m * 60000 + s * 1000;
// }

// 8. REMOVE STRING SPACES
//Simple, remove the spaces from the string, then return the resultant string.

// function noSpace(x) {
//   let sentence = " ";
//   for (let i = 0; i < x.length; i++) {
//     if (x[i] !== " ") {
//       sentence += x[i];
//     }
//   }
//   return sentence;
// }

// 9. REVERSE WORDS
//Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// function reverseWords(str) {
//   let word = [];
//   let sentence = [];
//   let fullSentence = "";

//   //Split the strings to an array separated by space
//   let arr = str.split(" ");

//   // Loop through the array and each element(word) split to array of letters
//   // Then reverese that array of letters
//   // And join every reversed letter to a word
//   for (let i = 0; i < arr.length; i++) {
//     word[i] = arr[i].split("").reverse("").join("");
//     sentence = sentence.concat(word[i]);
//   }
//   fullSentence = sentence.join(" ");
//   return fullSentence;
// }

// 10. PIG LATIN
//Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// function pigIt(str) {
//   let newArr = [];
//   let letter = [];
//   let sent;
//   // Split strings into array of words
//   let words = str.split(" ");
//   // For every element of array split words to letters
//   // extract first letter with splice
//   // push first lette to end and add ay
//   // join the letters to string

//   words.forEach((x) => {
//     if (x === "!" || x === "." || x === "," || x === "?") {
//       newArr.push(x);
//     } else {
//       letter = x.split("");
//       letter.push(letter.splice(0, 1).toString(), "a", "y");
//       newArr.push(letter.join(""));
//     }
//   });
//   return newArr.join(" ");
// }

// 11. TWO SUM
// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).
// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.
// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).
// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]

// function twoSum(numbers, target) {
//   let first = 0;
//   let second = 0;
//   let answer = [];
//   for (let i = 0; i < numbers.length; i++) {
//     first = numbers[i];
//     let index = 0;
//     for (let j = i + 1; j < numbers.length; j++) {
//       index++;
//       second = numbers[j];
//       if (first + second === target) {
//         answer.push(i, j);
//         return answer;
//       }
//     }
//   }
// }

// 12. FIRST NON - REPEATING CHARACTER
// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.
// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.
// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.
// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

// function firstNonRepeatingLetter(s) {
//   let fill = [];
//   let counter = 0;
//   for (let i = 0; i < s.length; i++) {
//     for (let j = i + 1; j < s.length; j++) {
//       if (s[i].toLowerCase() === s[j].toLowerCase()) {
//         fill.push(s[j].toLowerCase());
//       }
//     }
//     if (!fill.includes(s[i].toLowerCase())) {
//       return s[i];
//     }
//   }
//   return "None";
// }

// console.log(firstNonRepeatingLetter("aaaaaa"));

// 13. SUM OF PAIRS
//Sum of Pairs
// Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.
// sum_pairs([10, 5, 2, 3, 7, 5],         10)
// #              ^-----------^   5 + 5 = 10, indices: 1, 5
// #                    ^--^      3 + 7 = 10, indices: 3, 4 *
// #  * entire pair is earlier, and therefore is the correct answer
// == [3, 7]

// Ineficient code for large arrays
// function sum_pairs(arr, sum) {
//   let solution = [];
//   for (let i = 0; i < arr.length; i++) {
//     // For every i move j to the left and search if the sum is equal to the sum
//     for (let j = i - 1; j >= 0; j--) {
//       if (arr[i] + arr[j] === sum) {
//         solution.push(arr[j], arr[i]);
//         return solution;
//       }
//     }
//   }
//   // If there is no sum, return undefined
//   return undefined;
// }

// console.log(sum_pairs([10, 5, 2, 3, 7, 5], 10));

// More efficient
// function sum_pairs(arr, sum) {
//   const setOfNumbers = new Set();
//   let solution = [];
//   for (let i = 0; i < arr.length; i++) {
//     // Calculate other integer by subtracting the final sum with the integer [i]
//     let rest = sum - arr[i];
//     // If the set contains already the integer, then their sum will be the first sum to give the requested sum, else: fill the set with the arr[i] that was already checked and repeat the process until the sum === requested sum
//     if (setOfNumbers.has(rest)) {
//       solution.push(rest, arr[i]);
//       return solution;
//     } else {
//       setOfNumbers.add(arr[i]);
//     }
//   }
//   // If there is no sum, return undefined
//   return undefined;
// }

// 14. MAXIMUM SUBARRAY SUM
//The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:
// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.
// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

// var maxSequence = function (arr) {
//   let sum = 0;
//   let sumMax = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = arr[i];
//     for (let j = i + 1; j <= arr.length; j++) {
//       if (arr.length === 0) {
//         return 0;
//       } else {
//         if (sumMax < sum) {
//           sumMax = sum;
//         }
//         sum += arr[j];
//       }
//     }
//   }
//   return sumMax;
// };

// 15. SCRAMBLIES
//Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
// Notes:
// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
// Examples:
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

// function scramble(str1, str2) {
//   let st1 = str1.split("");
//   let st2 = str2.split("");
//   st1.forEach((element) => {
//     if (st2.includes(element)) st2.splice(st2.indexOf(element), 1);
//   });
//   return st2.length === 0;
// }

// let str1 = "rqodlw";
// let str2 = "world";
// console.log(scramble(str1, str2));

// 16. MULTIPLES OF 3 OR 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).
// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number) {
  let arr = [];

  if (number < 0) return 0;

  // Check every number and decreasing by one, push into array
  for (let i = 1; i < number; i++) {
    let lowerNumber = number - i;
    if (lowerNumber % 3 === 0 || lowerNumber % 5 === 0) {
      arr.push(lowerNumber);
    }
  }

  // If there are elements in array
  if (arr.length > 0)
    // 1. sort array
    // 2. filter new array where the element is not the same as previous
    // 3. reduce the array: sum all values
    return arr
      .sort()
      .filter(function (el, index, arr) {
        return el !== arr[index - 1];
      })
      .reduce((previousValue, currentValue) => previousValue + currentValue);

  //If no elements in array return 0
  return 0;
}
