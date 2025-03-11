//--global scope; can accessible anywhere---
let name = "Iftekhar";//using let can be accessible from window.name but not for let

function getName(){
    console.log("Inside function",name)
}

getName();

console.log("Outside Function",name)

{
    console.log("Inside block",name)
}

//---function scope [var is fuction scope]--
function toDo(){
    //let and const is block scope
    var task = "Learning 40 days of js";
    console.log(task); //task available in function block
}

toDo();
//console.log("----",task); //reference error

//block scope: variables can not be accessible outside the block except var
{
    //let and const is block scope
    let count = 10;
    console.log(count);    
}

//console.log(count); //reference error

//---scope chain---
//access flow of scope chain variable: innerVar(inner scope) => outerVar(outer scope) => globalVar(global scope)
let globalVar = "This is global variable";
function outer(){
    let outerVar = "This is outer variable";
    function inner(){
        let innerVar = "This is inner variable";

        console.log(innerVar);
        console.log(outerVar);
        console.log(globalVar);
    }
    inner();
}
outer();
//console.log(outerVar); //reference error

var count = 10;

function outerFun(){
    var count = 20;
    function innerFun(){
        var count = 30;
        console.log(count);
    }
    innerFun();
    console.log(count);
}

outerFun();
console.log(count);

//variable shadowing
let message = "I m doing well";

function situation(){
    let message = "I m not doing great";//shadowing
    console.log(message);
}

situation();
console.log(message);