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

const circle = {
    radius: 1,
    location:{
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function(){
        console.log('draw');        
    }
};

circle.draw();  //Method
