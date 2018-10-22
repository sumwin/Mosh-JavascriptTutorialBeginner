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
checkSpeed(50);

function checkSpeed(speed) {
    if (speed <= 70)
        console.log('Is ok');
    else if ((speed >= 71) && (speed <= 75))
        console.log('1 point');
        else if ((speed >= 76) && (speed <= 80))
        console.log('2 point');
        else if ((speed >= 81) && (speed <= 90))
        console.log('3 point');
        else if ((speed >= 91) && (speed <= 95))
        console.log('4 point');
        else if ((speed >= 9) && (speed <= 75))
        console.log('1 point');
    else if (speed  )
}