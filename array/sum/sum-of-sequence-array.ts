// method 1: compute the position of the sum of two number, O(n)
function positionOfTwoNumberSumEqualTarget(arr=[], target: number) {
    // store the number with map => map.set(value, index)
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (map.get(target - arr[i]) !== undefined) {
            return [i, map.get(target - arr[i])];
        }
        map.set(arr[i], i);
    }
    return [];
}

// method 2: compute the position of the sum of two number, O(n2)
function positionOfTwoNumberSumEqualTarget2(arr = [], target: number) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] + arr[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}