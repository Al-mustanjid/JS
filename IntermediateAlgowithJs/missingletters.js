/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined. */
function fearNotLetter(str) {
    for(let i=0; i < str.length; i++)
    {
        const charcode = str.charCodeAt(i);

        if (str.charCodeAt(0) + i !== charcode)
        {
            return String.fromCharCode(charcode - 1);
        }
    }
    return undefined;
  }
  
  console.log(fearNotLetter("abce"));