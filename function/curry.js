// implement the first curry function 
// sum(1,2,3).valueOf() => 6 or sum(1)(2,3).valueOf() => 6

function sum1(...args) {
    const fn = function (...args2) {
        return sum(...args, ...args2);
    }
    fn.valueOf = function() {
        return args.reduce((prev, item) => {
            return prev + item;
        }, 0)
    }
    return fn;
}

// implement the second curry function
// sum1(1,2,3) => 6
// sum1(1)(2,3) => 6

function curry(fn) {
    let length = fn.length;
    return function f(...args) {
        if (args.length >= length) {
            return fn.apply(this, args);
        } else {
            return function(...args2) {
                return f.apply(this, args.concat(args2));
            }
        }
    }
}

// notice: the parameter needs to show implicitly, not the function sum(...args), because this method cannot compute the parameter length
function sum(a, b, c, d) {
    return a + b + c + d;
}

const curriedSum = curry(sum); 

console.log(curriedSum(1,2,3) === curriedSum(1)(2)(3));


