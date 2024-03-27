//Write a function which calculates the average of the numbers in a given list.

//Note: Empty arrays should return 0.



function findAverage(array) {
    return array.length ? array.reduce((acc,current)=> current + acc,0) / array.length : 0
  }

  console.log(findAverage([1,2,3]));