function sumAll(arr) {
  var min = Math.min(arr);
  var max = Math.max(arr);
  var newArray = [];
  for (var i = min; i < max; i++ ) {
      newArray.push(i);
  }
  
  return newArray;
}

sumAll([1, 4]);