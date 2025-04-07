//task 1
//use strict
console.log(this) //window

const insideObj = {
    bindType : 'implicit binding',
    useFunc : function(){
        console.log(this)
    }
}

insideObj.useFunc(); //whole object(insideObj)

function standaloneNonArrowFunc(){
    console.log(this)
}

standaloneNonArrowFunc() //window object

const standaloneArrowFunc = ()=>{
    console.log(this)
}

standaloneArrowFunc();

const insideObjArrow = {
    functionType : 'arrow function',
    arrowFunction : function (){
        (() => {//IIFE
            console.log(this)
            console.log(`'this' inside an ${this.functionType}`)
        })()
    }
}

insideObjArrow.arrowFunction()

function Constructor(consturctor){
    this.consturctor = consturctor;
    this.anyMethod = function(){
        console.log(this);
        console.log(`${this.consturctor} created`);
    }
}

const anyInstance = new Constructor('New Constructor');
anyInstance.anyMethod()


//task 2
//const user = {
//  name: "tapaScript",
//  greet: () => {
//    console.log(`Hello, ${this.name}!`);
//  },
//};
//
//user.greet();//will return Hello, !; here this refers to its global scope where name is blank for window.name

//correct code
const user = {
  name: "tapaScript",
  greet: function(){
    return () => {
    console.log(`task 2: Hello, ${this.name}!`);
  }
}
}
const message = user.greet();
message();//Hello, tapaScript! currently this refered to its parent scope where name is defined as tapaScript


//task 3

//const obj = {
//  name: "Tom",
//  greet: function () {
//    console.log(`Hello, ${this.name}!`);
//  },
//};
//
//const greetFn = obj.greet;//returned whole function
//greetFn();//this.name is undefined as this refered to window object and name is not declared anywhere in global scope

//correct code
const obj = {
  name: "Tom",
  greet: function () {
    console.log(`task 3: Hello, ${this.name}!`);
  },
};

const greetFn = obj.greet;
greetFn.call(obj);//Hello, Tom!


//task 4
//const user2 = {
//  name: "Alex",
//  greet: function () {
//    function inner() {
//      console.log(`Hello, ${this.name}!`);//here this refered to window object and this.name is blank as inner is a standalone function
//    }
//    inner();
//  },
//};
//
//user2.greet();

//correct code
const user3 = {
  name: "Alex",
  greet: function () {
    return ()=> {
      console.log(`task 4: Hello, ${this.name}!`);
    }
  },
};

const msg2 = user3.greet();
msg2()

//task 5 Create a Sports constructor function that takes name and number of players as arguments and assigns them using this keyword. Then, create two sports instances and log their details
function Sports(name,num){
    this.name = name;
    this.num = num;
    this.details = function(){
        console.log('task 5:',`It's required ${this.num} players to play ${this.name}.`)
    }
}

const cricket = new Sports("Cricket",11)
cricket.details()

//task 6
const car1 = {
  brand: "Audi",
  model: "A8",
  describe: function () {
    console.log(`task 6: This car is a ${this.brand} ${this.model}.`);
  },
};

const car2 = {
  brand: "BMW",
  model: "X1",
};

//call
car1.describe.call(car2);
//apply
car1.describe.apply(car2);
//bind
const implicitBind = car1.describe.bind(car2);
implicitBind()
//implicit
car2.describeCar = car1.describe;
car2.describeCar();

Object.assign(car2,{newDescribe: car1.describe}) //It copies own enumerable properties (including functions) from one or more source objects to the target object
car2.newDescribe()

//task 7
const person = {
    name: "Charlie",
    sayHello: function () {
        console.log('task 7: ',this.name);
    },
    sayHelloArrow: () => {
        console.log('task 7: ',this.name);
    },
};

person.sayHello();//Charlie
person.sayHelloArrow();//"" (empty string)

//output: C: "Charlie" and "" (empty string)



