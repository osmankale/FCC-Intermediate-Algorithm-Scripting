function diffArray(arr1, arr2) {
  var newArr = [];
  
  var x=0;
  for (var i = 0; i < arr1.length; i++ ) {
      for (var j = 0; j < arr2.length; j++) {
          if (arr1[i] == arr2[j]) {x= 1;break;}
        }
        
        newArr.push(arr1[i]);
      }
  
   
   
  return x;
}

diffArray([1, 2, 3, 4, 5], [1, 2, 3, 5]);