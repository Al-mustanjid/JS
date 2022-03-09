function reverseString(str) {
  let strArray = str.split('');
  let astr='';
  for(let i = strArray.length-1; i >= 0; i--)
  {
    astr += strArray[i];
  }
  return astr;
}

reverseString("hello");