# Temporal Dead Zone
{
    //TDZ(Tamporal Dead Zone)

    
    //console.log("Value of First Varialbe f_val is",f_val) //reference error
    
    //console.log("Value of Second Varialbe s_val is",s_val) //reference error
    
    //console.log("Value of Third Varialbe t_val is",t_val) //will not provide any error as already initialized to undefined at the CP of GEC

    let f_val = "TDZ 1";
    //const s_val; //syntax error; TDZ for First Variable end here
    const s_val = "TDZ 2"; //TDZ for Second Variable end here
    var t_val = "TDZ 3"; //TDZ for Third Variable end here though variable initialized as undefined at CP

    console.log("Value of First Varialbe f_val is",f_val)
    console.log("Value of Second Varialbe s_val is",s_val)
    console.log("Value of Third Varialbe t_val is",t_val)
}

Explanation:

    GEC
        CP
            f_val:
            s_val:
            t_val: undefined
        EP
            f_val: "TDZ 1"
            s_val: "TDZ 2"
            t_val: "TDZ 3"


    * if f_val, s_val & t_val is used before its initialization then TDZ will start at top of the block scope and move on until the initialized position found;

    * for let and const there will raise reference error for the comment out code snippet of f_val and s_val

    * for the access modifier var, there will no error occur as at the creation phase it was initialized as undefined.

# Variable Hoisting

For the above code snippet:

    * At global execution context creation phase variables are initialized as undefined for t_val(var) and not initialized for f_val and s_val(let and const)

    * The above proceedure is basically variable hoisting. Hoisting is a behavior that help execution phase to perform the execution process based on the variable declaration at the creation phase

    * Since the f_val and s_val is not defined but just created storage at GEC Creation Phase on stack memory, an error will occure during execution to print the values as nothing is intialized on the variables except the third one.

# Function Hoisting

getHoist();

function getHoist(){
    console.log("Hoiseted...!!!")
}

Execution flow:

    GEC:
        CP:
            getHoisted(): f() allocated at heap memory
        EP:
            getHoisted(): execute

            FEC (for getHoisted()):
                CP:
                EP:
                    log() from console: execute
                    FEC (for log() ):
                        CP:
                        EP:

    * At GEC Creation Phase, a storage is allocated for the function getHoisted() that means a stroge is created for that function in the heap memory as it is a non primitive data type.

    * At exection phase system found that storage and try to excute inner part of the function block

    * though the function is invoked before its initialization system is able to figure it out as per storage allocation of creation phase which is basically hoisting the funtion
