function findLongestWordLength(str) {
  let newSentence = str.split(" ");
  let longest = 0;
  for(let word in newSentence)
  {
    if(newSentence[word].length > longest)
    {
      longest = newSentence[word].length;
    }
  }
  return longest;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));