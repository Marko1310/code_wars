// 16. JOSEPH PERMUTATION
// This problem takes its name by arguably the most important event in the life of the ancient historian Josephus: according to his tale, he and his 40 soldiers were trapped in a cave by the Romans during a siege.

// Refusing to surrender to the enemy, they instead opted for mass suicide, with a twist: they formed a circle and proceeded to kill one man every three, until one last man was left (and that it was supposed to kill himself to end the act).

// Well, Josephus and another man were the last two and, as we now know every detail of the story, you may have correctly guessed that they didn't exactly follow through the original idea.

// You are now to create a function that returns a Josephus permutation, taking as parameters the initial array/list of items to be permuted as if they were in a circle and counted out every k places until none remained.

// Tips and notes: it helps to start counting from 1 up to n, instead of the usual range 0..n-1; k will always be >=1.

// For example, with n=7 and k=3 josephus(7,3) should act this way.

// [1,2,3,4,5,6,7] - initial sequence
// [1,2,4,5,6,7] => 3 is counted out and goes into the result [3]
// [1,2,4,5,7] => 6 is counted out and goes into the result [3,6]
// [1,4,5,7] => 2 is counted out and goes into the result [3,6,2]
// [1,4,5] => 7 is counted out and goes into the result [3,6,2,7]
// [1,4] => 5 is counted out and goes into the result [3,6,2,7,5]
// [4] => 1 is counted out and goes into the result [3,6,2,7,5,1]
// [] => 4 is counted out and goes into the result [3,6,2,7,5,1,4]
// So our final result is:

// josephus([1,2,3,4,5,6,7],3)==[3,6,2,7,5,1,4]

// function josephus(items, k) {
//   console.log();
// }

// 17. LARGE FACTORIALS
// In mathematics, the factorial of integer n is written as n!. It is equal to the product of n and every integer preceding it. For example: 5! = 1 x 2 x 3 x 4 x 5 = 120
// Your mission is simple: write a function that takes an integer n and returns the value of n!.
// You are guaranteed an integer argument. For any values outside the non-negative range, return null, nil or None (return an empty string "" in C and C++). For non-negative numbers a full length number is expected for example, return 25! =  "15511210043330985984000000"  as a string.
// For more on factorials, see http://en.wikipedia.org/wiki/Factorial
// NOTES:
// The use of BigInteger or BigNumber functions has been disabled, this requires a complex solution
// I have removed the use of require in the javascript language.

// function factorial(n) {
//   // Add some code
// }

// 18. PARSE INT() RELOADE
// In this kata we want to convert a string into an integer. The strings simply represent the numbers in words.
// Examples:
// "one" => 1
// "twenty" => 20
// "two hundred forty-six" => 246
// "seven hundred eighty-three thousand nine hundred and nineteen" => 783919
// Additional Notes:
// The minimum number is "zero" (inclusively)
// The maximum number, which must be supported is 1 million (inclusively)
// The "and" in e.g. "one hundred and twenty-four" is optional, in some cases it's present and in others it's not
// All tested numbers are valid, you don't need to validate them

// function parseInt(string) {}

// const numbers = {
//   zero: 0,
//   one: 1,
//   two: 2,
//   three: 3,
//   four: 4,
//   five: 5,
//   six: 6,
//   seven: 7,
//   eight: 8,
//   nine: 9,
//   ten: 10,
//   eleven: 11,
//   twelve: 12,
//   thirteen: 13,
//   fourteen: 14,
//   fifteen: 15,
//   sixteen: 16,
//   seventeen: 17,
//   eighteen: 18,
//   nineteen: 19,
//   twenty: 20,
//   thirty: 30,
//   forty: 40,
//   fifty: 50,
//   sixty: 60,
//   seventy: 70,
//   eighty: 80,
//   ninety: 90,
//   hundred: 100,
//   thousand: 1000,
//   million: 1000000,
// };

// const checkNumber = function (string) {
//   const arrString = string.split(/-| /);

//   const andLocation = function (el) {
//     return el === "and";
//   };

//   const indexOfAnd = arrString.findIndex(andLocation);

//   if (indexOfAnd !== -1) {
//     arrString.splice(indexOfAnd, 1);
//   }

//   console.log(arrString);

//   if (arrString.length === 1) return numbers[arrString];

//   let smallSum = 0;
//   let bigSum = 0;
//   let factor = 0;
//   for (let i = arrString.length - 1; i >= 0; i--) {
//     if (arrString[i] !== "thousand" && arrString[i] !== "hundred") {
//       if (arrString[i - 1] === "thousand" || arrString[i - 1] === "hundred") {
//         smallSum = numbers[arrString[i]];
//         console.log(smallSum);
//         i = i - 1;
//         continue;
//       } else if (
//         arrString[i - 1] !== "thousand" &&
//         arrString[i - 1] !== "hundred"
//       ) {
//         smallSum = numbers[arrString[i - 1]] + numbers[arrString[i]];
//         console.log(smallSum);
//         i = i - 2;
//         continue;
//       }
//     }

//     if (arrString[i] === "thousand") {
//       if (arrString[i - 1] !== "hundred" || arrString[i - 2] !== "hundred") {
//         if (arrString[i - 3] === "hundred") {
//           factor =
//             numbers[arrString[i - 4]] * numbers[arrString[i - 3]] +
//             numbers[arrString[i - 2]] +
//             numbers[arrString[i - 1]];
//           console.log(factor);
//         } else if (arrString[i - 3] !== "hundred") {
//           factor = numbers[arrString[i - 2]] + numbers[arrString[i - 1]];
//           console.log(factor);
//         }
//       }
//       if (arrString[i - 2] === "hundred") {
//         factor =
//           numbers[arrString[i - 3]] * numbers[arrString[i - 2]] +
//           numbers[arrString[i - 1]];
//         console.log(factor);
//       }
//       if (arrString[i - 1] === "hundred") {
//         factor = numbers[arrString[i - 2]] * numbers[arrString[i - 1]];
//         console.log(factor);
//       }
//       return (bigSum = factor * numbers[arrString[i]]);
//       console.log(bigSum);
//     }
//   }
//   console.log(smallSum + bigSum);
// };

// checkNumber("seven hundred eighty-three thousand nine hundred and nineteen");
