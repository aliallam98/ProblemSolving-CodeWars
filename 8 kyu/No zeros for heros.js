// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105

function noBoringZeros(n) {
    let zeros = false
    return Array.from(String(n)).map((ele) ele == 0 )
  }

  console.log(noBoringZeros(1045000));