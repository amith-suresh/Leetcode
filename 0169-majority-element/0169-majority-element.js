/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let num = nums.length/2;
    let output = {};
    for(let i=0;i<nums.length;i++){
        output[nums[i]] = (output[nums[i]] || 0 ) +1;
         if(output[nums[i]]>num){
            return nums[i]
         }
    };
   
};