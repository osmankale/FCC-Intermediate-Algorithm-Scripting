function translatePigLatin(str) {
  
  var firstCh = /^[aeiou]/i ;
  var vowel = /[aeiou]/i ;
  var newStr = "" ;
  var length = str.length;
  
  if(firstCh.test(str)) {
    newStr = str + "way";
    
     }
  
  else {
    var n = str.search(vowel) ;
    var last = str.substr(0, n);
    var rest = str.substr(n);
    newStr = rest + last + "ay";
  }
  
 return newStr;
}

translatePigLatin("consonant");