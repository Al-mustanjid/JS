/* 
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5. */

function sumFibs(num) {
    let pre = 0, cur = 1, sum = 0;
    while(cur <= num)
    {
        if(cur%2 !== 0)
        {
            sum += cur;
        }
        cur += pre;
        pre = cur  - pre;
    }
    return sum;
  }
  
 console.log(sumFibs(10));