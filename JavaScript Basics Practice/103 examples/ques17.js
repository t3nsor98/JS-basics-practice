//JavaScript Program to Print the Fibonacci Sequence
//number of terms in the fibonacci series
//this is done using for loop
const num = 20;
let n1 = 0 , n2 = 1, nextTerm;

for(let i = 1; i <= num; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}

//creating fibonacci series using recursion
