//You are given a string of words and numbers. Extract the expression including:

// operator: either addition ("gains") or subtraction ("loses")
// two numbers that we are operating on
//Return the result of the calculation.

//Notes:

//"loses" and "gains" are the only two words describing operators
//No fruit debts nor bitten apples = The numbers are integers and no negatives

// function calculate(string) {
//   const newString = string.split(" ").sort().slice(0, 2);
//   for (let i = 0; i < newString.length; i++) {
//     return  Math.abs(string.includes('loses') ? +(+newString[i] - +newString[i+1]) : +(+newString[i] + +newString[i+1]))
     
//   }
// }

// console.log(calculate("Panda has 60 apples and loses 10"));
