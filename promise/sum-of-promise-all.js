/* apply promise.all to compute the sum in the shortest time */
// mock the server add function
function asyncAdd(a, b, cb) {
    setTimeout(() => {
        cb(null, a + b);
    }, Math.floor(Math.random()*1000));
}

// implement two parameter's add with the server function asyncAdd  
function asyncSum(...args) {
    if (args.length <= 1) {
        return Promise.resolve(args[0]);
    }
    let args1 = args[0]
    let args2 = args[1];
    return new Promise((resolve, reject) => {
        asyncAdd(args1, args2, (err, result) => {
            resolve(result); 
        });
    });
}

// implement multiple parameter(greater than two), notice: when parameter number is odd, we should add the last parameter to asyncSum
async function sum(...args) {
    if(args.length <= 1) return Promise.resolve(args[0]);
    let list = [];
    for(let i = 0; 2 * i + 1 < args.length; i++) {
        list.push(asyncSum(args[2 * i], args[2 * i + 1]));
    }
    if (args.length % 2) {
        list.push(asyncSum(args[args.length - 1]))
    }
    return Promise.all(list).then((res) => {
        return sum(...res);
    });
}

(async function test() {
    console.log('async add: ', await sum(1,2,3)); //=> 6
    console.log('async add: ', await sum(1,2,3,4)); //=> 10
    console.log('async add: ', await sum(1)); //=> 1
    console.log('async add: ', await sum()); //=> undefined
})();



















