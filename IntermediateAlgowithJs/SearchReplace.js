/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

*/

function myReplace(str, before, after) {
    let matchWord = str.match(before);
    if(matchWord == matchWord.toString().toUpperCase())
    {
      console.log("Ok");
    }
    else{
      console.log("Not Ok")
    }
    
    let replaceWord = str.replace(matchWord, after)
    return replaceWord;
  }
  
console.log(myReplace("Let us go to the store", "store", "mall"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log(myReplace("His name is Tom", "Tom", "john"));