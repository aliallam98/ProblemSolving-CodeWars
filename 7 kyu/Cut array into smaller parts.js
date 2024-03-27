
function makeParts(arr, chunkSize) {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
      if(i % chunkSize == 0) newArr.push(arr.slice(i,i+chunkSize)) 
    }
  return newArr
  }
  
  console.log(makeParts([1,2,3,4,5], 1))
  