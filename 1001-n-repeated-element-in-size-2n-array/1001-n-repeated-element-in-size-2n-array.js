/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    for(let i=0;i<nums.length;i++){
        if(nums.indexOf(nums[i])!==i){
            return nums[i]
        }
    }
};