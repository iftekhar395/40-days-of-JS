"use strict"//to avoid getting window object for standalone function
console.log('Day 13: The "this" Keyword')

//global

//this keyword and window object
console.log("this at the global",this)//this indicates global context window

//binding
//object
//function

//inside of an Object - Implicit Binding: is a way that determines the value of the this keyword within a function when that function is called as a method of an object. In simpler terms: "The object to the left of the dot, is what 'this' refers to."

const implicitBinding = {
    id: "123abc",
    returnThis: function(){
        return this;
    },
    anotherKey: function(){
        return `1st value of implicitBinding is ${this.id}`;
    }
}

console.log("this inside the implicitBinding object",implicitBinding.returnThis())  //this keyword inside the refered object is bound to provide data inside the object of a function; must invoked returnThis method

console.log("Constructed id using this",implicitBinding.anotherKey());

const tom = {
    name: "Tom",
    age: 7
}

const jerry = {
    name: "jerry",
    age: 3
}

function introduce(obj){
    obj.introduceObj = function(){//`${this.name} is ${this.age} years old`;
        console.log(`${this.name} is ${this.age} years old`);
    }
    console.log(obj);
}

introduce(tom);
tom.introduceObj();


introduce(jerry);
jerry.introduceObj();

//inside of a standalone function: in standalone funtion this refers to GEC window object but in strict mode it will undefined
function sayName(){//declared in global scope
    console.log("this inside a function",this)//refered window object
}

sayName();

function outer(a){
    console.log(a,"this inside an outer function",this)//window
    return function inner(b){
        console.log(b,"this inside an inner function",this)//window
    }
}
const outerResult = outer(5);
outerResult(3);


//inside the arrow function: has not it's own this. in arrow function this keyword will refer to its[in which scope the arrow function is used] parent scope 
const getFood = () => this;
console.log("this inside the arrow function defined in global scope",getFood())

const food = {
    name: "mango",
    color: "green",
    //getDesc: () => `${this.name} is ${this.color}` //since window object has no name/color attribute will return undefined
    /*getDesc: function(){//implicit binding
        return `${this.name} is ${this.color}`
    }*/
    //using arrow function without undefined
    getDesc: function (){
        return () => `${this.name} is ${this.color}`
    }
}

//console.log(food.getDesc())
const descFunc = food.getDesc()
console.log(descFunc())


//explicit binding - call, apply, bind

//the call method; only applicable to bind function only not object
const name = function(firstName,lastName){
    console.log(`${firstName} ${lastName} is ${this.age} years old`)
}

const age = {
    age : 32
}

name.call(age,"Iftekhar","Hossain") //explicit binding

//apply
const param = ["Ishtiaq","Hossain"] //only applicable for apply
name.apply(age, param)

//bind
const newHobbies = function(hobby1,hobby2){
    console.log(`${this.name} likes ${hobby1}, ${hobby2}`)
}

const officer = {
    name : "Louis Kahn"
}

const newFun = newHobbies.bind(officer,"Architecture","Design")
newFun()


//new keyword
const Cartoon = function(name,animal){
    this.name = name;
    this.animal = animal;
    this.msg = function(){
        console.log(this.name+' is a '+this.animal)
    }
}

const tomCartoon = new Cartoon("Tom","Cat")
tomCartoon.msg()

