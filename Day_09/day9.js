{
    //TDZ(Tamporal Dead Zone)

    //TDZ for First Variable
    //console.log("Value of First Varialbe f_val is",f_val) //reference error
    //TDZ for Second Variable
    //console.log("Value of Second Varialbe s_val is",s_val) //reference error
    //TDZ for Third Variable
    //console.log("Value of Third Varialbe t_val is",t_val) //will not provide any error as already initialized to undefined at the CP of GEC

    let f_val = "TDZ 1";
    //const s_val; //syntax error
    const s_val = "TDZ 2";
    var t_val = "TDZ 3";

    console.log("Value of First Varialbe f_val is",f_val)
    console.log("Value of Second Varialbe s_val is",s_val)
    console.log("Value of Third Varialbe t_val is",t_val)
}

//invoke function before its initialization
test();

var test = function() {
  console.log('I am being tested');
}
//--------end--------


// Invoke a function, chase()
chase();

// Declare a function, chase()
function chase() {
  console.log('Tom chases Jerry!');
  // Invoke a function, caught();
  caught();
}

// Declare a function, caught()
function caught() {
  console.log('Tom caught Jerry :(')
}
//--------end--------

//--------hoisting--------
// With var
    {
        console.log('name is ', name);
        var name = "tom";
        name = 'tom';
        console.log('name is ', name);
    }
    
    // With let
    {
        console.log('name is ', name);
        let name = "tom";
        name = 'tom';
        console.log('name is ', name);
    }
    
    // With const
    {
        console.log('name is ', name);
        const name = "tom";
        //name = 'tom';
        console.log('name is ', name);
    }
    //--------hoisting end------------
    
    // Temporal Dead Zone(TDZ)
    
    // TDZ = an area where you can not access a variable until it is initialized
    
    // ReferenceError
    
    {
        // === name variable's TDZ started here
        //
        //console.log(name); // RerenceError
        //
        console.log(address); // RerenceError
        let address = "bangalore";
        //
        let name = "tapaScript" // === name variable's TDZ ends here
        console.log(name);
        //
        //
    }