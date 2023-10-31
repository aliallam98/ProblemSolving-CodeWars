



// First
function between(a, b) {
    return Array.from(new Array(a+b), (_,i)=> ++i )
  }



// Second 
// function between(a, b) {
//     const arr = []
//     if(a < b) {
//         for (let i = a; i <= b; i++) {
//             arr.push(i)
//         }
//     }
//     return arr
//   }
  console.log((between(1,5)));

