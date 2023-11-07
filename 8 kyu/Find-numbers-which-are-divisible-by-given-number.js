


function divisibleBy(numbers, divisor){
//     const newArr = []
//     for (let i = 0; i < numbers.length; i++) {
//         if(numbers[i] % divisor == 0) newArr.push(numbers[i])
//     }
// return newArr

return numbers.filter((nu) => nu % divisor == 0 ) 

}


console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));