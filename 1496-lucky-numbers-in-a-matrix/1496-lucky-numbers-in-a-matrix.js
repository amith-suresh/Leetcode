/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
 const m = matrix.length;
    const n = matrix[0].length;
    const rowMin = new Array(m).fill(Number.MAX_SAFE_INTEGER);
    const colMax = new Array(n).fill(Number.MIN_SAFE_INTEGER);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            rowMin[i] = Math.min(rowMin[i], matrix[i][j]);
        }
    }
    for (let j = 0; j < n; j++) {
        for (let i = 0; i < m; i++) {
            colMax[j] = Math.max(colMax[j], matrix[i][j]);
        }
    }
    const luckyNumbers = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === rowMin[i] && matrix[i][j] === colMax[j]) {
                luckyNumbers.push(matrix[i][j]);
            }
        }
    }
    
    return luckyNumbers;
};

    