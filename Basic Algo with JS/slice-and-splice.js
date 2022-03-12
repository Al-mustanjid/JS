function frankenSplice(arr1, arr2, n) {
  let copyArray = arr2.slice();
  copyArray.splice(n, 0, ...arr1);
  return copyArray;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);