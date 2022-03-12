function mutation(arr) {
  let searchKey = arr[1].toLowerCase();
  let text = arr[0].toLowerCase();
  for(let i =0; i < searchKey.length; i++)
  {
    if(text.indexOf(searchKey[i]) < 0)
    {
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);