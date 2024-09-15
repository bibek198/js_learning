const accountId = 144553
let accoutEmail = "bibek@gmail.com"
var accountPassword = "12345"
accountcity = "Jankpur" // very bad
let accountState ;

// accountId = 2 not allowed
accoutEmail = "jc@gmail.com"
accountPassword = "7890"
accountcity = "ktm"
console.log(accountId);
console.table([accountId, accountPassword, accoutEmail])
console.log(accountState);

/* 
Prefer not to use var
because of issue with log and function scope
*/