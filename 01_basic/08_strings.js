const name = "Rajan"
const repoCount = 50

// console.log("Hello, " + name + repoCount + " is good man")

//String interpolation -- Modern way

console.log(`Hello, ${name}${repoCount} is a good man.`)
// in this method we can use other methods on the go

const superHero = new String ("Ironman")
console.log(superHero)
console.log(superHero[0])
console.log(superHero.__proto__) // to see the proto

console.log(superHero.length)
console.log(superHero.toUpperCase())
console.log(superHero)
console.log(superHero.charAt(3))
console.log(superHero.indexOf("r"))

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));