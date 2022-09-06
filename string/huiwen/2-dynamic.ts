/**
 * @param {string} str
 * @return {string}
 */
 const longestPalindrome = function(str: string) {
    // show a 2-dimension table by 2d array to list all situations
    const dp = Array(str.length).fill([]).map(() => Array(str.length).fill(null));
    let maxLength = 1;
    let start = 0;
    /**
     * if str.length < 2, return str 
     * if str.length === 2, if str[0] === str[1] return str else return str[0]
     * if str.length > 2, 
     */ 
    if (str.length === 1) {
        return str;
    }
    
    for(let i = 0; i < str.length; i++) {
        dp[i][i] = 1;
    }

    for (let c = 2; c <= str.length; c++) {
        for (let i = 0; i < str.length; i++) {
            // j - i + 1 = c; => j= c + i - 1;
            let j = c + i - 1;
            if (j >= str.length) {
                break;
            }
            // the key: state formula
            if (str.charAt(i) !== str.charAt(j)) {  
                dp[i][j] = 0;
            } else {
                if (j - i < 3) {
                    dp[i][j] = 1;
                } else {
                    dp[i][j] = dp[i+1][j-1];
                }
            }
            // find the larget length from the dp[i][j] === 1
            if (dp[i][j] && j - i + 1 > maxLength) {
                maxLength = j - i + 1;
                start = i;
            }
        }
    }
    return str.substring(start, start + maxLength);
};

console.log(longestPalindrome('aba')) // aba 
