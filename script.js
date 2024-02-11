'use strict';

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

// return(fakeBin(47384843));

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
//     return(sum);
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

// function twoSum(numbers, target) {
// 	const previousValue = {};
// 	for (let i = 0; i < numbers.length; i++) {
// 		const currentNumber = numbers[i];
// 		const neededValue = target - currentNumber;
// 		if (previousValue[neededValue] !== undefined) {
// 			return [previousValue[neededValue], i];
// 		}
// 		previousValue[currentNumber] = i;
// 	}
// }

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

// return(firstNonRepeatingLetter("aaaaaa"));

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

// return(sum_pairs([10, 5, 2, 3, 7, 5], 10));

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
// return(scramble(str1, str2));

// 16. MULTIPLES OF 3 OR 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).
// Note: If the number is a multiple of both 3 and 5, only count it once.

// function solution(number) {
//   let arr = [];

//   if (number < 0) return 0;

//   // Check every number and decreasing by one, push into array
//   for (let i = 1; i < number; i++) {
//     let lowerNumber = number - i;
//     if (lowerNumber % 3 === 0 || lowerNumber % 5 === 0) {
//       arr.push(lowerNumber);
//     }
//   }

//   // If there are elements in array
//   if (arr.length > 0)
//     // 1. sort array
//     // 2. filter new array where the element is not the same as previous
//     // 3. reduce the array: sum all values
//     return arr
//       .sort()
//       .filter(function (el, index, arr) {
//         return el !== arr[index - 1];
//       })
//       .reduce((previousValue, currentValue) => previousValue + currentValue);

//   //If no elements in array return 0
//   return 0;
// }

// 17. Counting sheep
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
// For example,
// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.
// Hint: Don't forget to check for bad values like null/undefined

// function countSheeps(arrayOfSheep) {
//   let n = 0;
//   arrayOfSheep.forEach((el) => (el === true ? (n += 1) : n));
//   return n;
// }

// const arr = [
//   true,
//   true,
//   true,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   true,
//   false,
//   true,
//   false,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   false,
//   true,
//   true,
// ];

// return(countSheeps(arr));

// 18. SUM OF DIGITS / DIGITAL ROOT

// function digitalRoot(n) {
//   let sum = 0;
//   if (n < 10) {
//     return n;
//   } else {
//     const arr = n.toString().split("");
//     arr.forEach((el) => {
//       sum += +el;
//     });
//     return digitalRoot(sum);
//   }
// }

// return(digitalRoot(456));

// 19. COMPLEMENTARY DNA
//Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
// If you want to know more: http://en.wikipedia.org/wiki/DNA
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)
// Example: (input --> output)
// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

// function DNAStrand(dna) {
//   const arr = [];
//   dna.split("").forEach((el) => {
//     if (el === "A") {
//       arr.push("T");
//     }
//     if (el === "T") {
//       arr.push("A");
//     }
//     if (el === "C") {
//       arr.push("G");
//     }
//     if (el === "G") {
//       arr.push("C");
//     }
//   });
//   return arr.join("");
// }

// 20. WHO LIKES IT
//You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

// function likes(names) {
//   switch (names.length) {
//     case 0:
//       return `no one likes this`;

//     case 1:
//       return `${names[0]} likes this`;

//     case 2:
//       return `${names[0]} and ${names[1]} like this`;

//     case 3:
//       return `${names[0]}, ${names[1]} and ${names[2]} like this`;

//     default:
//       return `${names[0]}, ${names[1]} and ${
//         names.length - 2
//       } others like this`;
//   }
// }

// console.log(likes(["a", "b", "c", "f", "c"]));

//////// LEETCODE //////
// 21.Array Prototype Last
// Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

// Example 1:
// Input: nums = [1,2,3]
// Output: 3
// Explanation: Calling nums.last() should return the last element: 3.

// Example 2:
// Input: nums = []
// Output: -1
// Explanation: Because there are no elements, return -1.

// Array.prototype.last = function () {
//   if (this.length === 0) {
//     return -1;
//   } else {
//     return this[this.length - 1];
//   }
// };

