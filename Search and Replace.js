function myReplace(str, before, after) {
  var upper = before.charAt(0).toUpperCase() + before.slice(1);
  var newUpper = after.charAt(0).toUpperCase() + after.slice(1);
  var newStr = str.replace(before, after);
  var brandNewStr = str.replace(before, newUpper);
  
  if (before == upper) {
    return brandNewStr;
  }
  
  else {
   return newStr;
  }
  
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");
