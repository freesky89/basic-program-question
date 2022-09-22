/**
 *  let object = {
 *    a: '',
 *    b: {notEmpty: 1, emptyValue1: null, emptyValue2: undefined},
 *    c: [{emptyValue3: ''}],
 *  }
 *  deleteEmptyProperty(object) => { b:  {notEmpty: 1}, c: [{}]},
 */
function deleteEmptyProperty(obj) {
    if (!obj) {
        return;
    }
    for(let i in obj) {
        if (obj.hasOwnProperty(i)) {
            if (!obj[i] && (typeof obj[i] !== 'object' || obj[i] === null)) {
                delete obj[i];
            } else {
                if (obj[i] && typeof obj[i] === 'object') {
                    deleteEmptyProperty(obj[i]);
                }
            }
        } 
    }
}

const obj = {
    a: '',
    b: {notEmpty: 1, emptyValue1: null, emptyValue2: undefined},
    c: [{emptyValue3: ''}],
}

deleteEmptyProperty(obj);

console.log('obj', obj);
