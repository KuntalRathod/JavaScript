const accountID = 11122
let accountEmail = "Kuntal@google.com"
var accountPassword = "9090"
accountCity = "Junagadh"



// accountID = 22 // Not Allowed 

accountEmail = "hchc@hc.com"
accountPassword = "9049"
accountCity = "Rajkot"
let accountState;


console.log(accountID);

// { Scope of variable 
//   let b = "this";
//   console.log(b);
// }

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountID,accountEmail,accountPassword,accountCity,accountState])




