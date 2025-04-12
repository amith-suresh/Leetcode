/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const obj = {
        ")": "(",
        "}": "{",
        "]": "["
    };
    let arr = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
            arr.push(s[i]);
        } else if (s[i] === ")" || s[i] === "}" || s[i] === "]") {
            if (arr.length === 0 || arr[arr.length - 1] !== obj[s[i]]) {
                return false;
            }
            arr.pop();
        }
    }
    return arr.length === 0;
};
