let  score='31'
console.log(typeof(score));           //string

let valueInNumber=Number(score)
console.log(typeof valueInNumber);      //number

let score2="33sbs"
let valueOfScore2=Number(score2);
console.log(typeof valueOfScore2)     // output is number but --> it should not be converted in number
console.log(valueOfScore2)           //NaN


//  true->1 ; false-> 0
//  null->0
//  undefined-> NaN

let isLoggedIn="suraj"

let booleanIsLoggedIn=Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
// 1->true ; 0-> false;
// ""-> false  ; "suraj"-> true 

let someNumber =22

let stringNumber =String(someNumber);
console.log(stringNumber);                // 33
console.log(typeof(stringNumber));     //string


//-----------------------operation--------------------

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2%2);
// console.log(2**2);

console.log("1"+2); //output 12 (first string than num so overall treated as string)
console.log("1"+2+2); //outpur 122 (all treated as string)
console.log(1+"2")   //output 12
console.log(1+2+"2") //32 (first num is come so addition is perform)



console.log(+true);   //1
console.log(+"");    // 0



let num1,num2,num3;
num1 = num2 = num3 = 4 +4 ;
console.table([num1,num2,num3]);
 // go and study about increment operator