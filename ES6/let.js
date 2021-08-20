// The let keyword was introduced in ES6 (2015).

// Variables defined with let cannot be Redeclared.

// Variables defined with let must be Declared before use.

// Variables defined with let have Block Scope.

var x = 2;    // Allowed
//let x = 3;    // Not allowed

{
let x = 2;    // Allowed
//let x = 3     // Not allowed
}

{
let x = 2;    // Allowed
//var x = 3     // Not allowed
}

if (true) {
    let a = 40;
    console.log(a); //40
   }
  // console.log(a); // undefined