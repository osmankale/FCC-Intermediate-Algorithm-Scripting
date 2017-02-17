function sumAll(arr) {
  var min = Math.min(arr[0],arr[1]);
  var max = Math.max(arr[0],arr[1]);
  var newArray = [];
  var total = 0;
  for (var i = min; i <= max; i++ ) {
      newArray.push(i);
  }
  
  for(var j = 0; j < newArray.length; j++)
{
    total = total + newArray[j];
}
  return total;
}

sumAll([1, 4]);