//JavaScript Program to Loop Through an Object
//first we will do it using for loop
 const student= {
    name:"Digbijaya",
    age: 24,
    hobbies:['reading','games','coding'],
 };

 //using for...in

for (let key in student) {
    let value;

    //lets get the value
    value = student[key];
    console.log(key + " - " + value);
}
//Loop through object using object entries and for...of
for(let [key, value] of Object.entries(student)) {
    console.log(key + "=" + value );
}