// find the longest commonprefix in all strs
// eg: strs = ["flower","flow","flight"] => "fl"
function longestCommonPrefix(strs: string[]) {
    if (strs.length === 0 || !strs) return "";
    let str = strs[0];
    if (!str) {
        return "";
    } 
    for (let item of strs) {
        // find the prefix in all strs, the result in every str is longest str of common prefix
        while(!item.startsWith(str)) {
            str = str.substring(0, str.length - 1);
        }
    }
    return str;
}

