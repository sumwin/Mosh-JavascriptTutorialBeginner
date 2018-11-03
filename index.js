//If a customer has more than 100 points,
//there are 'gold' customer, otherwise,
//there are a 'silver' customer.

// NOTE: Conditional Operation
// let points =90;
// let type = points > 100 ? 'gold' : 'silver';
// console.log(type);

//NOTE: Logical AND (&&)
//Return TRUE if both operands are TRUE
// let highIncome = true;
// let goodCreditScore = true;
// let eligibleForLoan = highIncome && goodCreditScore;
// console.log(eligibleForLoan);

//logical OR ( || )
// let highIncome = false;
// let goodCreditScore = true;
// let eligibleForLoan = highIncome || goodCreditScore;
// console.log(eligibleForLoan);

//NOTE: NOT (!)
// let highIncome = false;
// let goodCreditScore = false;
// let eligibleForLoan = highIncome && goodCreditScore;
// console.log('Eligible', eligibleForLoan);
// let applicationRefused = !eligibleForLoan;

// console.log('Application Refused', applicationRefused);

//NOTE: Falsy (false)
//undefined
//NULL
//0
//false
//''
//NaN

//Anything that is not Falsy -> Truthy

//Short-circutiting

// let userColor =undefined;
// let defaultColor = 'blue';
// let currentColor = userColor || defaultColor;

// console.log(currentColor);

//1 = 00000001
//2 = 00000010
//R = 00000011

//NOTE: Bitwise OR
// console.log(1 | 2);  //Bitwise OR
// console.log(1 & 2);  //Bitwise AND

// const readPermission =4;
// const writePermission =2;

//NOTE: Exe 1:
// let a = 'red';
// let b = 'blue';

// console.log(a);
// console.log(b);

// let temp = a;
// a = b;
// b = temp;

// console.log(a);
// console.log(b);

//Hour
//If hour is between 6am to 12pm: good morning!
//If it is between 12pm to 6 pm: good afternoon!
//Otherwise: good evening
// let hour = 22;

// if (hour >= 6 && hour < 12)
//     console.log('Good Morning');
// else if (hour > 12 && hour < 18)
//     console.log('Good afternoon');
// else
//     console.log('Evening');

//NOTE: Switch Case
// let role = 'guest';

// switch (role) {
//     case 'guest':
//         console.log('Guest User');
//         break;
//     case 'moderator':
//         console.log('Moderator User');
//         break;
//     default:
//         console.log('Unknow user');
// }

// if (role === 'guest')
//     console.log('Guest User');
// else if (role === 'Moderator')
//     console.log('Moderator');
// else
//     console.log('Unknow');

//NOTE: FOR Loop

// for ( let i =5; i >= 1;i--){
//     if (i % 2 !==0) console.log(i);
// }

//NOTE: While Loop

// let i = 5;
// while (i >= 1) {
//     if (i % 2 != 0) console.log(i);
//     i--;
// }

// let i = 9;
// do {
//     if (i % 2 != 0)
//         console.log(i);
//         i++;
// } while (i <= 5);

//NOTE: For..in  - use for array object
// const person={
//     name: 'sumwin',
//     age: 30
// };

// for (let key in person)
//     console.log(key, person[key]);

//     const colors = ['red', 'green', 'blue'];

//     // for (let index in colors)
//     //     console.log(index, colors[index]);

// //NOTE: For-of

// for (let color of colors)
//     console.log(color);

//NOTE: Continue , break
// let i =0;

// while (i <=10) {
//     // if (i === 5) break;
//     if (i %2 ===0){
//         i++;
//         continue;
//     }
//     console.log(i);
//     i++;
// // }

//TODO: Exercise - Write a function that takes two numbers and returns the maximum of the two

// function maximumNumber(num1, num2) {
//     // if ( num1 > num2)
//     //     return num1

//     // return num2
//    return (num1 > num2) ? num1 : num2;
// }

// let maximumNo = maximumNumber(5,10);
// console.log('The return maximum of the two no is: ' + maximumNo);

//TODO: Exercise - Landscape or Portrait

