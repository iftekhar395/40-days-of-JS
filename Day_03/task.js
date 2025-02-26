//TRYING TO SOLVE THE TASK BASED ON LAST 3DAYS SESSION EXCEPT USING toString and concat function
//1. Odd or Even?
let number = 101;
document.getElementById("oe").innerText = number;
number = number%2===0 ? "The number is Even" : "The number is Odd";
console.log(number);
document.getElementById("oe_rslt").innerText = number;

//2. Do you have a Driving License?
let age = 17;
let eligibilityCheck = age>=18 ? "Eligible" : "Not Eligible";
console.log(eligibilityCheck);
document.getElementById("dl").innerText = age;
document.getElementById("dl_rslt").innerText = eligibilityCheck;

//3. Calculate CTC with a Bonus
let salary = 12300;
let annualSalary = salary * 12;
let ctc = annualSalary + (annualSalary * 20 /100)
console.log(ctc)
document.getElementById("ctc").innerText = salary;
document.getElementById("ctc_rslt").innerText = ctc;

//4. Write a program for the Traffic Light Simulation
let color, tls;
color = "Green" //"Red"
tls = color==="Green" ? "Go" : color==="Red" ? "Stop" : ""
console.log(tls)
document.getElementById("tls").innerText = color;
document.getElementById("tls_rslt").innerText = tls;

//5. Create an Electricity Bill Calculator
let units, monthBill, yearBill;
units = 20;
monthBill = 20 * 150;
yearBill = monthBill * 12
yearBill = yearBill * 0.8 //since 20% minus from 100%
console.log(monthBill)
console.log(yearBill)
document.getElementById("bill").innerText = units;
document.getElementById("month_rslt").innerText = monthBill;
document.getElementById("year_rslt").innerText = yearBill;

//6. Leap Year Checker
let year = 2025;
isLeapYear = year%4==0 ? "Provided year is a Leap Year" : "Provided year is not a Leap Year";
console.log(isLeapYear);
document.getElementById("ly").innerText = year;
document.getElementById("ly_rslt").innerText = isLeapYear;

//7. Max of Three Numbers
let p=99;
let q=55;
let r=101;
let maxNum = p>q ? p>r ? p : r : q>r ? q : r;
console.log(maxNum);
document.getElementById("mn").innerText = p.toString().concat(', ',q.toString().concat(', ',r.toString()));
document.getElementById("mn_rslt").innerText = maxNum;

//8. Biwise Doubling
let count = 5;
let double = 5<<1;
console.log(double)
document.getElementById("bd_rslt").innerText = double;
