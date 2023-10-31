// In this kata you will create a function that takes a list of non-negative
//  integers and strings and returns a new list with the strings filtered out.



//Can use Number.isInteger(x)
// Type of x
function filter_list(l) {
    return l.filter((x)=> Number.isInteger(x))
  } 


 console.log( filter_list([1,2,'aasf','1','123',123])); // =  [1,2,123]