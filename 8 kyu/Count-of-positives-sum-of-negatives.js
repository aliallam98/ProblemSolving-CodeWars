// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
//  0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

//Loop Through the array
// if number is Positive push to positiveArray Else Push to Negative and sum it
// If the input is an empty array or is null, return an empty array.


// First
// function countPositivesSumNegatives(input) {
//   let negativeNums = 0;
//   let positiveNums = 0;
//   if (input == null || input.length == 0) return [];
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] > 0) {
//       positiveNums++;
//     } else {
//       negativeNums += input[i];
//     }
//   }

//   return [positiveNums, negativeNums];
// }

// Second
function countPositivesSumNegatives(input) {
  let positiveNums = 0;
  let negativeNums = 0;
  if (input === null || !input.length) return [];
  input.forEach((num) => (num > 0 ? positiveNums++ : (negativeNums += num)));
  return [positiveNums, negativeNums];
}

console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
);
