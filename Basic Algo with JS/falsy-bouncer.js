function bouncer(arr) {
  return arr.filter(value=>!!value);
}

bouncer([7, "ate", "", false, 9]);