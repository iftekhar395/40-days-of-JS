//task 1
const userTask = { name: "Alex", age: undefined };
console.log('Task 1', userTask.age ?? "Not provided");//nullish coalescing operator (??)
//output: "Not provided"

//task 2
const objTask = Object.freeze({ a: 1 });
objTask.a = 2;
console.log('Task 2', objTask.a);
//output: 1; will not modify a

//task 3
const personTask = {
    name: "Tapas",
    company: {
      name: "tapaScript",
      location: {
        city: "Bangalore",
        zip: "94107"
      }
    }
};

const {name,company,company:{location:{city}}} = personTask;
console.log('Task 3', name,company,city)
//output: Tapas ,Object { name: "tapaScript", location: { city: "Bangalore", zip: "94107" } }, Bangalore

//task 4
const student = [
    {
        name: "Iftekhar",
        age: 22,
        grades: 5.00
    },
    {
        name: "Bob",
        age: 23,
        grades: 4.40
    },
    {
        name: "Lui",
        age: 24,
        grades: 4.80
    }
]
//console.log(student.length)

function averageGrade(obj){
    let totGrade = 0;
    for(let {grades} of obj){//destructuring through for of loop
        console.log('grades', grades);
        totGrade += grades;
    }
    console.log('Task 4', "The average grade is",totGrade/obj.length)
}

averageGrade(student);

//output: 4.733333333333333


//task 5
/*
Store books in an object.
Add functionality to check availability and restock books.
*/
const books = [
    {
        bookName: 'Book A',
        qty: 120
    },
    {
        bookName: 'Book B',
        qty: 220
    },
]

function isExists(isAvail){
    for({bookName, qty} of books){
        console.log(typeof(bookName),typeof(qty))
        if(bookName===isAvail){
            return [bookName,qty];
        }
    }
    return ['',0];
}

function inventorySystem(){
    let newBook = '';
    return {
        availability: function(isAvail){
            let getData = isExists(isAvail);
            getData[0] !== '' && getData[1]>0 ? console.log('Task 5',`${bookName}: ${qty} quantity is available.`) : console.log('Task 5',`Your desired book is not available.`); 
        },
        restock: (book, qty)=>{
            let notExists = false;
            for(let i=0; books.length>i; i++){
                if(books[i].bookName === book && book){
                    books[i].qty += qty;
                    notExists = true;
                    break;
                }
            }
            if(!notExists){
                newBook = {bookName: book, qty: qty}
                books.push(newBook)
                console.log('Task 5',books)
            }
            
        }
    }
}

inventorySystem().availability('Book A');
inventorySystem().restock('Book C',5);
inventorySystem().restock('Book C',5);
//output:


//task 6
const numbers = {
    a:1,
    b:2,
    c:3
}
const entries = Object.entries(numbers)
console.log('Task 6[entries]', entries) //will return an outer array providing the individual properties(key & value) with inner arrays
/*output:
[
  [
    "a",
    1
  ],
  [
    "b",
    2
  ],
  [
    "c",
    3
  ]
]
*/

const keys = Object.keys(numbers)
console.log('Task 6[keys]', keys)//will return an array of keys only
/*output:
[
  "a",
  "b",
  "c"
]
*/


//task 7
const propertyCheck = {
    'img' : 'image tag',
    'src' : 'attribute of image source',
    'class' : 'attribute of tag identifier'
}

const isAvailable = Object.hasOwn(propertyCheck,'id') //to check if an object has a certain property
console.log('Task 7', isAvailable)
//output: false


//task 8
const personT = { name: "John" };
const newPersonT = personT;
newPersonT.name = "Doe";
console.log('Task 8', personT.name);

//output: Doe; since person is referece to newPerson, so changing the value of it will impact the other


//task 9
const patientTask = {
    name: "Iftekhar",
    age: 31,
    address : {
        city : "Gazipur",
        postCode : 1704,
        state : "Dhaka",
        country : "Bangladesh"
    }
}

const clonePatient = structuredClone(patientTask)
console.log('Task 9', clonePatient)
//output: Object { name: "Iftekhar", age: 31, address: {…} }; will clone deeply without manipulating clonePatient
clonePatient.address.city = "Dhaka"
console.log(clonePatient.address.city, patientTask.address.city)

//task 10
const usersTask = [
    {
        'name': 'Alex',
        'address': '15th Park Avenue',
        'age': 43
    },
    {
        'name': 'Bob',
        'address': 'Canada',
        'age': 53
    },
    {
        'name': 'Carl',
        'address': 'Bangalore',
        'age': 26
    }
];

for(let {name, address, age} of usersTask){
    console.log('Task 10', name, address, age)
}

/*
output:
Alex 15th Park Avenue 43
Bob Canada 53
Carl Bangalore 26
*/