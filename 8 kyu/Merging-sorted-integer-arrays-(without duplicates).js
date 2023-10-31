//Write a function that merges two sorted arrays into a single one.
//The arrays only contain integers.
// Also, the final outcome must be sorted and not have any duplicate.



// Solution

function mergeArrays(a, b) {
  return [...new Set([...a, ...b])].sort((a, b) => a - b);

}

console.log(mergeArrays([2, 3, 3, 5], [2, 4, 6]));
