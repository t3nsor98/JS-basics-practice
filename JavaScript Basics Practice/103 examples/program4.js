//area of the triangle when bas and height is known
const baseValue = 13;
const heightValue = 19;
//area of the triangle
const areaOfTheTriangle = 1/2*(baseValue*heightValue);
console.log(`The area of the triangle with base ${baseValue} and height ${heightValue} is ${areaOfTheTriangle}`);

//area of the triangle using Heron's Formula
const side1= 3;
const side2= 4;
const side3= 5;

//semi perimeter of the triangle
const s=(side1+side2+side3)/2;

//area of the triangle
area = Math.sqrt(s*(s-side1)*(s-side2)*(s-side3));
console.log(`The area of the triangle having sides ${side1}, ${side2}, ${side3} is ${area}`);

