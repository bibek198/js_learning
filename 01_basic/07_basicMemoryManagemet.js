 // Stack (Primitive data) and Heap (Non Primitive data)
 
 // In stack we a copy of data and in heap we get reference of data

 let myCollage = "NIT Warangal"
 let anotherCollage = myCollage
 console.log(anotherCollage)
 anotherCollage = "Chai"
 console.log(anotherCollage)
 console.log(myCollage)
 /*
    ---------------
   |               |
    ---------------
   | anotherCollage| have a copy of value of myCollage which was change leter
   ----------------
   | myCollage     | 
   ----------------
   Stack Memory

   Heap one large box: => we get reference 

 */

   let user = {
    email: "bibek@google.com",
    upi: "rajan",
    score: 56789
   }

   let user2 = user

   user2.email = "rajan@google.com"

   console.log(user.email)
   console.log(user2.email)
   // both are same as reference was the mode of access
