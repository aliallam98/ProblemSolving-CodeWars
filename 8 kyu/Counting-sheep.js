//Consider an array/list of sheep where some sheep may be missing from their place.
// We need a function that counts the number of sheep present in the array (true means present).


function countSheeps(sheep) {
    let count = 0
      sheep.filter((ele)=> ele ? count++ : '')
      return count
    // return sheep.filter(Boolean).length //Boolean means true  !Boolean means false
  }

  console.log(countSheeps([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]));