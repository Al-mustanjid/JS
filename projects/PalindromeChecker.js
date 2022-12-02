/* 
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2. */

//using for loop
function palindrome1(str){
    const filteredStr = str.toLowerCase().replace(/[^a-z0-9]/gi, '');
    for(let i=0; i < filteredStr.length; i++)
    {
        return filteredStr[i] === filteredStr[filteredStr.length - 1 - i] ? true:false;
    }
}
console.log(palindrome1("A man, a plan, a canal. Panama"));

//using reduce
function palindrome(str) {
    const filteredStr = str.toLowerCase().replace(/[^a-z0-9]/gi, '');
    return filteredStr.split('').reduce((match, element, i) =>{
        if(!match)
        {
            return false;
        }

        return (element === filteredStr[filteredStr.length - 1 - i]);
    }, true)
  }
  
  console.log(palindrome("A man, a plan, a canal. Panama"));