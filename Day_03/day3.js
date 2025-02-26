console.log("Day 3")
/*
#jargons:
    *operator
    *operands
    *expression [x=2(assignment expression); x=2+3(evaluating expression)]
*/

//arithmatic operator
let x, y;
x = 1+2; //+
y = 2-1; //-

//assignment operator
x += 5; //+=
y *= 2 //-=

//comparison operator
//> < == === !== !==

//logical operator
console.log("cow" && "horse")
console.log("cow" ?? "horse") //nullish qualision operator; will check null and undefine; 1st check 1st one if true threturn the value or move to next one

//conditonal ternary operator
let getStatus = 1 ? "Active" : "Inactive";
console.log(getStatus)

//conditonal bitwise operator
//& | ~(tilda) <<(left shift) >>(right shift) ^(xor)
/*
console.log(15 & 9) //return 9
decimal to binary
15/2 = 7 remainder(1)
7/2 = 3 remainder(1)
3/2 = 1 remainder(1)
15 means 1111
binary to decimal
1111 = 1*(2**0)+1*(2**1)+1*(2**2)+1*(2**3) = 15
1111|1001 = 1111
1111^1001 = 0110 comparing from right to left; if any one 1 not both then 1 else 0
1111<<2=111100 (shift 2 position at right)
1001>>2=0010 (shift 2 position at left 01 will ommit)
*/

//grouping
let r1=4;
let s=5;
let t=6;
console.log((r1+s)*t)
console.log(r1+s*t)

//type of
let arr = [1,2,3]
console.log(typeof arr)
console.log(typeof null)

//instance of
//will share later