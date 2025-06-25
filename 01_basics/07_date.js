
const date = new Date();

console.log("toString():", date.toString()); 
console.log("toDateString():", date.toDateString()); 
console.log("toTimeString():", date.toTimeString()); 
console.log("Symbol.toPrimitive (string):", date[Symbol.toPrimitive]("string")); 

console.log("toISOString():", date.toISOString()); 
console.log("toJSON():", date.toJSON()); 
console.log("toUTCString():", date.toUTCString()); 

console.log("toLocaleString():", date.toLocaleString()); 
console.log("toLocaleDateString():", date.toLocaleDateString()); 
console.log("toLocaleTimeString():", date.toLocaleTimeString());
const istTime = date.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
console.log("Indian Time:", istTime);

let myTimeStamp=Date.now()
console.log(myTimeStamp);

console.log(Math.floor(Date.now()/1000));  // print time in second
