//for loop; when need to iterate a specific number of time
for(let i = 1; i<=5; i++){
    console.log("Loop count",i);
}

let sum = 0
for(let j = 1; j<=100; j++){
    if(j%2===0){
        console.log("j",j);
        sum += j;
    }
}
console.log("Sum is:",sum)

let lang = "JavaScript"
for(let i =0; i<lang.length; i++){
    console.log(lang.charAt(i));
}

//nested loop
for(let i = 0; i<3; i++){
    for(let j = 0; j<3; j++){
        console.log("Row:",i,"Column:",j);
    }
}

//break and continue
for(let i = 1; i<=5; i++){
    console.log("Loop count",i);
    if(i===3){
        break;//exit from the loop
        //contiue //skip the iteration
    }
}

//while loop
let counter = 1
while(counter>=5){
    console.log(counter);
    counter++;
}

//do while; when need to iterate at least 1
let num = 1;
do{
    console.log(num);
    num++;
}while(num<=5)