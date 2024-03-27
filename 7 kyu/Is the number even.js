//If the numbers is even return true. If it's odd, return false.




var isEven = function (n) { //if n is even return true, otherwise, return false
    //  return (n & 1) == 0
    return Number.isInteger(n/ 2)

     
  }

  console.log(isEven(10));



  /*
  The expression (n & 1) == 0 is a bitwise operation that checks whether an integer n is even or odd.
   It works by performing a bitwise AND operation between n and 1. The bitwise AND operation 
  compares the corresponding bits of two numbers and returns a 1 only if both bits are 1. Otherwise, it returns a 0.

In the case of n and 1, the only way
 to get a 1 as the result of the bitwise AND operation 
 is if the least significant bit (LSB) of n is 0. This is 
 because the LSB of 1 is 1, and the LSB of any even number is 0. 
 Therefore, the expression (n & 1) == 0 is equivalent to checking whether n is even.
  */