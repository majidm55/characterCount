
function countLetters(string) {
  var letter = '';
  var object = {};
  for(i = 0; i < string.length; i++ ){
    letter = string.charAt(i);{
    if(object[letter] === undefined){
      object[letter] = 1;
    }
    else {
      object[letter] += 1
    }
  }
 }
 return object;
}
    console.log(countLetters('letter'));
    console.log(countLetters('majid'));

