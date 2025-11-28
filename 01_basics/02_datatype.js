//number
//bigint
//strng=> ""
// null => standalone value
// boolean => true/false
// undefined => not initialize
// symbol => unique  /*The Symbol type is the set of all non-String values that may be used as the key of an Object property (6.1.7). Each possible Symbol value is unique and immutable.*/
   const id=Symbol('123');
   const anotherId = Symbol('123');
  
   console.log( id == anotherId); //false
// object

console.log(typeof undefined)  // output undefined
console.log(typeof  null)      // output object



// DataType summary
/* Types
1. Primitive -> (String,Number,Boolean,null,undefined,symbol,BigInt)
2. Reference(non primitive) -> (arrays,Objects, funtions)
*/

// JS is Dynamically Typed language bcs we do not define the variable type

"use Strict" // it tells engine that all code is treated as new code of js
// alert(2+3) this syntax is for browser not for node js