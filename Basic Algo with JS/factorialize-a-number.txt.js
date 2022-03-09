function factorialize(num) {
  if(num === 0)
  {
    return 1;
  }
  
  let sum = 1;
  while(num != 1)
  {
    sum *= num;
    num--;
  }
  return sum;
}

console.log(factorialize(5));
console.log(factorialize(0));
console.log(factorialize(10));