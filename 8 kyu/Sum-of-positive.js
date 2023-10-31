// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20


//Loop through the array
// check if the number positive sum it / negative pass it 


// First Solution

// function positiveSum(arr) {
//     let sum = 0
//   for (let i = 0; i < arr.length; i++) {
//     if(arr[i] > 0) sum +=+ arr[i]
//   }
//   return sum
// }

// Second Solution

function positiveSum(arr) {

    return arr.filter((num)=> num > 0).reduce((acc,current) => acc + current,0)
}

console.log(positiveSum([1,-4,7,12])); //20