// const arr = [1, 2, 5, 6, 7];

// console.log(arr.last());

// 22. Counter
//Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
// Example 1:
// Input:
// n = 10
// ["call","call","call"]
// Output: [10,11,12]
// Explanation:
// counter() = 10 // The first time counter() is called, it returns n.
// counter() = 11 // Returns 1 more than the previous time.
// counter() = 12 // Returns 1 more than the previous time.

// Example 2:
// Input:
// n = -2
// ["call","call","call","call","call"]
// Output: [-2,-1,0,1,2]
// Explanation: counter() initially returns -2. Then increases after each sebsequent call.

// var createCounter = function (n) {
//   let a = -1;
//   return function () {
//     a++;
//     return n + a;
//   };
// };

// const counter = createCounter(10);
// console.log(counter());
// console.log(counter());
// console.log(counter());

// 23. Sleep
// Given a positive integer millis, write an asyncronous function that sleeps for millis milliseconds. It can resolve any value.

// Example 1:
// Input: millis = 100
// Output: 100
// Explanation: It should return a promise that resolves after 100ms.
// let t = Date.now();
// sleep(100).then(() => {
//   console.log(Date.now() - t); // 100
// });

// Example 2:
// Input: millis = 200
// Output: 200
// Explanation: It should return a promise that resolves after 200ms.

// async function sleep(millis) {
//   return new Promise((resolveInner) => {
//     setTimeout(resolveInner, millis);
//   });
// }

// 24. Function Composition

// Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.
// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
// The function composition of an empty list of functions is the identity function f(x) = x.
// You may assume each function in the array accepts one integer as input and returns one integer as output.

// Example 1:
// Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
// Output: 65
// Explanation:
// Evaluating from right to left ...
// Starting with x = 4.
// 2 * (4) = 8
// (8) * (8) = 64
// (64) + 1 = 65

// Example 2:
// Input: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
// Output: 1000
// Explanation:
// Evaluating from right to left ...
// 10 * (1) = 10
// 10 * (10) = 100
// 10 * (100) = 1000

// Example 3:
// Input: functions = [], x = 42
// Output: 42
// Explanation:
// The composition of zero functions is the identity function

// var compose = function (functions) {
//   return function (x) {
//     if (functions.length === 0) {
//       return x;
//     } else {
//       const reverse = functions.reverse();
//       reverse.map((fun) => {
//         x = fun(x);
//       });
//       return x;
//     }
//   };
// };

// const fn = compose([(x) => x + 1, (x) => 2 * x]);

// console.log(fn(4));

// 25. Filter elements from Array
// Given an integer array arr and a filtering function fn, return a new array with a fewer or equal number of elements.
// The returned array should only contain elements where fn(arr[i], i) evaluated to a truthy value.
// Please solve it without the built-in Array.filter method.

// Example 1:
// Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
// Output: [20,30]
// Explanation:
// const newArray = filter(arr, fn); // [20, 30]
// The function filters out values that are not greater than 10

// Example 2:
// Input: arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
// Output: [1]
// Explanation:
// fn can also accept the index of each element
// In this case, the function removes elements not at index 0

// Example 3:
// Input: arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }
// Output: [-2,0,1,2]
// Explanation:
// Falsey values such as 0 should be filtered out

// var filter = function (arr, fn) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (fn(arr[i], i)) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// };

// 26. Map
// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
// The returned array should be created such that returnedArray[i] = fn(arr[i], i).
// Please solve it without the built-in Array.map method.

// Example 1:
// Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// Output: [2,3,4]
// Explanation:
// const newArray = map(arr, plusone); // [2,3,4]
// The function increases each value in the array by one.

// Example 2:
// Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
// Output: [1,3,5]
// Explanation: The function increases each value by the index it resides in.

// Example 3:
// Input: arr = [10,20,30], fn = function constant() { return 42; }
// Output: [42,42,42]
// Explanation: The function always returns 42.

// var map = function (arr, fn) {
//   let temp = [];
//   for (i = 0; i < arr.length; i++) {
//     temp.push(fn(arr[i], i));
//   }
//   return temp;
// };

