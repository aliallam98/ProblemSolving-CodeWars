//Given a string of digits, you should replace any digit below 5 with '0'
// and any digit 5 and above with '1'. Return the resulting string.

//Note: input will never be an empty string

function fakeBin(x) {
//   let res = "";
//   for (let i = 0; i < x.length; i++) {
//     res += x[i] < 5 ? 0 : 1;
//   }
//   return res;

return x.split('').map((e)=> e < 5 ? 0 : 1).join('')


}

console.log(fakeBin("45385593107843568"));
