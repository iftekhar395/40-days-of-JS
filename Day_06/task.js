//task 1
function celToFar(cel){
    console.log("Input:",cel);
    return (cel * 9/5) + 32;
}

console.log("Fahrenheit:",celToFar(31));

//task 2
function findMax(num1,num2){
    console.log("Input:",num1,"&",num2);
    return num1>num2 ? num1 : num2;
}

console.log("Max number:",findMax(-5,6))

//task 3
function isPalindrome(str){
    console.log("Input:",str);
    let mainStr = str;
    let revStr = '';
    for(let i=mainStr.length-1;i>=0;i--){
        revStr += mainStr[i];
    }
    return revStr===str ? "Is a Palindrome" : "Is not a Palindrome";
}
console.log("Output:",isPalindrome("eye"));

//task 4
function factorial(n){
    //console.log(typeof n);
    if(n<0 || typeof n !== 'number'){
        return "Number can not be negative";    
    } else if(n===0){
        return 1;
    } else if(n<2) {
        return n;
    }else{
        //console.log(n);
        return n*factorial(n-1);//recursive
    }
}
let val = 5;
console.log("Input:",val);
console.log("Factorial:",factorial(val));

//task 5
function countVowels(str){
    let count = 0;
    for(let i =0; str.length>i;i++){
        switch(str[i]){
            case 'a':
                count += 1
                break;
            case 'A':
                count += 1
                break;
            case 'e':
                count += 1
                break;
            case 'E':
                count += 1
                break;
            case 'i':
                count += 1
                break;
            case 'I':
                count += 1
                break;
            case 'o':
                count += 1
                break;
            case 'O':
                count += 1
                break;
            case 'u':
                count += 1
                break;
            case 'U':
                count += 1
                break;
            default:
                count += 0
        }
    }
    
    return count;
}

let vowel = "TapaScript";//TAPASCRIPT
console.log("Input:",vowel);
console.log("Number of Vowels:",countVowels(vowel));

//task 6
function capitalizeWords(sentence){
    let upSentence = "";
    let blank = "";
    //algorithm is created based on single space of a sentence; but it's not the proper solution as user can write their own way. there may be multiple space, tab etc.
    upSentence = upSentence.concat(sentence[0].toUpperCase());
    for(let j=1; sentence.length>j; j++){
        if(sentence[j] === " "){
            upSentence = upSentence.concat(sentence[j]);
            blank = "yes";
        }else{
            if(blank === "yes"){
                upSentence = upSentence.concat(sentence[j].toUpperCase());
                blank = "";
            }else{
                upSentence = upSentence.concat(sentence[j]);
            }
        }
    }
    return upSentence;
}

let capWord = "40 days of javascript program";//TAPASCRIPT
console.log("Input:",capWord);
console.log("Capitalized Sentence:",capitalizeWords(capWord));

//task 7
(function(msg){
    console.log("IIFE:","Hello,",msg)
})("JavaScript!")

//task 8
function greet(name, callback){
    callback(name);
}

setMsg = "Hello World!!!"
console.log("Input:",setMsg);
greet(setMsg,function(){
    console.log("CallBack Print:",setMsg);
})