// 26. Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// Solution 1
// var twoSum = function (nums, target) {
//   let indexes = [];
//   for (i = 0; i < nums.length; i++) {
//     for (j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         indexes.push(i, j);
//       }
//     }
//   }
//   return indexes;
// };

// // Solution 2
// var twoSum = function (nums, target) {
//   const previousValue = {};
//   for (let i = 0; i < nums.length; i++) {
//     const currentNumber = nums[i];
//     const neededValue = target - currentNumber;
//     const index2 = previousValue[neededValue];
//     if (index2 !== undefined) {
//       return [index2, i];
//     } else {
//       previousValue[currentNumber] = i;
//     }
//   }
// };

// twoSum([3, 2, 3, 4, 5], 9);

//27. Palindrome Number
// Given an integer x, return true if x is a
// palindrome, and false otherwise.

// Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// var isPalindrome = function (x) {
//   const array = x.toString();
//   const reversedArray = array.split('').reverse().join('');
//   return array === reversedArray;
// };

// console.log(isPalindrome(-10));

// 28. Valid Parentheses
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

// var isValid = function (s) {
//   const hashMap = { '(': ')', '{': '}', '[': ']' };

//   const stack = [];
//   for (let ch of s) {
//     if (hashMap[ch]) {
//       stack.push(hashMap[ch]);
//     } else if (stack.length > 0 && stack[stack.length - 1] === ch) {
//       stack.pop();
//     } else {
//       return false;
//     }
//   }
//   return stack.length === 0;
// };

// console.log(isValid('[[]()]'));

//29. Find the Index of the First Occurrence in a String
// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:
// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.

