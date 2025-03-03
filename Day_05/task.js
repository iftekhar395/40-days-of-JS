//task 1
let piramid = ''
for(let i = 1; i<=5; i++){
piramid += '*'
    console.log(piramid);
}

//task 2
let number = prompt("Provide the number");
let setStr = '';
let product = 0;
for(let i = 1; i<11; i++){
    setStr = `${number} X ${i} =`;
    product = i * number
    console.log(setStr,product)
}

//task 3
let oddSum = 0;
for(let j = 1; j<=500; j++){
    if(j%2!==0){
        oddSum += j;
    }
}
console.log("Summation of odd numbers from 1 to 500:",oddSum)

//task 4
for(let i = 1; i<=20; i++){
    if(i%3===0){
        continue;
    }
    console.log(i)
}

//task 5
let originalNumber = prompt("Share the number you want to reverse")
let oNumToStr = originalNumber.toString();
let reversedNumber = '';
let initVal = oNumToStr.length-1;
while(0<=initVal){
    reversedNumber += oNumToStr.charAt(initVal);
    initVal--;
}
console.log(reversedNumber)