/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
const arr=strs.map((val)=>val.split('').sort().join(''))
const nEwarr=[...new Set(arr)]
let resu=[]
for(let i=0;i<nEwarr.length;i++){
    let temp=[]
    for(let j=0;j<arr.length;j++){
        if(arr[j]===nEwarr[i]){
            temp.push(strs[j])
        }
    }resu.push(temp.sort())
   
} return resu
};