function diffArray(arr1, arr2) {
  var newArray = [];
  var arr3 = arr1.concat(arr2);
  var sorted = arr3.sort(); 
  
  function compare() {
    for (var i = 0; i < sorted.length; i++) {
      for (var j = 0; j < sorted.length; j++) {
        sorted[i] !== sorted[j];
        newArray.push(sorted[j]);
      }
    }
  }
  
 
   return newArray;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

