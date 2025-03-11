## The Scope Table
## Comparison Table: `var` vs `let` vs `const`

| Feature               | `var`                         | `let`                         | `const`                       |
|-----------------------|-----------------------------|-----------------------------|-----------------------------|
| **Scope**            | Function scope               | Block scope `{}`             | Block scope `{}`             |
| **Hoisting**         | Hoisted & initialized as `undefined` | Hoisted but in **Temporal Dead Zone (TDZ)** | Hoisted but in **Temporal Dead Zone (TDZ)** |
| **Attached to `window`?** | ✅ Yes | ❌ No | ❌ No |
| **Can be Re-declared?** | ✅ Yes | ❌ No | ❌ No |
| **Can be Reassigned?** | ✅ Yes | ✅ Yes | ❌ No |
| **Initial Value Required?** | ❌ No | ❌ No | ✅ Yes (Must be initialized) |
| **Mutability** | Mutable | Mutable | Immutable (Can't be reassigned but mutable if it's an object or array) |
| **Use in Loops** | Allowed but not recommended (function scope issues) | ✅ Recommended | ❌ Not recommended for changing values |

# Reason of not to use var in a loop
    *   we know that var is function scope
    *   any variable declared with var can be accessible outside the loop block
    *   which has possiblility of manipulating the variable outside of the loop block.
    *   that is not recommended

[
    for(var i = 0; i<5; i++){//use let to avoid manupulation
        console.log(i);
    }
    i += 5;
    console.log(i);
]