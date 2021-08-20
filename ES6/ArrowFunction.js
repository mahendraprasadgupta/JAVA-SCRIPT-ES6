// Arrow Functions
// Arrow functions allows a short syntax for writing function expressions.

// You don't need the function keyword, the return keyword, and the curly brackets.

// ES5
var x = function(x, y) {
    return x * y;
 }
 console.log(x(5,5));
 
 // ES6
 const y = (x, y) => x * y;
 console.log(y(10,2));


 const z = (x, y) => { return x * y };
 console.log(z(12,12));