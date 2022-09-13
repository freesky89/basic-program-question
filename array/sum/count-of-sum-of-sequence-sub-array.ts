// find the total number of sum of sub sequence array equals target, notice: the element in the array is not both the positive number, maybe the negative number 
// eg: arr: [1,2,3] k: 3 => 2; [1,2,3,-1,4] k: 4 => 2
function subArraySum(arr: Array<number>, k: number) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for(let j = i; j < arr.length; j++) {
            sum += arr[j];
            if (sum === k) {
                count ++;
            }
        }
    }
    return count;
}