// var strStr = function (haystack, needle) {
//   const array = haystack.split(needle).join(' ');
//   console.log(array);
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === ' ') {
//       return i;
//     }
//   }
//   return -1;
// };

// console.log(strStr('hello', 'll'));

// 30. Check if Object Instance of Class
// Write a function that checks if a given value is an instance of a given class or superclass. For this problem, an object is considered an instance of a given class if that object has access to that class's methods.
// There are no constraints on the data types that can be passed to the function. For example, the value or the class could be undefined.

// Example 1:
// Input: func = () => checkIfInstanceOf(new Date(), Date)
// Output: true
// Explanation: The object returned by the Date constructor is, by definition, an instance of Date.

// var checkIfInstanceOf = function (obj, classFunction) {
//   return Object.getPrototypeOf(obj) === classFunction.prototype;
// };

// console.log(checkIfInstanceOf(new Date(), Date));

// 31.Add Two Numbers

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// var addTwoNumbers = function (l1, l2) {
//   const k1 = Number(l1.reverse().join(''));
//   const k2 = Number(l2.reverse().join(''));
//   const sum = (k1 + k2).toString().split('').reverse();
//   return sum;
// };

// addTwoNumbers([2, 4, 3], [5, 6, 4]);

//32.Contains Duplicate
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true

// var containsDuplicate = function (nums) {
//   const sorted = nums.sort();
//   for (let i = 0; i < sorted.length; i++) {
//     if (sorted[i] === sorted[i + 1]) {
//       return true;
//     }
//   }
//   return false;
// };

// containsDuplicate([2, 14, 18, 22, 22]);

//33. Valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// var isAnagram = function (s, t) {
//   const sortedS = s.split('').sort().join('');
//   const sortedt = t.split('').sort().join('');
//   if (sortedS === sortedt) return true;
//   return false;
// };

// var isAnagram = function (s, t) {
//   if (s.length !== t.length) return false;
//   const sCount = {};
//   const tCount = {};
//   const N = s.length;
//   for (let i = 0; i < N; i++) {
//     if (!sCount[s[i]]) sCount[s[i]] = 0;
//     sCount[s[i]]++;
//     if (!tCount[t[i]]) tCount[t[i]] = 0;
//     tCount[t[i]]++;
//   }
//   for (let ch in sCount) {
//     console.log(sCount[ch], tCount[ch]);
//     if (sCount[ch] !== tCount[ch]) return false;
//   }
//   return true;
// };

// console.log(isAnagram('rat', 'car'));

//34. Two sum
// var twoSum = function (nums, target) {
//   const previousValue = {};
//   for (let i = 0; i < nums.length; i++) {
//     const currentNumber = nums[i];
//     const neededValue = target - currentNumber;
//     const index2 = previousValue[neededValue];
//     if (index2 != null) {
//       return [index2, i];
//     }
//     previousValue[currentNumber] = i;
//   }
//   console.log(previousValue);
// };

//35. Group Anagrams
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:
// Input: strs = [""]
// Output: [[""]]

// var groupAnagrams = function (strs) {
//   let hash = {};
//   for (let el of strs) {
//     let sorted = el.split('').sort().join('');
//     if (!hash[sorted]) hash[sorted] = [];
//     hash[sorted].push(el);
//   }
//   return Object.values(hash);
// };
// console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
// groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);

//36. Top K Frequent Elements
// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// var topKFrequent = function (nums, k) {
//   const hash = {};
//   for (let el of nums) {
//     if (!hash[el]) hash[el] = 0;
//     hash[el]++;
//   }
//   let bucket = [];
//   for (let i = 0; i < nums.length + 1; i++) {
//     bucket.push([]);
//   }
//   for (const key in hash) {
//     bucket[hash[key]].push(key);
//   }
//   let solution = [];
//   for (let i = bucket.length - 1; i >= 0; i--) {
//     if (bucket[i].length > 0) {
//       solution = [...solution, ...bucket[i]];
//       if (solution.length === k) {
//         return solution;
//       }
//     }
//   }
// };

// console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
// topKFrequent([1, 1, 1, 2, 2, 3], 2);

//37. Valid Palindrome
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// var isPalindrome = function (s) {
//   const cleanedString = cleanUp(s);
//   for (let i = 0; i < cleanedString.length; i++) {
//     if (cleanedString[i].toLowerCase() !== cleanedString[cleanedString.length - i - 1].toLowerCase()) return false;
//   }
//   return true;
// };

// function cleanUp(str) {
//   let char = 'abcdefghijklmnopqrstuvwxyz0123456789';

//   let newString = '';

//   for (let i = 0; i < str.length; i++) {
//     let lowerCase = str[i].toLowerCase();

//     if (char.indexOf(lowerCase) !== -1) {
//       newString += lowerCase;
//     }
//   }
//   console.log(newString);
//   return newString;
// }

// // console.log(isPalindrome('A man, a plan, a canal: Panama'));
// console.log(isPalindrome('A man, a plan, a canal: Panama'));

// 38. Plus one
//You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.

// Example 1:
// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

// var plusOne = function (digits) {
//   const newArr = (BigInt(digits.join('')) + BigInt(1)).toString().split('');
//   return newArr;
// };

// console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));

//39. Merge Sorted Array
//You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.
// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// Example 1:
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

// var merge = function (nums1, m, nums2, n) {
//   let first = m - 1;
//   let second = n - 1;
//   let i = m + n - 1;
//   while (second >= 0) {
//     let firstVal = nums1[first];
//     let secondVal = nums2[second];

//     if (firstVal > secondVal) {
//       nums1[i] = firstVal;
//       i--;
//       first--;
//     } else {
//       nums1[i] = secondVal;
//       i--;
//       second--;
//     }
//   }
//   console.log(nums1);
// };

// merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);

// const A = [8, 1, 1, 7, 4];
// const N = 4;
// const hash = {};

// function Logic() {
// 	const hash = {};
// 	for (let i = 0; i < A.length; i++) {
// 		if (!hash[A[i]]) {
// 			hash[A[i]] = 0;
// 		}
// 		hash[A[i]]++;
// 	}
// 	const sortedArray = Object.entries(hash).sort((a, b) => b[1] - a[1]);
// 	let sum = 0;
// 	let count = 0;
// 	for (let i = 0; i < sortedArray.length; i++) {
// 		if (sortedArray[i][1] != i) {
// 			sum += Number(sortedArray[i][0]);
// 			count++;
// 			console.log(sortedArray[i][1]);
// 		}
// 	}
// 	console.log(sum);
// 	const result = sum / count;
// 	console.log(result);
// }
// Logic();

//40. Reverse linked list
// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// Example 2:
// Input: head = [1,2]
// Output: [2,1]

// Example 3:
// Input: head = []
// Output: []

// const reverseList = function (head) {
// 	let prev = null;
// 	let current = head;
// 	while (current !== null) {
// 		const next = current.next;
// 		current.next = prev;
// 		prev = current;
// 		current = next;
// 	}
// };

//41. Middle of the linked list
//Given the head of a singly linked list, return the middle node of the linked list.
// If there are two middle nodes, return the second middle node.

// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.

// Example 2:
// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

// const middleNode = function (head) {
// 	let counter = 0;
// 	let current = head;
// 	while (current !== null) {
// 		counter++;
// 		current = current.next;
// 	}

// 	current = head;
// 	const max = Math.floor(counter / 2);

// 	for (let i = 0; i < max; i++) {
// 		current = current.next;
// 	}
// 	return current;
// };

// 42. Palindrome Linked List
//Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

// Example 1:
// Input: head = [1,2,2,1]
// Output: true

// const isPalindrome = (head) => {
// 	if (head == null || head.next == null) return true;

// 	let slow = head;
// 	let fast = head;
// 	while (fast.next !== null && fast.next.next !== null) {
// 		slow = slow.next;
// 		fast = fast.next.next;
// 	}
// 	slow.next = reverseList(slow.next);
// 	slow = slow.next;

// 	while (slow !== null) {
// 		if (head.val !== slow.val) return false;
// 		head = head.next;
// 		slow = slow.next;
// 	}
// 	return true;
// };

// const reverseList = (middle) => {
// 	let prev = null;
// 	let next = null;

// 	while (middle !== null) {
// 		next = middle.next;
// 		middle.next = prev;
// 		prev = middle;
// 		middle = next;
// 	}
// 	return prev;
// };

// 43. Return Length of Arguments Passed

// var argumentsLength = function (...args) {
// 	return args.length;
// };

// 44. Counter II
// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
// Example 1:
// Input: init = 5, calls = ["increment","reset","decrement"]
// Output: [6,5,4]
// Explanation:
// const counter = createCounter(5);
// counter.increment(); // 6
// counter.reset(); // 5
// counter.decrement(); // 4

// const createCounter = (init) => {
// 	let counter = init;

// 	const increment = () => {
// 		return ++counter;
// 	};

// 	const decrement = () => {
// 		return --counter;
// 	};
// 	const reset = () => {
// 		counter = init;
// 		return counter;
// 	};
// 	return {increment, decrement, reset};
// };

// const counter = createCounter(5);
// console.log(counter.decrement());

//45. Array Wrapper
// Create a class ArrayWrapper that accepts an array of integers in its constructor. This class should have two features:
// When two instances of this class are added together with the + operator, the resulting value is the sum of all the elements in both arrays.
// When the String() function is called on the instance, it will return a comma separated string surrounded by brackets. For example, [1,2,3].

// Example 1:
// Input: nums = [[1,2],[3,4]], operation = "Add"
// Output: 10
// Explanation:
// const obj1 = new ArrayWrapper([1,2]);
// const obj2 = new ArrayWrapper([3,4]);
// obj1 + obj2; // 10

// class ArrayWrapper {
// 	constructor(array) {
// 		this.array = array;
// 	}
// 	valueOf = function () {
// 		return this.array.reduce((acc, current) => acc + current, 0);
// 	};

// 	toString = function () {
// 		return '[' + this.array.join(',') + ']';
// 	};
// }
// const arr = new ArrayWrapper([1, 2, 3]);
// console.log(arr.valueOf());

//46. To Be Or Not To Be
// Write a function "expect" that helps developers test their code. It should take in any value val and return an object with the following two functions.
// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

// Example 1:
// Input: func = () => expect(5).toBe(5)
// Output: {"value": true}
// Explanation: 5 === 5 so this expression returns true.
// const expect = function (val) {
// 	return {
// 		toBe(input) {
// 			if (val === input) return true;
// 			else throw new Error('Not Equal');
// 		},
// 		notToBe(input) {
// 			if (val === input) throw new Error('Not Equal');
// 			else return true;
// 		},
// 	};
// };

//47. Roman to Integer
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.
// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

// Example 1:
// Input: s = "III"
// Output: 3
// Explanation: III = 3.

// Example 2:
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

// const romanToInt = function (s) {
// 	const sym = {
// 		I: 1,
// 		V: 5,
// 		X: 10,
// 		L: 50,
// 		C: 100,
// 		D: 500,
// 		M: 1000,
// 	};
// 	const result = [];
// 	for (let i = 0; i < s.length; i++) {
// 		if (sym[s[i]] < sym[s[i + 1]]) {
// 			result.push(-sym[s[i]]);
// 		} else {
// 			result.push(sym[s[i]]);
// 		}
// 	}

// 	return result.reduce((previous, current) => previous + current);
// };

// 48. Longest common prefix
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// const longestCommonPrefix = (arrayStrings) => {
// 	arrayStrings.sort();
// 	let prefix = '';
// 	if (arrayStrings.length === 0) return prefix;
// 	for (let i = 0; i < arrayStrings[0].length; i++) {
// 		const character = arrayStrings[0][i];
// 		for (let j = 1; j < arrayStrings.length; j++) {
// 			if (arrayStrings[j][i] !== character) return prefix;
// 		}
// 		prefix = prefix + character;
// 	}
// 	return prefix;
// };

// 49. Remove duplicates from sorted Array
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:
// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.

// Example 1:
// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// const removeDuplicates = function (nums) {
// 	let k = 1;
// 	for (let i = 0; i < nums.length - 1; i++) {
// 		if (nums[i] !== nums[i + 1]) {
// 			nums[k] = nums[i + 1];
// 			k++;
// 		}
// 	}
// 	return k;
// };

//50. Remove element
// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.

// Example 1:
// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).

const removeElement = function (nums, val) {
	let k = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== val) {
			nums[k] = nums[i];
			k++;
		}
	}
};

