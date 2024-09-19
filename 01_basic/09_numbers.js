
const score = 400;
// console.log(score);
// console.log(typeof score);

const balance = new Number (233);
// console.log(balance);
// console.log(typeof balance);
// console.log(balance.toString().length);
// console.log(typeof balance.toString());

const myTax = 1000.58585;
// console.log(myTax.toFixed(2)); // round off after decimals

const otherNumber = 123.85676
// console.log(otherNumber.toPrecision(4)); // it is like number of significent degits

const hundreds = 100000000;
// console.log(hundreds.toLocaleString('en-IN'));

// console.log(Number.MAX_VALUE) to check the max possible number

/************* Mathematics ************* */
// in built maths library

// console.log(Math.abs(-4));
// console.log(Math.round(4.45));
// console.log(Math.ceil(4.2));
// console.log(Math.sqrt(4));
// console.log(Math.max(3, 5, 6, 4));

console.log(Math.random());
console.log(Math.floor(Math.random() * 10) + 1)

const lower = 10;
const upper = 20;
console.log(Math.floor(Math.random() * (upper - lower + 1) + lower))