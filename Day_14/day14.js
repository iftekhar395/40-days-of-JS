//parsing error
//runtime error


//exception in js: exception is a runtime error that disrupt program execution

//example
//console.log(x)//reference error: x is not defined

//let obj = null
//console.log(obj.name) //type error: can not read properties of obj

//console.log("Hello World!!!" //syntex error

//let arr = new Array(-1) //range error

//decodeURI("%") //urierror; URI: Unified Resource Identifier

//eval("var a=;") //eval error


//error handling
//try catch
// try{
//     //logic or code
// } catch(err){//creating error object/receiving error in detail
//     //handle error
// }
/*
    1. Code inside try gets executed.
    2. If no error in the try block, the catch block will be ignored and will not be
    executed.
    3. If there is an error in the try block, the execution of the try block will be
    suspended and the control will move to the catch block. In the catch block you
    can find the error details and do the needful.
*/

try{
    console.log("execution starts")
    abc;
    console.log("execution ends")
} catch(err) {//will work without (err) block
    console.error("an error has occured");
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);
}

//real-world use cases
function division(a,b){
    try{
        if(b===0){
            const getErr = new Error('2nd parameter can not be zero')
            throw getErr;
        }
        console.log(a/b);
    }catch(err){
        console.error('Gat a math error',err.message)
    }
}

division(15,3);
division(15,0);
