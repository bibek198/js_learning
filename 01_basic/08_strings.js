const name = "Rajan"
const repoCount = 50

// console.log("Hello, " + name + repoCount + " is good man")

//String interpolation -- Modern way
console.log(`Hello, ${name}${repoCount} is a good man.`)
// in this method we can use other methods on the go

// Another way for the strings but in heap
let superHero = new String ("Ironman and Thor")
let s = superHero
console.log(superHero + " " + s)
s = "ram"
console.log(superHero + " " + s)
// As sting is primitive data so even in heap its acces is same as 
// stack strings i.e by creating copies and not by reference


// console.log(superHero)
// console.log(superHero[0])
// console.log(superHero.__proto__) // to see the proto

// console.log(superHero.length)
// console.log(superHero.toUpperCase())
// console.log(superHero)
// console.log(superHero.charAt(3))
// console.log(superHero.indexOf("r"))

// const newString = superHero.substring(0, 4)
// console.log(newString);

// const anotherString = superHero.slice(-8, 4)
// console.log(anotherString);

// const newStringOne = "   hitesh    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

// const url = "https://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20', '-'))

// console.log(url.includes('sundar'))

// console.log(gameName.split('-'));