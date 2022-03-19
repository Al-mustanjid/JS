const squareList = arr => {
  // Only change code below this line
  return arr.filter(arr => Number.isInteger(arr) && arr > 0).map(arr =>
    arr * arr)
  //return arr;
  // Only change code above this line
};

const squaredIntegers = squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]);
console.log(squaredIntegers);