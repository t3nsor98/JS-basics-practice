// program to check if a string starts with another string

const string = 'hello world';

const toCheckString = 'he';

if (string.startsWith(toCheckString)) {
    console.warn('The string starts with "he".');
}
else {
    console.warn(`The string does not starts with "he".`);
}