// Dates

let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())
// console.log(typeof myDate)

// let myCreateDate = new Date(2024, 0, 23) // Data("2023-01-23") when using  string
// console.log(myCreateDate.toDateString())
// console.log(myCreateDate.toLocaleDateString())

//let myNewDate = new Date ("12-1-2024") // MM DD YY
let myNewDate = new Date ("2024-01-23") // yy mm dd
console.log(myNewDate.toLocaleDateString())

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})