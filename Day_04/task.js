//task 1
let day = "Monday";
let var_1 = "It's the start of the week."
let var_2 = "It's a normal day."

switch (day) {
   case "monday":
       console.log(var_1);
       break;
   default:
       console.log(var_2);
}
document.getElementById("sc").innerText = var_2;
document.getElementById("sc_rslt").innerText = `Since value of the day variable is not matched with the case "monday" as it's case sensetive, system will move to default and will print "It's a normal day"`

//task 2
let amount = prompt("Provide the withdrwal amount",100);
let success = "Withdrawl Successful"
let invalid = "Invalid Amount"
let result = ""
if (amount && amount%100===0) {
    console.log(success);
    alert(success,"40 days JS");
    result = success;
} else {
    console.log(invalid);
    alert(invalid,"40 days JS");
    result = invalid;
}
document.getElementById("atm").innerText = amount;
document.getElementById("atm_rslt").innerText = result;

//task 3
let numbers = {
    "1st_number" : 12,
    "2nd_number" : 6
}
let operator = prompt("Provide any ane of the operators + or - or / or * or %",'+');
let value;
switch (operator) {
    case '+' :
        value = numbers["1st_number"] + numbers["2nd_number"]
    case '-' :
        value = numbers["1st_number"] - numbers["2nd_number"]
    case '/' :
        value = numbers["1st_number"] / numbers["2nd_number"]
    case '*' :
        value = numbers["1st_number"] * numbers["2nd_number"]
    case '%' :
        value = numbers["1st_number"] % numbers["2nd_number"]
    default:
        value = "Invalid Data Provided"
}
console.log(value,numbers["1st_number"]);

//task 4
