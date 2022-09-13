// eg: [1,3,5,6] key: 10 => 2
// method1: the solution of sliding window, the complexity of time: o(n)
function greaterEqualThanTargetShortesSequenceSubArrayInPositiveNumberArray(arr: Array<number>, target: number) {
    let n = arr.length;
    let sum = 0;    
    let left = 0;
    let right = 0;
    let result = 10001;
    while(right < n) {
        sum += arr[right];
        while (sum >= target) {
            result = Math.min(result, right - left + 1);
            sum -= arr[left];
            left ++;
        }
        right ++;
    }
    return result === 10001 ? 0 : result;
}

// method 2: two nested loop, the complexity of time: o(n2)
function greaterEqualThanTargetShortesSequenceSubArrayInPositiveNumberArray2(arr: Array<number>, target: number) {
    let count = 0;
    let maxConstant = 100001;
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j< arr.length; j++) {
            sum += arr[j];
            if (sum >= target) {
                count = Math.min(maxConstant, j - i + 1);
                break;
            }
        }
    }
    return count === maxConstant ? 0 : count;
}

// test the method:
console.log(greaterEqualThanTargetShortesSequenceSubArrayInPositiveNumberArray([1,3,5,6], 10)) // => 2
console.log(greaterEqualThanTargetShortesSequenceSubArrayInPositiveNumberArray2([1,3,5,6], 10)) // => 2


