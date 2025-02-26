console.log("Welcome to Day 2")
//access modifier var/let/const

//var is function scope. 
// in modern js need not to declare var. 
// in var can redeclare and reasign
city = "Dhaka"
console.log("1st assign: ",city)
city = "Chattogram"
console.log("2nd assign: ",city)

//let is block scope
//can not redeclare but reassign
let country = "Bangladesh"
console.log("1st assign: ",country)
//let country = "Bhutan" //will raise error
country = "Bhutan"
console.log("2nd assign: ",country)

//const is block scop
//can not redeclare and reassign
const area = 147570
//const area = 75741 //will raise error
console.log("1st assign: ",area)

/*
#primitive data type
string, number, boolean, null, undefined, BigInt(), Symbol(unique identifier[symbol("id")])

#non primitive/reference data type
Object, Array, Function

#Memory: Stack(work with primitive data type), Heap(work with non-primitive data type)
Unique memory address

#Inner process when code written in js
Tokenizing, Parsing  [process: AST(Abstract Syntax Tree)], Interpreting, Genaration
check astexplorer.net
*/

//#assignments
let personName, age, isStudent, favorite_prog_lang, person, myArray;
personName = "Iftekhar";
age = 30;
isStudent = true;
favorite_prog_lang = "JS";
console.log(personName,age,isStudent,favorite_prog_lang)
age = 31;
console.log(personName,age,isStudent,favorite_prog_lang)

person = {
    personName: personName,
    age: age,
    isStudent: isStudent,
    favorite_prog_lang: favorite_prog_lang
}
console.log(person)

myArray = ["Iftekhar", 30, true, "JS"]
console.log(myArray)
