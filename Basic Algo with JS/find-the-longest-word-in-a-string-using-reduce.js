function findLongestWordLength(str) {
  let splitSentence = str.split(' ');
  return splitSentence.reduce((pre, cur)=>
    pre.length > cur.length ? pre:cur
  ).length;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));