// function isLandscape(width, heigth) {
//     return (width > heigth);
// }

// console.log(isLandscape(100,600));

//TODO: Exercise - FizzBuzz

// const output = fizzBuzz(1);
// console.log(output);

// function fizzBuzz(input) {
//     if (typeof(input)!== 'number')
//         return NaN;
//     if ( (input % 3 ===0) && (input % 5 ===0))
//         return 'FizzBuzz';
//     if(input % 3 === 0)
//         return 'Fizz';
//     if (input % 5 === 0)
//         return 'Buzz';
//     return input;
// }

//TODO: Exercise - Demerit Points
//speed Limit =70
//5  -> 1 point
//Math.floor(1.3)
//12 points -> suspended
// checkSpeed(130);

// function checkSpeed(speed) {

//NOTE: My Own COde
// if (speed <= 75)
//     console.log('Ok');
// else if (speed >= 76 && speed <= 79)
//     console.log('1 point');
// else if (speed >= 80 && speed <= 84)
//     console.log('2 point');
// else if (speed >= 85 && speed <= 89)
//     console.log('3 point');
// else if (speed >= 90 && speed <= 94)
//     console.log('4 point');
// else if (speed >= 95 && speed <= 99)
//     console.log('5 point');
// else if (speed >= 100 && speed <= 104)
//     console.log('6 point');
// else if (speed >= 105 && speed <= 109)
//     console.log('7 point');
// else if (speed >= 110 && speed <= 114)
//     console.log('8 point');
// else if (speed >= 115 && speed <= 119)
//     console.log('9 point');
// else if (speed >= 120 && speed <= 124)
//     console.log('10 point');
// else if (speed >= 125 && speed <= 129)
//     console.log('11 point');
// else if (speed >= 130)
//     console.log('License suspended');

//     const speedLimit = 70;
//     const kmPerPoint = 5;

//     if (speed < speedLimit + kmPerPoint) {
//         console.log('ok');
//         return;
//     }
//     const points = Math.floor((speed - speedLimit) / kmPerPoint);
//     if (points >= 12)
//         console.log('License Suspended');
//     else
//         console.log('Points', points);

// }

//TODO: Execise 5 - Even and Odd Numbers

// showNumbers(10);

// function showNumbers(limit) {
//     for (let i = 0; i < limit; i++) {
//         let message = (i % 2 === 0) ? 'EVEN' : 'ODD'
//         console.log(i, message);
//     }
// }

//TODO: Execise 6 - Count Truthy

// function countTruthy(array) {
//     let count = 0;
//     for (let value of array) {
//         if (value)
//             count++;
//         return count;
//     }
// }

//TODO: Exercise 7 - string properties

// const movie = {
//     title: 'a',
//     releaseYear: 2018,
//     rating: 4.5,
//     director: 'b'
// };

// showProperties(movie);

// function showProperties(obj) {
//     for (let key in obj)
//         if (typeof (obj[key]) === 'string')
//             console.log(key, obj[key]);
// }

//TODO: Exercise 8 - Sum of Multiples of 3 and 5
// console.log(sum(10));

// function sum(limit) {
//     let sum = 0;

//     for (let i = 0; i <= limit; i++)
//         if (i % 3 === 0 || i % 5 === 0)
//             sum += i;

//     return sum;
// }

//TODO: Exervise 9 - Grade

//Average = 70

// 1-59: F
//60-69: D

// const array = [80, 80, 1];
// console.log(calculateGrade(array));

// function calculateGrade(marks) {
//     const averageScore = calculateAverage(marks)
//     // console.log('Average Score : ' + averageScore);

//     if (averageScore < 60) return 'F';
//     if (averageScore < 70) return 'D';
//     if (averageScore < 80) return 'C';
//     if (averageScore < 90) return 'B';
//     return 'A'
// }

// function calculateAverage(array) {
//     let sum = 0;
//     for (let mark of array) {
//         sum += mark;
//     }
//     return sum / array.length;
// )

//TODO: Exercise 10 - Stars

// showStars(12)

// function showStars(rows) {

//     const star = '*';

