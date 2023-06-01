// 'use strict';

// class Person {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
// }

// const jessica = new Person('jessica', 1996);
// console.log(jessica);
// jessica.calcAge();

// class Student extends Person {
//   constructor(fullName, birthYear, course) {
//     super(fullName, birthYear);
//     this.course = course;
//   }
//   calcAge() {
//     console.log('aaaa');
//   }
// }

// const student = new Student('ana', 1990, 'cs50');
// console.log(student);
// student.calcAge();
// jessica.calcAge();

// class Account {
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.pin = pin;
//     this.movements = [];
//     this.locale = navigator.language;

//     console.log(`Thanks for opening accounr ${owner}`);
//   }

//   deposit(val) {
//     this.movements.push(val);
//   }

//   withdraw(val) {
//     this.deposit(-val);
//   }
// }

// const acc1 = new Account('Jonas', 'Eur', 11111);

// acc1.deposit(250);
// acc1.deposit(200);
// acc1.withdraw(100);

// console.log(acc1);

// class Vehicle {
//   constructor(make, model) {
//     this.make = make;
//     this.model = model;
//   }
//   start() {
//     console.log('starting the engine');
//   }

//   stop() {
//     console.log('stoping the engine');
//   }
// }

// class Car extends Vehicle {
//   constructor(make, model, color) {
//     super(make, model);
//     this.color = color;
//   }

//   start() {
//     console.log('starting the audi engine');
//   }
// }

// const audi = new Car('audi', 'a3', 'red');
// console.log(audi);
// audi.start();

// 1. Challenge: Implement a Stack
// Implement a stack data structure using a class in Node.js. The class should have methods like push(), pop(), and peek() to manipulate the stack. Ensure that the stack follows the Last-In-First-Out (LIFO) principle.

// class Stack {
//   constructor() {
//     this.item = [];
//   }
//   push(value) {
//     this.item.push(value);
//   }

//   pop() {
//     return this.item.pop();
//   }
//   peek() {
//     const lastElement = this.item.length - 1;
//     console.log(this.item[lastElement]);
//     return lastElement;
//   }
// }

// const stack = new Stack();
// stack.push(2);
// stack.push(5);
// stack.push(1);
// stack.push(1);
// stack.push(1);
// stack.push(1);
// stack.push(1);
// stack.push(30);

// console.log(stack.pop());

// stack.peek();

// console.log(stack);

//2. Challenge: Implement a Bank Account
// Create a BankAccount class that represents a bank account. The class should have properties like accountNumber and balance, as well as methods like deposit() and withdraw(). Implement appropriate error handling for invalid withdrawals (e.g., insufficient balance).

// class BankAccount {
//   constructor(accountNumber, balance) {
//     this.accountNumber = accountNumber;
//     this.balance = balance;
//   }

//   deposit(value) {
//     this.balance += value;
//   }

//   withdraw(value) {
//     try {
//       if (value > this.balance) {
//         throw new Error();
//       }
//       this.balance -= value;
//     } catch (err) {
//       return err;
//     }
//   }
// }

// const acc1 = new BankAccount(123456, 0);
// acc1.deposit(200);
// acc1.deposit(700);

// acc1.withdraw(2000);

// console.log(acc1);

//3. Challenge: Implement a ToDo List
// Create a TodoList class that represents a simple todo list. The class should allow adding and removing tasks, as well as marking tasks as completed. Include methods like addTask(), removeTask(), and markAsCompleted().

// class ToDo {
//   constructor() {
//     this.list = [];
//   }
//   addTask(task) {
//     this.list.push(task);
//   }
//   removeTask(task) {
//     this.list.pop(task);
//   }
//   markAsCompleted(task) {
//     // this.list((task.completed = true));
//     const indexOfTask = this.list.findIndex((el) => el.name === task.name);
//     this.list[indexOfTask].completed = true;
//   }
// }

// class Task {
//   constructor(name, completed) {
//     this.name = name;
//     this.completed = completed;
//   }
// }

// const task1 = new Task('wash', false);
// const task2 = new Task('clean', false);
// const task3 = new Task('throw', false);
// console.log(task1, task2, task3);

// const toDo = new ToDo();
// toDo.addTask(task1);
// toDo.addTask(task2);
// toDo.addTask(task3);

// // toDo.removeTask(task1);
// toDo.markAsCompleted(task2);

// console.log(toDo);

// 4. Challenge: Implement a Library Catalog
// Create a LibraryCatalog class that represents a library catalog system. The class should allow adding books, searching for books by title or author, and keeping track of available copies. Implement methods like addBook(), searchByTitle(), searchByAuthor(), and getAvailableCopies().

// class LibraryCatalog {
//   constructor() {
//     this.catalog = [];
//   }

//   addBook(book) {
//     this.catalog.push(book);
//   }

//   searchByTitle(title) {
//     return this.catalog.filter((el) => el.title === title);
//   }

//   searchByAuthor(author) {
//     return this.catalog.filter((el) => el.author === author);
//   }

//   getAvailableCopies(book) {
//     const bookCopies = this.catalog.filter((el) => el.title === book.title);
//     console.log(bookCopies);
//     return bookCopies.length;
//   }
// }

// class Book {
//   constructor(title, author) {
//     this.title = title;
//     this.author = author;
//   }
// }

// const book1 = new Book('Book 1', 'Author 1');
// const book2 = new Book('Book 1', 'Author 1');
// const book3 = new Book('Book 1', 'Author 1');
// const book4 = new Book('Book 1', 'Author 1');

// const librayCatalogu = new LibraryCatalog();
// librayCatalogu.addBook(book1);
// librayCatalogu.addBook(book2);
// librayCatalogu.addBook(book3);
// librayCatalogu.addBook(book4);

// console.log(librayCatalogu.getAvailableCopies(book1));

// console.log(librayCatalogu);

// 5. Challenge: Implement a String Reversal
// Create a function that takes a string as input and returns the reverse of that string. Implement the function using OOP principles, such as creating a class with a method that performs the reversal. Test your implementation with different input strings to ensure correctness.

// class Reverse {
//   constructor(stringy) {
//     this.stringy = stringy;
//   }

//   reverseMethod() {
//     let reversed = '';
//     for (let i = this.stringy.length - 1; i >= 0; i--) {
//       reversed += this.stringy[i];
//     }
//     return reversed;

//     // const stringyArray = this.stringy.split('');
//     // const reverse = stringyArray.reverse();
//     // console.log(reverse.join(''));
//   }
// }

// const str = new Reverse('rijec');

// console.log(str.reverseMethod());

// 6. Challenge: Implement a Palindrome Checker
// Create a function that takes a string as input and determines whether it is a palindrome (reads the same forwards and backwards). Implement the function using OOP principles, such as creating a class with a method that checks for palindromes. Test your implementation with different input strings to verify the palindrome detection.

class Palindrome {
  constructor(stringy) {
    this.stringy = stringy;
  }

  checkPalindrome() {
    const arr = this.stringy.split('');
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== arr[arr.length - i - 1]) {
        return false;
      } else {
        continue;
      }
    }
    return true;
  }
}

const palindrome = new Palindrome('abaddd');
console.log(palindrome.checkPalindrome());
