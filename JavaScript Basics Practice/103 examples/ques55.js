//JavaScript program to convert Objects to Strings
const person = {
    name:'Digbijaya',
    age:24,
    hobbies:"coding",
}

const result = JSON.stringify(person);

console.log(result);
console.log(typeof result);

//method 2
//convert object to string using string()
const result1 = String(person);
const result2 = String(person['name']);

console.log(result1);
console.log(result2);

console.log(typeof result1);