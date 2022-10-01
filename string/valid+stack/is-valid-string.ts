// give a string, please judege the string is or is not a valid string
// eg: ([]) => true ([) => false ([{}])() => true
function isValid(str: string) {
    let map = {
        '(': ')',
        '[': ']',
        '{': '}',
    }
    const stack: any = [];
    for(let i = 0; i < str.length; i++) {
        let item = str[i];
        if (map[item]) {
            stack.push(str[i]);
        } else {
            if (map[stack.slice(-1)] === item) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return !stack.length;
}