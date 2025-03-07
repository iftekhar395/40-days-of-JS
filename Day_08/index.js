/*
Execution Context
    Global Execution Context
        Creation Phase:
            1. window object
            2. this keyword
            3. window===this

                var name = 'Tom'
                function sayName(){
                    console.log(this.name)
                }

            4. allocate memory for variable 'name' and function 'sayName()'
            5. name will be initialized by undefined
            6. function body will be placed directly into memory

        Execution Phase:
            1. assign the value 'Tom' to the variable name
*/