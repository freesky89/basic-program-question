// find the largest no-repeat substring from the target string
// eg: "abcabcbb" => abc 3  "pwwkew" => wke/kew 3
function theLargestNumberOfNoRepeatSubstring(str: string) {
    const set = new Set();
    let index = -1;
    let largestNumber = 0;
    for (let i = 0;  i< str.length; i++) {
        // delete prev char from the second loop
        if (i !== 0) {
            set.delete(str[i-1]);
        }
        // judge the string is or not repeat by the has method of set
        // if has the same char, exit this loop
        while(index + 1 < str.length && !set.has(str[index + 1])) {
            set.add(str[index+1]);
            ++ index;
        }
        // compute the largest value by Math.max()
        largestNumber = Math.max(largestNumber, index-i+1);
    }
    return largestNumber;
}