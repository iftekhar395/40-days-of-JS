console.log("Welcome to day 4")

//functions
function printThis(){           //function declaration
    console.log("Printing...");
}

printThis(); //call the function

//function as an expression

let printMe = function (){
    console.log("Print me...")
}

printMe();

//Parameters & Argument
function sum(a,b){//parameters
    //const result = a + b;
    //console.log(result);
    return a+b;
}

let result = sum(10, 4); //arguments

function double(x){
    return 2*x;
}

console.log(double(result));

//Default Parameters
function calc(a=0,b=0){
    return a+b;
}

let resVar = calc();
console.log(resVar);

//Rest Parameter
function restParam(x,y,...r){//rest param should have 3 dots including a name and it can not be used as 1st param
    console.log(x,y,r)
}

restParam(1,2,3,4,5,6,7,8);

//Nested Function
function outer(){
    console.log("It's OUTER")
    return function inner(){ //can only accessible outside of the outer function through return
        console.log("It's INNER")
    }
    //inner();//can not invoke this out of the outer function
}

let setReturnFunc = outer();
console.log(setReturnFunc);

//Callback Function
let willExecute = true;
function funAsParam(param){
    console.log("funAsParam is called");
    if(willExecute){
        param();
    }
}

funAsParam(
    function(){//argument passing as anonymous function; the function that no name will be treated as anonymous
        console.log("Anonymous function is called")
    }
);

//Pure Function will have same input and output as well as no side effect feature
let gretingName = "Iftekhar"//same input
function gretingMsg(){
    return  `WELLCOME TO JS, ${gretingName}`;
}
console.log(gretingMsg)//same output
gretingName = "TapaScript" //manupulating input is not pure functioning
console.log(gretingMsg)//not same output

//Higher Order Function can take param as function or return the function
function camera(setCamera){
    setCamera();
}

camera(function(){
    console.log("Sony")
})

function returnFunc(){
    return function(){//function wrapping
        console.log("Higher Order function")
    }
}

const retFun = returnFunc();
retFun();

//Arrow Function
let greetMe = (msg)=>{
    console.log(msg)
    return `${msg} TapaScript.`;
}
console.log(greetMe("Hello!!!"));

//IIFE(Immediately Invoked Function Exression)
(function(mymsg){//if we want to use function immidiate after call without name
    console.log(mymsg);
})("IIFE")//argument pass

//function execution stack or call stack
function classRange(classNo){
    console.log("class no:",classNo)
    if (classNo<2){
        console.log("No more class left")
        return;
    }
    classRange(classNo-1);
}
classRange(10);