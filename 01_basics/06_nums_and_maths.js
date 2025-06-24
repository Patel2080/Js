const score=400
console.log(score);

const balance =new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber=62.1234
console.log(otherNumber.toPrecision(3));// isko mdn se pdhna hai
console.log(otherNumber.toPrecision(6));

const hundereds=1000000
console.log(hundereds.toLocaleString('en-IN'));
console.log(hundereds.toLocaleString());


// generation of Random number
const min = 10 ;
const max = 20;
console.log(Math.floor(Math.random()*(max-min+1))+min)  // generate number between min to max


console.log(Math.floor(Math.random()*10)+1);