//JavaScript Program to Swap Two Variables

//Example 1: Using a Temporary Variable

let a = 5;
let b = 19;
console.log(a,b);

//create a temporary Variable
let temp;

//swap variables
temp = a;
a=b;
b=temp;
console.log(a,b);

//Destructuring assignment
let m = 12;
let n = 29;

console.log(m,n);
//swapping using destructuring assignment

[m,n] = [n,m];
console.log(m,n);

//