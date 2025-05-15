/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let arr =[...nums1,...nums2].sort((a,b)=>a-b);
    let l=arr.length
if(l%2!==0){
    return arr[Math.floor(l/2)]
}
return (arr[l/2]+arr[l/2-1])/2
};

// if(arr.length%2!==0){
//     return arr[Math.floor(arr.length/2)]
// }