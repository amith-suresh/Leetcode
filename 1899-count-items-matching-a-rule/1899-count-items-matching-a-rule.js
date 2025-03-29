/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    var l;
if(ruleKey=="type"){
    l=0;
};
if(ruleKey=="color"){
    l=1;
};
if(ruleKey=="name"){
    l=2;
};
var count=0;
for(let i = 0 ; i<items.length;i++){
    if(items[i][l]===ruleValue){
        count ++
    };
    
}
 return count
};