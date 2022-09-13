// eg: [-2,1,-3,4,-1,2,1,-5,4] => 6 ([4, -1, 2, 1])
function findTheLargestSumOfSequenceSubArray(arr: Array<number>) {
    let sum = 0;
    let max = arr[0];
    for (let item of arr) {
        sum = Math.max(sum + item, item);
        max = Math.max(sum, max);
    }
    return max;
}

console.log(findTheLargestSumOfSequenceSubArray([-2,1,-3,4,-1,2,1,-5,4]));