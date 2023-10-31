// Loop Through Z Array
// Check If the Current Number Has An Integer squareRoot or Not
// IF true Take The Root Else Square The Number
// Return New Array


//First

// function squareOrSquareRoot(array) {
//     return array.map((num)=> Number.isInteger(Math.sqrt(num)) ? Math.sqrt(num)  : num * num
//     )
//   }

//Second

//   function squareOrSquareRoot(array) {
//     let newArray = [];
//     for (let i = 0; i < array.length; i++) {
//         if(Number.isInteger(Math.sqrt(array[i]))){
//             newArray.push(Math.sqrt(array[i]))
//         }else
//         newArray.push(array[i] * array[i])
//     } 
//     return newArray
//   }

//   function squareOrSquareRoot(array) {
//     let newArray = [];
//     for (let i = 0; i < array.length; i++) {
//         Number.isInteger(Math.sqrt(array[i]))  ? newArray.push(Math.sqrt(array[i])) : newArray.push(array[i] * array[i])
//   }
//   return newArray
// }


// Third 


function squareOrSquareRoot(array) {
    return array.map((x)=> Math.sqrt(x) %1 == 0 ? Math.sqrt(x)  : (x*x))
}

  
  console.log(squareOrSquareRoot([4,3,9,7,2,1]));


