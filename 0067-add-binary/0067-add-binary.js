/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let sum = BigInt("0b"+a)+ BigInt("0b"+b);
   let answer= sum.toString(2);
   return answer;
    
};