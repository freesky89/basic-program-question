// find the longest incremented but not need sequence sub array
// eg: [1, 3, 2, 4, 1] => 3 
function theLengthOfIncremenSubArray(arr = []) {
    // let defined array dp[i], it notes that position i's longest increment sub array
    let dp = Array(arr.length).fill(1);
    let result = 1;
    // handle the exception situation
    if (arr.length === 0) {
        result = 0;
    }
    // two nested loop by the opposite direction
    for (let c = 1; c < arr.length; c++) {
        for(let i = 0; i < c; i++) {
            if (arr[c] > arr[i]) {
                dp[c] = Math.max(dp[c], dp[i]+1)
            }
        }
        result = Math.max(result, dp[c])
    } 
    return result;
}
