// get the property value from the object, otherwise return the default value;
// eg: data: { a: { c: 1 } } a.c.d => value a.c = 1 
function getSafetyValue(data, str, value) {
    if (!data) {
        return value
    };
    if (typeof data !== 'object') {
        return value;
    }
    if (typeof data === 'object' && data && Object.keys(data).length === 0) {
        return value;
    }
    if (!str) {
        return value;
    }
    let strArr = str.split('.');
    if (strArr.length === 1) {
        return data[strArr[0]] ?? value;
    }
    let pointer = str.indexOf('.');
    return getSafetyValue(data[strArr[0]], str.slice(pointer+1), value);
}

const obj2 = { a: { c: 1 } };

console.log(getSafetyValue(obj2, 'a.e', 100));
