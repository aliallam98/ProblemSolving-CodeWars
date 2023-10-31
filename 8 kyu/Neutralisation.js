//Given two strings comprised of + and -,
// return a new string which shows how the two strings interact in the following way:

//When positives and positives interact, they remain positive.
//When negatives and negatives interact, they remain negative.
//But when negatives and positives interact, they become neutral, and are shown as the number 0.



//Loop through z array
// check it the current ele of the first arr equal to the against array element
// if true return  ele else return 0


// can access string like array by index of [i]

function neutralise(s1, s2) {
  // Here be dragons!

  // let res = ''
  // for (let i = 0; i < s1.length; i++) {
  //     res += s1[i] == s2[i] ? s1[i] : "0"
  // }

  // return res

  let newArr = [];
  for (let i = 0; i < s1.length; i++) {
    s1.split("")[i] !== s2.split("")[i]
      ? newArr.push(0)
      : newArr.push(s1.split("")[i]);
  }
  return newArr.join("");
}

console.log(neutralise("--++--", "++--++"));
