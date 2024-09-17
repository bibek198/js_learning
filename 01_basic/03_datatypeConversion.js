let score1 = '33abc' // or undefined
console.log(typeof score1)
console.log(typeof(score1))
let valueInNumber1 = Number (score1)
console.log(typeof valueInNumber1)
console.log(valueInNumber1)

let score2 = '33'
console.log(typeof score2)
console.log(typeof(score2))
let valueInNumber2 = Number (score2)
console.log(typeof valueInNumber2)
console.log(valueInNumber2)

let score3 = null
console.log(typeof score3)
console.log(typeof(score3))
let valueInNumber3 = Number (score3)
console.log(typeof valueInNumber3)
console.log(valueInNumber3)


let score4 = true
console.log(typeof score4)
console.log(typeof(score4))
let valueInNumber4 = Number (score4)
console.log(typeof valueInNumber4)
console.log(valueInNumber4)

// "33abc" or undefined => NaN
// "33" => 33
// null => 0
// true => 1 and false => 0


let isLoggedIn1 = 1
let booleanIsLoggedIn1 = Boolean (isLoggedIn1)
console.log(booleanIsLoggedIn1)

let isLoggedIn2 = "" // or undefined or null
let booleanIsLoggedIn2 = Boolean (isLoggedIn2)
console.log(booleanIsLoggedIn2)

let isLoggedIn3 = "rajan"
let booleanIsLoggedIn3 = Boolean (isLoggedIn3)
console.log(booleanIsLoggedIn3)

// 1 => true and 0 => false
// " " or undefined or null => false 
// "rajan" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

let someBoolean = true // or false or undefined or null
let stringBoolean = String(someBoolean)
console.log(stringBoolean)
console.log(typeof stringBoolean)

// 33 => "33"
// true or false or null or undefined => "true" or "false" or "null" or "undefined"

