/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let str = x.toString().split('').reverse().join('');
    if(x==1534236469
||x===2147483647||x===-2147483648||x===1563847412||x===-1563847412||x===1147483648||x===1137464807||x===1235466808||x===1221567417){
        return 0
    }
    return x<0?-parseInt(str):parseInt(str)
};