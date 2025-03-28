//object literals
let user = {
    name : "Iftekhar",
    age : 33,
    "Marital Status" : "Married"
}

console.log(user.name, user["Marital Status"]) //have to invoke property to avoid escape character for "Marital Status" & [] is called subscript

//adding property to object literals
user.occupation = "Developer"
user["By Born"] = "Bangladesh"
console.log(user)

//deleting property from object literals
delete user["Marital Status"]
console.log(user)

//dynamic variable
let color = prompt("What is the key for the value red?")

let favCol = {
    [color] : "Red" //to make "color" dynamic use superscript
}

console.log(favCol)

//contructor function
function Color(cName,cType){//parameter; Constructor name must be in capital letter
    this.cName = cName;
    this.cType = cType;
}

const newColor = new Color("red","color code") //object
console.log(newColor)

//creating objects
const person = new Object();
person.name = "Limon"
person.address = "Gazipur"
console.log(person);

//factory function
function createUser(username,age){
    return {
        username, //if usernme and returning object are same need not to use as key value pair
        age,
        userProfile(){
            console.log(this.username,this.age)
        }
    }
}

const user1 = createUser("TAPAS",39) //no need to use new keyword for regular function
const user2 = createUser("BOB",29)
console.log(user1,user2)

let profile = {
    name : "MD IFTEKHAR HOSSAIN",
    company : "DHRUBO IT FIRM",
    message : function(){
        console.log(`${this.name} works at ${this.company}`)
    },
    address : {
        city : "Gazipur",
        postCode : 1704,
        state : "Dhaka",
        country : "Bangladesh",
        greetings : function() {
            console.log(`Welcome to ${this.country}`)
        }
    }
}

console.log(profile.salary)
console.log("salary" in profile) //checks the existance of salary object

if(!profile.salary){//will not check the object existance properly like if "salary" is defined as undefined
    console.log("The salary property doesn't exists")
}

console.log(profile.name);
console.log(profile.company);

profile.message();

//for...in to access objects property
for(let key in profile){
    console.log(key);
    console.log(profile[key]) //superscript to access dynamic keys; getting properties through loop
}

console.log(Object.keys(profile)) // will return properties(keys) in an array

//object references
let fruit = "Bannana"
let anotherFruit = "Bannana"

console.log("primitive", fruit===anotherFruit); //will return true as both data dealing as primitive data type

fruit = {fruitName: "mango"}
anotherFruit = {fruitName: "mango"}
console.log("non primitive", fruit===anotherFruit); //will return false as both data dealing as non primitive data type

fruit = anotherFruit
//both return true as assinged different object to same heap memory location
console.log(fruit == anotherFruit) //loosly compare
console.log(fruit === anotherFruit) //strictly compare

//static methods [Object.create(); Object.keys(); Object.assign(); Object.entries(); Object.fromEntries(); Object.freeze(); Object.seal(); Object.hasOwn()]
const target = {a:1, b: 2}
const source = {c:1, d: 2}

const returnObj = Object.assign(target,source)

console.log(returnObj)

const obj = {name: "tapascript"}
const obj2 = Object.assign({},obj)

console.log(obj2)
console.log(obj===obj2) //not similar

const obj3 = {
    a: 1,
    b: {c: 2} //nested object
}

const obj4 = Object.assign({}, obj3)
console.log(obj4)

obj4.b.c = 3 //will change the value of obj3(b) as well since 2 is not reference to b
console.log(obj4.b.c,obj3.b.c)

obj4.a = 5
console.log(obj4.a,obj3.a)

//structuredClone
const obj5 = structuredClone(obj3) //use structuredClone for deep clone of an object
obj5.b.c = 30
console.log(obj5.b.c,obj3.b.c) // will not change for structured clone

console.log(obj5==obj3)
let dd = [5]
let ee = ["5"]
console.log(dd===ee)
console.log(dd==ee)

const patient = {
    patientName : "Kohinoor Akter",
    age : 30
}

const patientArray = Object.entries(patient) //translate key value pair to array; convert object to array
console.log(patientArray)

const patient2 = new Map(
    [
        ["patientName" , "Kohinoor Akter"],
        ["age" , 30]
    ]
)
const patientObj = Object.fromEntries(patient2) //convert array to object
console.log(patientObj)

const emp = {
    empName : "Iftekhar",
    sal: 10000
}
Object.freeze(emp)
emp.newSalary = 15000
emp.sal = 15000 //will not change

console.log(emp)//will freeze emp and no new property will be added 
const emp2 = {
    empName: "Iftekhar",
    sal: 10000,
    department: ["HR","IT"],
    address:{
        house: 1234,
        road: 1,
        policeStation: "Gacha",
        zip: 1704,
        postOffice: "NU",
        district: "Gazipur"
    }
}
Object.seal(emp2)
console.log(Object.isFrozen(emp)) //will check the object is frozen or not
console.log(Object.isSealed(emp2))
emp2.empName = "Hossian" //will change(mutable) but not add or delete property for seal
emp2.sal = 15000
delete emp2.empName
console.log(emp2)

console.log(Object.hasOwn(emp2,"sal")) //will check the attribute sal is exists in emp2 or not

//Object Destructuring [new variable, default value, alias, nested destructure, destructuring function param, destructuring function return value, for of loop]
const {empName: employeeName,sal, position="Software Engineer", department,numberOfDept=department.length} = emp2 //Extracts name and salary in a shortest way is called destructuring; default value "Software Engineer" since position not exists; to destructure you must extract the attribute that you want to use first. without declaring department extracting length will provide error like const {empName,sal, position="Software Engineer",numberOfDept=department.length} = emp2; here employeeName is an alias of empName
console.log(employeeName,sal,numberOfDept)

const {address: {zip}} = emp2 //nested destructure
console.log(zip)

function getHouseNo({address:{house}}){ //destructuring function param
    console.log(`House No is ${house}`)
}

getHouseNo(emp2) //passing object as param to destruct

const getStudent = ()=>{
    return {
        name: "Iftekhar",
        roll: 10001,
        departments: ["Science","Arts","Commerce"],
        address:{
            house: 1234,
            road: 1,
            policeStation: "Gacha",
            zip: 1704,
            postOffice: "NU",
            district: "Gazipur"
        }
    }
}

const {name: stdName, roll: rollNo, departments, noOfDept=departments.length} = getStudent();//destructuring function return value

console.log("Student Naame:",stdName, "Roll No:", rollNo, "Number of Departmnet:", noOfDept);

const result = [
    {
        'name': 'Iftekhar Hossain',
        'gpa': 'A+'
    },
    {
        'name': 'Ishtiaq Hossain',
        'gpa': 'A+'
    },

]

for(let {name, gpa} of result){//destructuring through for of loop
    console.log(name, gpa)
}

const employee = {
    salary : {
        basic: 80000,
        bonus: 40000
    },
    department:{
        name: "IT"
    }
}

console.log(employee.department) //undefined
//const optChain = employee.department.name; //error
const optChain = employee.department?.name;//optional chaining will check name of the department is exists or not. if not exist will return undefined