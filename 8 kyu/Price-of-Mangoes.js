

function mango(quantity, price){
    return Math.floor(price * (quantity - Math.floor( quantity / 3)))

}

console.log(mango(4,3));