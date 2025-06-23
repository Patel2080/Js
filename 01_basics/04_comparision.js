console.log("2">1); //true
console.log("02" >1); //true;

console.log(null > 0);      //false
console.log(null == 0);     //false
console.log(null >= 0);     //true      (this  reason is that an equality check == and compparisions >,<,>=,<= work differently )

console.log(undefined == 0);     //false
console.log(undefined > 0);     //false
console.log(undefined < 0);     //false

//=== (use to check datatype and value both)