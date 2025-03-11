//--task 1---
let user = "Alice";

function outer() {
    function inner() {
        console.log(user); //Bob
    }
    let user = "Bob";
    inner();
}

outer();

//Reason
/*
    # at the function execution context creation phase inner() will move to heap memory and user will move to stack(without initialization)
    # at the execution phase user var will initialized by "Bob"
    # by the process flow of scope chain inner function will try to find variable user in the inner scope
    # since there is no variable like user it will find that in the outer scope and the value will be taken
    # then the output will be "Bob"
*/

//--task 2---
let total = 0; // Global, bad practice

function add(num) {
    total += num;
}

add(5);
add(10);
console.log(total); //15

//Misatke
/*  # total is declared global scope
    # since similar funcion is invoked multiple time, the total value in the console will print 15
    # that means total is accessible from the output which is a cause of manupulation
*/

//---task 3---
function outerFunction(){
    let innerVar = 10;
    function innerFunction(){
        console.log("The value of outer scope that accessed from inner scope is,",innerVar)
    }
    innerFunction();
}

outerFunction();

//---task 4---
function accessVar(){
    for(let i=0; i<3; i++){
        let aVar = "Can you access it outside?";
        console.log(aVar,"yes");
    }
    //console.log("Can you access it outside?","no"); //reference error and not accessible as let is block scoped
}

accessVar();

//---task 5---
function outFunction(){
    function inFunction(){
        let myvar = "inner function"
    }
    inFunction();
    console.log(myvar); //reference error and not accessible. as per scopchain outer function can not access inner function directly
}

//---task 6--
console.log(a); //reference error
let a = 10;

//Reason
/*
    # as per the process flow of js execution context variable is initialized with none in creation phase of global execution phase
    # since variable a is used in log to print variable before its initialization an reference error will be encountered
*/

//---task 7---
function showAge() {
    let age = 25;
    console.log(age);
}

console.log(age); // reference error

//Answer=> B: Only inside showAge

//---task 8---
let message = "Hello";

function outer() {
    let message = "Hi"; //variable shadowing

    function inner() {
        console.log(message);
    }

    inner();
}

outer();

//Output: "Hi"
/*
    # as per the scope chain process inner function will look forward to the variable message to inner scope
    # if the variable is not available then move to the outer scope
    # here variable message is availbale and print the message
*/

//---task 9---
let x = "Global";

function outer() {
    let x = "Outer";

    function inner() {
        let x = "Inner";
        console.log(x);
    }

    inner();
}

outer();


//Output: "Inner"
/*
    # regarding the process flow of scope chain inner function get the value of x in inner scope
    # then print the value as "Inner"
*/

//---task 10---
function counter() {
    let count = 0;
    return function () {
        count--;
        console.log(count);
    };
}

const reduce = counter();
reduce();   //-1
reduce();   //-2


//1st Output: -1
//2nd Output: -2
//Reason
/*
    1st invoke
        # counter() initialize the count variable
        # when returning inner function, checked a variable count is exists or not
        # since it's not available in the inner function inner function collect the data from outer
        # then count will be decremented
        # the print will be -1
    2nd time invoke
        # since its returning a function again, as per scope chain process inner function will execute
        # at the early stage inner scope found count as -1 which is already available for 1st invoke
        # count will be decremented again
        # the print will be -2

    Need to remind
        ***count does not reset because counter() is only called once. The closure preserves the count variable between function calls instead of reinitializing it
        closure:
            # A closure is when a nested function "remembers" the variables from its outer function even after the outer function has finished executing.
        
            Closure in this Code

            counter() creates count = 0.
            The inner function is returned and stored in reduce.
            Even though counter() has finished running, the returned function still "remembers" count due to closure.
            Every time reduce() is called, it accesses and modifies the same count.
*/