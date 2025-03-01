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
    alert(success);
    result = success;
} else {
    console.log(invalid);
    alert(invalid);
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
        value = numbers["1st_number"] + numbers["2nd_number"];
        break;
    case '-' :
        value = numbers["1st_number"] - numbers["2nd_number"];
        break;
    case '/' :
        value = numbers["1st_number"] / numbers["2nd_number"];
        break;
    case '*' :
        value = numbers["1st_number"] * numbers["2nd_number"];
        break;
    case '%' :
        value = numbers["1st_number"] % numbers["2nd_number"];
        break;
    default:
        value = "Invalid Data Provided"
}
console.log(value);

document.getElementById("calculator").innerText = operator;
document.getElementById("calculator_rslt").innerText = value;

//task 4
let age,price;
age = prompt("Provide your age here")
switch (age) {
    case age>=0 && age<10:
        price = '3$';
    case age<=10 && age>=60:
        price = '10$';
    case age>60:
        price = '8$';
    default:
        price = 'No Ticket';
}
document.getElementById("ticket").innerText = age;
console.log(price);
document.getElementById("ticket_rslt").innerText = price;

//task 5
//I would like to quit this task.

//task 6
let et = "Equilateral Triangle";
let it = "Isosceles Triangle";
let st = "Scalene Triangle";
let tt = ""

let f_angle = prompt("Provide the 1st angle of the triangle");
let s_angle = prompt("Provide the 2nd angle of the triangle");
let t_angle = prompt("Provide the 3rd angle of the triangle");

if(Number(f_angle)+Number(s_angle)+Number(t_angle)===180){
    switch(f_angle,s_angle,t_angle){
        case f_angle===s_angle && s_angle===t_angle:
            tt = et;
        case f_angle!==s_angle && s_angle!==t_angle && f_angle!==t_angle:
            tt = st;
        default:
            tt = it;
    }
}else{
    alert("Invalid data provided")
}
document.getElementById("triangle").innerText = `1st angle: ${f_angle}, 2nd angle: ${s_angle}, 3rd angle: ${t_angle}`;
console.log(tt);
document.getElementById("triangle_rslt").innerText = tt;
