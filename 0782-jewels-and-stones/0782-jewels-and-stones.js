/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    var arr=[]
    var starr=stones.split('')
    for(let i=0;i<jewels.length;i++){
  var temp=starr.filter((val)=>val==jewels[i])
  arr.push(temp.join(''))
    }

  return arr.join('').length
};