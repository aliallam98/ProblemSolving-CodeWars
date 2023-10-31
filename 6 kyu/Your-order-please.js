// Your task is to sort a given string. Each word in the string will contain a single number.
// This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. 
//The words in the input String will only contain valid consecutive numbers.


//match() searches for a match in a string
// \d Matches any digit character. Equivalent to [0-9].

function order(words){
   return words.split(' ').sort((a, b) => a.match(/\d/) - b.match(/\d/)).join(' ')
  }


 console.log( order("is2 Thi1s T4est 3a")); // = "Thi1s is2 3a T4est"