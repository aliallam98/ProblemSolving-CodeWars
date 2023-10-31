


// First Solution

// function makeNegative(num) {
//     if(num > 0) return -num
//     return num
//   }


// First Solution (ShortHand)
// function makeNegative(num) {
//     return num > 0 ? -num : num 
//   }

// Second Solution
function makeNegative(num) {
    return Math.abs(num)
  }
  console.log(makeNegative(-5));

