function addition(Number1: number, Number2: number): number {
  return Number1 + Number2;
}
console.log(addition(2,3));

const subtraction = (Number1:number, Number2:number): number => Number1-Number2;
console.log(subtraction(5,10));

const multiplication = function(Number1:number,Number2:number){
  return Number1*Number2;
}
console.log(multiplication(5,5));

//OPTIONAL PARAMETERS
function addition2(Number1: number, Number2: number, Number3?: number): number {
  return Number3? Number1+Number2+Number3: Number1+Number2;
}
console.log(addition2(1,2,3));
console.log(addition2(1,2));

//REQUIRED PARAMETER
const subtraction2 = (Number1:number, Number2:number, Number3 = 0): number => Number1-Number2-Number3;
console.log(subtraction2(5,10));
console.log(subtraction2(5,10,5));

//REST PARAMETER
function addition3(number1:number,number2:number,...number3:number[]): number {
  return number1+number2+number3.reduce((a,b)=>a+b,0);
}
let myArray = [1,2,3,4,5,6,7,8,9,10];
console.log(addition3(1,2,...myArray));
console.log(addition3(1,2,...[1,2,3,4,5]));
console.log(addition3(1,2,5,6,7,8,9,10));


//GENERIC FUNCTION
function getItems<DataType>(items: DataType[]): DataType[] {
  return new Array<DataType>().concat(items);
}
let concatNumbers = getItems<number>([1,2,3,4,5]);
let concatStrings = getItems<string>(["a","b","c","d","e"]);
console.log(concatNumbers);
console.log(concatStrings);