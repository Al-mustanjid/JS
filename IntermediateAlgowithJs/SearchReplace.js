/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

*/

function myReplace(str, before, after) {
  //let matchWord = str.match(before).toString();
  //console.log(matchWord);
  if(after[0] === after[0].toUpperCase())
  {
    after = after = after.charAt(0).toLowerCase() + after.slice(1);
  }
  else if (before[0] === before[0].toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  
  let replaceSentence = str.replace(before, after)
  return replaceSentence;
}

// console.log(myReplace("Let us go to the store", "store", "mall"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log(myReplace("His name is Tom", "Tom", "john"));
//console.log(myReplace("I think we should look up there", "up", "Down"));