//     for (let i = 1; i <= rows; i++) {
//          console.log(star.repeat(i));
//             }

// }

//TODO: Exercise 11 - Primes No

// showPrimes(10);

// function showPrimes(limit) {
//     for (let number = 2; number<= limit; number++)
//         if (isPrime(number)) console.log(number);
// }

// function isPrime(number) {
//     for (let factor = 2; factor <= number; factor++)
//         if (number % factor === 0)
//             return false;

//     return true;
// }

//NOTE: Object:

//Object-Programming (OOP)

// Factory Function
// function createCircle(radius, location) {
//     return {
//         radius,
//         draw(){
//             console.log('draw');
//         }
//     };
// }

// const myCircle = createCircle(1);

// // const circle1 = createCircle(1);
// // console.log(circle1);

// // const circle2 = createCircle(2);
// // console.log(circle2);

// NOTE: Construction Function
// Using Pascal Notation to declare Constructor Function
// function Circle(radius){
//     this.radius = radius;
//     this.draw = function(){
//         console.log('draw');
//     }
// }

// const circle = new Circle(1);

// const circle = {
//   radius: 1
// };

// circle.color = " yellow";
// circle.draw = function () {};

// delete circle.color;
// delete circle.draw;

// console.log(circle);

// const message = "This is my first message";

// const another = new String('hi');

// NOTE: Template Literals  ``

// const name = 'Liew';
// const another = `Hi ${name} ${2+3},

// Thank you for joining my mailing list.

// Regards,
// SumWin+`;

//NOTE: Date

// const now = new Date();
// const date1 = new Date('May 11 2018 09:00');
// const date2 = new Date(2018, 4, 11, 9);

// now.setFullYear(2017);

// TODO: Exercise 1- Address Object

// let address = {
//   street: "a",
//   citi: "b",
//   zipCode: "c"
// };

// function showAddress(address) {
//   for (let key in address) console.log(key, address[key]);
// }

// showAddress(address);

// TODO: Factory and Constructor Functions

// let address = {
//   street: "a",
//   citi: "b",
//   zipCode: "c"
// };

// Factory
// function createAddress(street, citi, zipCode) {
//   return {
//     street,
//     citi,
//     zipCode
//   };
// }

//Constructor Function

// let address = new Address("a", "b", "c");
// console.log(address);

// function Address(street, citi, zipCode) {
//   this.street = street;
//   this.citi = citi;
//   this.zipCode = zipCode;
// }

//TODO: Exercise 3- Object Equality

// let address1 = new Address("a", "b", "c");
// let address2 = new Address("a", "b", "c");

// function Address(street, citi, zipCode) {
//   this.street = street;
//   this.citi = citi;
//   this.zipCode = zipCode;
// }

// function areEqual(address1, address2) {
//   return (
//     address1.street === address2.street &&
//     address1.citi === address2.citi &&
//     address1.zipCode === address2.zipCode
//   );
// }

// function areSame(address1, address2) {}
//TODO: Exercise 4- Blog Post Object

//NOTE: Adding Elements

// const numbers = [3,4];
// numbers.push(5,6);

// console.log(numbers);

// numbers.unshift(1,2);

// console.log(numbers);

// numbers.splice(2,0,'a','b');
// console.log(numbers);

//NOTE: Finding Elements (Primitives)
// const numbers=[1,2,3,1,4];

// console.log(numbers.indexOf(1,2));
// console.log(numbers.lastIndexOf(1));
// console.log(numbers.indexOf(1)!== -1);
// console.log(numbers.includes(1));

// NOTE: Finding Elements (References Type)

// const courses = [
//         {id: 1, name: 'a'},
//         {id: 2, name: 'b'},
// ];

// // console.log(courses.includes({id:1, name:'a'}));
// const course = courses.find(course =>course.name === 'a');

// console.log(course);

// NOTE: Removing Elements
// const numbers = [1, 2, 3, 4, 5];

// // remove at End
// const last = numbers.pop();

// //Remove at Beginning
// const first = numbers.shift;

// //Remove at Middle
// numbers.splice(2, 2);
// console.log(numbers);

