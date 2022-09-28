// compute the number of substring in parent string
// eg: s = "rabbbit", t = "rabbit", => 3
function computeTheNumberOfSubstringinParent(s: string, t: string) {
    let dp = Array(s.length + 1).fill(0).map(() => Array(t.length+1).fill(0));
    let m = s.length;
    let n = t.length;
    // dp[i][j] means the number of substring t[j, ...t.length-1] from substring s[i, ...s.length-1], d[...][n] = 1, beacause the empty string is always substring in any substring
    for(let i = 0; i <= m; i++) {
        dp[i][n] = 1;
    }
    // loop from the end, why?
    for(let i = m - 1; i >= 0; i--) {
        for(let j = n-1; j >= 0; j--) {
            if (s[i] === t[j]) {
                dp[i][j] = dp[i+1][j+1] + dp[i+1][j];
            } else {
                dp[i][j] = dp[i+1][j];
            }
        }
    }
    return dp[0][0];
}


