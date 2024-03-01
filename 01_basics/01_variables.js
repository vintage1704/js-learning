const accountId =  144553
let accountEmail = "rakshit@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 not allowed
accountEmail = "a@gmail.com"
accountPassowrd = "123"
accountCity = "mumbai"

console.log(accountId);
/*
Prefer not to use var
because of issue in block scope or functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