//NOTE: Emptying an Array
// let numbers = [1, 2, 3, 4, 5];
// let another = numbers;
// // numbers = [];

//Solution 2:
// numbers.length = 0;

//Solution 3:
// numbers.splice(0, numbers.length);

//solution 4:
// while (numbers.length > 0) {
//     numbers.pop();
// }
// console.log(numbers);

// console.log(another);

// NOTE: Combining and Slicing Arrays

// const first = [{
//     id: 1
// }];
// const second = [4, 5, 6];

// const combine = first.concat(second);
// first[0].id = 10;

// const slice = combine.slice();

// console.log(combine);
// console.log(slice);

// NOTE: The Spread Operator
// const first = [1, 2, 3];
// const second = [4, 5, 6];

// // const combine = first.concat(second);
// const combine = [...first, 'a', ...second, 'b'];

// // const copy = combine.slice();
// const copy = [...combine]
// console.log(copy);

//NOTE: Iterating an Array

// const numbers = [1, 2, 3]

// for (let number of numbers)
//     console.log(number);

// numbers.forEach((number, index) => console.log(index, number));

//NOTE:Joining Arrays

// const numbers = [1, 2, 3];
// const joined = numbers.join(',');
// console.log(joined);

// const message = 'This is my first message';
// const parts = message.split(' ');
// console.log(parts);

// const combined = parts.join('-');
// console.log(combined);

// NOTE: SOrting Arrays

// const numbers = [2, 3, 1];
// numbers.sort();
// console.log(numbers);

// numbers.reverse();
// console.log(numbers);

// const courses = [{
//         id: 1,
//         name: 'Node.js'
//     },
//     {
//         id: 2,
//         name: 'javaScript'
//     },
// ];

// courses.sort(function (a, b) {
//     //a < b => -1
//     //a > b => 1
//     //a ===b => 0
//     const nameA = a.name.toLowerCase();
//     const nameB = a.name.toLowerCase();
//     if (nameA < nameB) return -1;
//     if (nameA > nameB) return 1;
//     return 0;
// });

// console.log(courses);

// NOTE:  Testing the Elements of an Array

// const numbers = [1, -1, 2, 3];

// //every()
// //some()

// const atLeastOnePositive = numbers.some(function (value) {
//     return value >= 0;
// });

// console.log(atLeastOnePositive);

//NOTE: Filtering an Array
//NOTE: Mapping an Array

// const numbers = [1, -1, 2, 3];

// const item = numbers.filter(n => n >= 0).map(n => ({
//     value: n
// })).filter(obj => obj.value > 1).map(obj => obj.value);

// // const item = filtered.map(n => ({
// //     value: n
// // }));

// // const html = '<ul>' + item.join('') + '</ul>';
// console.log(item);

//NOTE:Reducing an Array

// const numbers = [1, -1, 2, 3];
// // let sum = 0;
// // for (let n of numbers)
// //     sum += n;

// //a = 0, c = 1
// const sum = numbers.reduce((accumlator, currentValue) => accumlator + currentValue);

// console.log(sum);

//TODO: Exercise 1- Array from Range
// const numbers = arrayFromRange(-10, -4);

// console.log(numbers);

// function arrayFromRange(min, max) {
//     const output = [];
//     for (let i = min; i <= max; i++)
//         output.push(i);
//     return output;
// }

// NOTE:Exercise 2- Includes

// const numbers = [1, 2, 3, 4];

// console.log(numbers.includes(1));

// function includes(array, searchElement) {
//     for (let element of array) {
//         if (element === searchElement)
//             return true;
//         return false;
//     }
// }

//TODO: Except

// const numbers = [1, 2, 3, 4, 1, 1];

// const output = except(numbers, [1]);

// console.log(output);

// function except(array, excluded) {
//     const output = [];
//     for (let element of array)
//         if (!excluded.includes(element))
//             output.push(element);
//     return output
// }

//NOTE: Declarations vs Expressions
// NOTE: Hoisting
// let run = function () {
//     console.log('run');

// };
// let move = run;
// run();
// move();

