
/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {

 
  var arr=s.split('')
  var res=arr.filter((val,ind)=>arr.indexOf(val)!=ind)
  console.log(res)
  return res[0]
  
};