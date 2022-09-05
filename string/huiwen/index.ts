// is the str is huiwen
function isPalindrome(str: string) {
    // loop the str, judge the str and the half str is equal, if all enqual, return true, else return false
    for (let i = 0; i < Math.floor(str.length/2); i++) {
        if (str[i] !== str[str.length-i-1]) {
            return false
        }
    }
    return true;
}

// find the largest huiwen string
function theLargestPalindrome(str: string) {
    // initial targetPailindrome
    let targetPalindrome = '';
    if (str.length === 0 || str.length === 1) {
        return str;
    }
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            // slice the string
            let ss = str.slice(i, j+1);
            // is the ss is huiwen, if yes and length > initial, then update it
            if(isPalindrome(ss) && ss.length > targetPalindrome.length) {
                targetPalindrome = ss;
            }
        }    
    }
    return targetPalindrome.length === 0 ? str[0] : targetPalindrome;
}

console.log(theLargestPalindrome('')); // => ""
console.log(theLargestPalindrome('abbba')); // => "abbba"
console.log(theLargestPalindrome('abbbbc')); // => bbbb
console.log(theLargestPalindrome('cbbd')); // => bb
console.log(theLargestPalindrome('ac')); // => a