//51. Search insert position
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Example 2:
// Input: nums = [1,3,5,6], target = 2
// Output: 1

// const searchInsert = function (nums, target) {
// 	let left = 0,
// 		right = nums.length,
// 		mid;
// 	while (left <= right) {
// 		mid = Math.floor((left + right) / 2);
// 		if (nums[mid] === target) return mid;
// 		else if (nums[mid] < target) left = mid + 1;
// 		else right = mid - 1;
// 	}
// };

// console.log(searchInsert([1, 3, 5, 6], 3));

// // 52. Length of last word
// // Given a string s consisting of words and spaces, return the length of the last word in the string.
// // A word is a maximal substring consisting of non-space characters only.

// // Example 1:
// // Input: s = "Hello World"
// // Output: 5
// // Explanation: The last word is "World" with length 5.

// // Example 2:
// // Input: s = "   fly me   to   the moon  "
// // Output: 4
// Explanation: The last word is "moon" with length 4.

// const lenghtOfLastWord = (s) => {
// 	const arr = s.split(' ');
// 	for (let i = arr.length - 1; i >= 0; i--) {
// 		console.log(i);
// 		console.log(arr[i]);
// 		if (arr[i] !== '') return arr[i].length;
// 	}
// };

// 53. Remove duplicates from sorted list
// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
// Input: head = [1,1,2]
// Output: [1,2]

// Input: head = [1,1,2,3,3]
// Output: [1,2,3]

// const deleteDuplicates = function (head) {
// 	let current = head;
// 	while (current && current.next) {
// 		if (current.val === current.val.next) {
// 			current.next = current.next.next;
// 		} else {
// 			current = current.next;
// 		}
// 	}
// 	return head;
// };

// 54. Climbing stairs
//You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// const climbStairs = function (n) {
// 	if (n < 3) return n;
// 	return climbStairs(n - 1) + climbStairs(n - 2);
// };

//55.Single Number
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:
// Input: nums = [2,2,1]
// Output: 1

// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4

const singleNumber = function (nums) {};
console.log(singleNumber([2, 2, 2, 1]));
