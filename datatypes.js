"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let lname = "john";
console.log(lname);
//typescript has the ability to assign a data type based on the variable placed in
//thing is, its better practice to assign it ourselves in bigger projects
//STRING
let lname2;
lname2 = "Mohammad";
console.log(lname2);
lname = lname2.toUpperCase();
console.log(lname);
//NUMBER
let age;
age = 30;
console.log(age);
age = 25.5;
console.log(age);
let exampleString;
exampleString = "50";
age = parseInt(exampleString);
console.log(age);
//BOOLEAN
let isValid;
//console.log(isValid); //When this line is run, it returns undefined when run because the value isnt initialized
isValid = false;
console.log(isValid);
isValid = true;
console.log(isValid);
//ARRAYS
let myArray;
let myArray2; //same thing, just different syntax
myArray = ["ArrayString1", "ArrayString2", "ArrayString3"];
myArray2 = [1, 2, 3, 4, 5];
let myArray3 = myArray2.filter((numVal) => numVal > 2);
let myArray4 = myArray2.filter((numVal) => numVal >= 2);
console.log(myArray);
console.log(myArray2);
console.log(myArray3);
console.log(myArray4);
let FindInArray; //undefined because the find function if didnt fined the desired value will return undefined
FindInArray = myArray2.find((numberValue) => numberValue === 3); //function finds the position of the number searched
console.log(FindInArray);
let Arraysum;
Arraysum = myArray2.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(Arraysum);
let color = 2 /* Color.Blue */;
//TUPLE
//its like an array but with only 2 values
let tuple;
function SwapNumbers(number1, number2) {
    return [number2, number1];
}
tuple = SwapNumbers(10, 15);
console.log(tuple);
//ANY
let anyDatatypleExample;
anyDatatypleExample = "Hello World";
console.log(anyDatatypleExample);
anyDatatypleExample = 10;
console.log(anyDatatypleExample);
anyDatatypleExample = { name: "John", age: 30 };
console.log(anyDatatypleExample);
