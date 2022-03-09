function findLongestWordLength(str) {
  let wordsinstring = str.split(" ");
  let longest = 0;
  for(let i=0; i < wordsinstring.length; i++)
  {
    if(longest < wordsinstring[i].length)
    {
      longest = wordsinstring[i].length;
    }
  }
  return longest;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");