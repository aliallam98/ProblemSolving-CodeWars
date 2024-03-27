//When provided with a letter, return its position in the alphabet.

//Input :: "a"

//Ouput :: "Position of alphabet: 1"



const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
function position(letter){
    return `Position of alphabet: ${alphabet.indexOf(letter) +1}`
    }

    console.log(position("z"))