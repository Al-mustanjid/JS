function reverseString(str) {
  let splitStr = str.split('');
  return splitStr.reduce((rev, char)=>char+rev, '')
}

console.log(reverseString("hello"));