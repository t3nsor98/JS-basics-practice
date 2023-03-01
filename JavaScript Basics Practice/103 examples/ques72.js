//JavaScript Program to Empty an Array
function emptyArray(arr) {

    //reassign the array
    arr = [];
    return arr;
}

const array1 = [1,2,3,4,5,"yoyo"] ;

console.log(array1);
console.log(emptyArray(array1));

//using the splice() method
function cleanArray(arr){

    //lets use the splice() method
    arr.splice(0, arr.length);
    return arr;
}

console.log(cleanArray(array1));