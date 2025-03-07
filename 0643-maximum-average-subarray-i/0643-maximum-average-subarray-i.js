/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    console.log(nums);
    console.log(k);
    let maxSum=0;
    let currentSum=0;
    for(let i = 0; i<k;i++){
        currentSum+=nums[i]
    }
    maxSum=currentSum;
    for (let i = k; i < nums.length; i++) {
  currentSum = currentSum - nums[i - k] + nums[i];
  maxSum = Math.max(maxSum, currentSum);
}
return maxSum/k;
};