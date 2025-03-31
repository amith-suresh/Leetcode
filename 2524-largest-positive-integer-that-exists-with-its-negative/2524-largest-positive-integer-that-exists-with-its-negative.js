/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
   var neg = nums.filter((val)=>val<0)
   var pos= nums.filter((val)=>val>0);
   var arr=[]
  for(let i =0 ;i<pos.length;i++){
    if(neg.includes(-pos[i])){
     arr.push(pos[i])
    }
  }
 if(arr.length===0){
    return -1;
 }
 return Math.max(...arr)
};