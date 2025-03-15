//task 1
function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}
const counter = outer();
counter();  //1
counter();  //2

/*
Reason:
    * Due to closure the output will be 1 and 2
    * For the 1st time invocation inner function will get the variable from its outer and print 1
    * For 2nd time invocation previous value will be in its memory which was 1 and after increment it will print 2
*/


//task2
function testClosure() {
    let x = 10;
    return function () {
        return x * x;
    };
}
console.log(testClosure()()); //100

/*
Reason:
    * based on 1st parentesis it will invoke outer scope and return a function
    * based on 2nd parentesis it will invoke inner scope and return a value
    * The output will be 100
*/


//task 3

function clickCount(){
    let count = 0
    return function increment(){
        count++;
        console.log('Clicked',count,'time(s)');
    }
}
const clickMe = clickCount();
document.getElementById("click").addEventListener("click",clickMe);


//task 4
function createMultiplier(multiplier){
    let data = multiplier;
    return function multiplier(number){
        return number * data;
    }
}

console.log(createMultiplier(4)(5))


//task 5
//Answer: ii. The object remains in memory as long as the closure exists


//task 6
//Write a function factory of counter to increment, decrement, and reset a counter. Use closure to refer the count value across the functuions.

function factory(){
    let count = 0;
    return { //can return block instead of function
        increment : ()=>{
            count++;
            console.log("Increment",count);
        },

        decrement : ()=>{
            count--;
            console.log("Decrement",count);
        },
        
        reset : ()=>{
            count = 0;
            console.log("Reset",count);
        }
    }
}

const callFactory = factory();
callFactory.increment;
callFactory.increment;
callFactory.increment;
callFactory.increment;
callFactory.reset;