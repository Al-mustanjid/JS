function splitify(str) {
  // Only change code below this line
  let words = str.split(/[^A-Za-z0-9_]/);
  return words;
  // Only change code above this line
}

console.log(splitify("Hello World,I-am code"));