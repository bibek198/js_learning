// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue); -3

// console.log(2+2); 4
// console.log(2-2); 0
// console.log(2*2); 4
// console.log(2**3); 8
//  console.log(2/3); 0.666666666
//  console.log(2%3); 2

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3); hello hites

// console.log("1" + 2); 12
//  console.log(1 + "2"); 12
// console.log("1" + 2 + 2); 122
// console.log(1 + 2 + "2"); 32

// console.log( (3 + 4) * 5 % 3); // always use parenthesis 

// console.log(+true); gives 1 // not appricated
// console.log(+""); gives 0
// console.log(true+) // error
let num1, num2, num3

// num1 = num2 = num3 = 2 + 2 // not appricated

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

// link to study
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion