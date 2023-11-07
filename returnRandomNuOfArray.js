


const getRandomNumberOfAnArray = (arr)=>{
    //Math.floor is important here to get just integer nums if get float nums will get an error
    //math.randow generate a num between 0-1 
    return Math.floor(Math.random() * arr.length)
}


console.log(getRandomNumberOfAnArray([1,2,3,4,5,6,7,8,9]));




