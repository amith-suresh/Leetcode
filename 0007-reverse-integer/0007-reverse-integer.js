/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let str = x.toString().split('').reverse().join('');
    if(parseInt(str)>2147483647 ){
        return 0
    }
    return x<0?-parseInt(str):parseInt(str)
};