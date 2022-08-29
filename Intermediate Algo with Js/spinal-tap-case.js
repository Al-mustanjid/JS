function spinalCase(str) {
  let regex = /\s+|_+/g;
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2")
  str = str.replace(regex, '-').toLowerCase();
  return str;
}

console.log(spinalCase('This Is Spinal Tap'));