// find the length of longest sub-string from two string
// eg: abe/ace => 2 abc/def => 0
function findTheLargestLengthOfTwoSubstring(text1: string, text2: string) {
    // let us define the two-dimension array dp[i][j], it means the largest length of substring between text1[0, i-1](i-1 means the last str in the text1) and text2[0, j-1](j-1 means the last str in the text2)
    let dp = Array(text1.length+1).fill(0).map(() => Array(text2.length+1).fill(0));
    // i must greater than zero, because we should do the operation: i-1
    for(let i = 1; i <= text1.length; i++) {
        for(let j = 1; j <= text2.length; j++) {
            if (text1[i-1] === text2[j-1]) {
                dp[i][j] = dp[i-1][j-1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i][j-1], dp[i-1][j]);
            }
        }
    }
    // dp[text1.length][text2.length] means the largest longth of substring between the text1[0, text1.length-1] and text2[0, text2.length-1]
    return dp[text1.length][text2.length];
}
