// give a nested object and a target value, please find the full path when the target value exist in the nested object
const obj = {
    text: 'beijing',
    children: [
        {text: 'a1', children: [{ text: 'a3', children: [{ text: 'a4' }]}]},
        {text: 'a2'}
    ]
};

function getTheTargetValue(obj, targetValue) {
    if (!targetValue) {
        if (!obj.children) {
            return [obj.text];
        }
    }
    if (obj.text.indexOf(targetValue) !== -1) {
        if (!obj.children) {
            return [obj.text];
        } else {
            return obj.children.map(item => {
                return `${obj.text}-${getTheTargetValue(item)[0]}`
            });
        }
    } else {
        let arr = [];
        if (!obj.children) {
            return [];
        }
        for(let item of obj.children) {
            let res = getTheTargetValue(item, targetValue);
            res[0] && arr.push(`${obj.text}-${res[0]}`)
        }
        return arr;
    }
}

console.log(getTheTargetValue(obj, 'beijing'));
console.log(getTheTargetValue(obj, 'a4'));