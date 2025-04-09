/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function(nums) {
    let n= nums.length
    let sum =0;
    let count=0;
    for(let i=0;i<n;i++){
        sum+=nums[i]
        if(sum===0){
        count ++;
    }
    }
    return count;
};