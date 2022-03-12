function titleCase(str) {
   let splitWord = str.toLowerCase().split(' ');
  for(let i=0; i < splitWord.length; i++)
  {
    splitWord[i] = splitWord[i].charAt(0).toUpperCase() + splitWord[i].substr(1);
  }
  return splitWord.join(' ');
}

titleCase("I'm a little tea pot");