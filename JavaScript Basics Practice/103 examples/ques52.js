//JavaScript Program to Generate Random String

// declare all characters
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

//lets create a function to generate a random string

function generateString(n) {
    let char_length = characters.length;
    let new_string = "";
    for (let i = 0; i < n; i++) {
        new_string += characters.charAt( Math.floor(Math.random()*char_length));
    }
    return new_string;
}

console.log(generateString(10));

// program to generate random strings

const result = Math.random().toString(36).substring(1,9);
console.log(result);