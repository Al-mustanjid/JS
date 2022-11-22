/*
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.
*/

function translatePigLatin(str) {
  //set regular expression pattern for getting consonants only
  let constantRegex = /^[^aeiou]+/;
  //find out consosnants from given consonants
  let strConsonants = str.match(constantRegex);
  //now applying pig latin formula if consonant found and not null
  if(strConsonants !== null)
  {
    //deleting and shifting consonants to the end 
    str = str.replace(constantRegex, "").concat(strConsonants).concat("ay");
    return str;
  }
  else
  {
    return str.concat("way");
  }
  }
  
  console.log(translatePigLatin("california"));