// let run = function () {
//     console.log('run');
// };

// NOTE: Arguments
// function sum() {
//     let total = 0;
//     for (let value of arguments)
//         total += value;
//     return total;
// }

// console.log(sum(1, 2, 3, 4, 5, 10, 11, 11));

//NOTE: Rest Operator
// function sum(discount, ...prices) {

//     const total = prices.reduce((a, b) => a + b);
//     return total * (1 - discount);

// }

// console.log(sum(0.1, 20, 30));

// // NOTE: Default Parameters

// function interest(principal, rate = 3.5, years) {
//     return principal * rate / 100 * years;
// }

// console.log(interest(10000, undefined, 12));

// NOTE: Getters and Setters

// const person = {
//     firstName: 'sumwin',
//     lastName: 'Liew',
//     get fullName() {
//         return `${person.firstName} ${person.lastName}`;
//     },
//     set fullName(value) {
//         const parts = value.split(' ');
//         this.firstName = parts[0];
//         this.lastName = parts[1];
//     }
// };

// person.fullName = null;

// //getters => access properties
// //setters => change ( mutate) them

// console.log(person);

//NOTE: Try and Catch
// const person = {
//   firstName: "sumwin",
//   lastName: "Liew",
//   set fullName(value) {
//     if (typeof value !== "string") throw new Error("Value is not a string.");

//     const parts = value.split(" ");
//     if (parts.length !== 2) {
//       throw new Error("Enter a first and last name");
//     }
//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   }
// };

// try {
//   person.fullName = "";
// } catch (e) {
//   alert(e);
// }

// console.log(person);

// NOTE: Loval VS Global Scope

// const color = "red";

// function start() {
//   const message = "hi";
//   const color = "blue";
//   console.log(color);

//   //#region Test
//   //   if (true) {
//   //     const another = "bye";
//   //   }
//   //   for (let i = 0; i < 5; i++) {
//   //     console.log(i);
//   //   }
//   //#endregion
// }

// function stop() {
//   const message = "bye";
// }
// start();

//NOTE: Let vs Var

// function start() {
//   for (var i = 0; i < 5; i++) console.log(i);

//   console.log(i);
// }

// start();

// var color = "red";
// let age = 30;

// function sayHi() {
//   console.log("hi");
// }

//NOTE: The this Keyboard
//method => obj
//function => global ( window, global)

// const video = {
//   title: "a",
//   tags: ["a", "b", "c"],
//   showTags() {
//     this.tags.forEach(function(tag) {
//       console.log(this.title, tag);
//     }, this);
//   }
// };
// video.showTags();

// NOTE: Changing this
// const video = {
//   title: "a",
//   tags: ["a", "b", "c"],
//   showTags() {
//     const self = this;
//     this.tags.forEach(tag => {
//       console.log(this.title, tag);
//     });
//   }
// };
// video.showTags();

// function playVideo() {
//   console.log(this);
// }
// playVideo.call({ name: "win" }, 1, 2);
// playVideo.apply({ name: "Liew" }, [1, 2]);

// playVideo();

// TODO:Exercise 1- Sum of Arguments
// console.log(sum([1, 2, 3, 4]));

// function sum(...items) {
//   if (items.length === 1 && Array.isArray(items[0])) {
//     items = [...items[0]];
//   }
//   return items.reduce((a, b) => a + b);
// }

// TODO: Exercise 2- Area of Circle
// const cicrle = {
//   radius: 1,
//   get area() {
//     return Math.PI * this.radius * this.radius;
//   }
// };

// console.log(circle.area);

// TODO: Exercise 3- Error Handling\

// try {
//   const numbers = [1, 2, 3, 4];
//   const count = countOccurences(null, 1);
//   console.log(count);
// } catch (e) {
//   console.log(e.message);
// }

// function countOccurences(array, searchElement) {
//   if (!Array.isArray(array)) {
//     throw new Error("Invalid array.");
//   }
//   return array.reduce((accumulator, current) => {
//     const occurrences = current === searchElement ? 1 : 0;
//     return accumulator + occurrences;
//   }, 0);
// }
