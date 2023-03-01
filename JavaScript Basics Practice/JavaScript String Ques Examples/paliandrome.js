//JavaScript Program to Check Whether a String is Palindrome or Not
//using a for loop to check palindrome
let word = "abcdeffedcba";
let len = word.length;

let checkPalindrome = function (name) {
    for (let i = 0; i < len / 2; i++) {
        if (name[i] !== name[len -1 -i]) {
            return console.log(`${name} is not a palindrome`);
        }
    }
    return console.log(`${name} is a palindrome`);
}

checkPalindrome(word);