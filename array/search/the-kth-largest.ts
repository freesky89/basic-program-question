/**
 * eg: [5,3,6,3,5,1] => [1,3,3,5,5,6] => 2th largest is 5
/* first let us translate the question: sort the array, find the index: arr.length - k element in the arr
/* if the target index above the base index, then search the target in the [index+1, length-1] else in the [0, index-1]
 * @param arr 
 * @param k 
 * @returns 
 */
function theKthLargestNumber(arr: Array<number>, k: number) {
    let left = 0;
    let right = arr.length-1;
    let target = arr.length - k;
    while(true) {
        let pivotIndex = partition(arr, left, right);
        if (pivotIndex === target) {
            return arr[pivotIndex];
        }
        if (pivotIndex > target) {
            right = pivotIndex - 1;
        } else {
            left = pivotIndex + 1;
        }
    }
}

// find the base index of quick sort, the base is the first element in the arr
function partition(arr: Array<number> , left=0, right=arr.length - 1) {
    let key = arr[left];
    while (left < right) {
        while(left < right && arr[right] > key) {
            --right;
        }
        if (left < right) {
            arr[left] = arr[right];
            ++left; 
        }
        while(left < right && arr[left] < key) {
            ++left;
        }
        if (left < right) {
            arr[right] = arr[left];
            --right;
        }
    }
    arr[left] = key;
    return left;
}

// test
console.log(theKthLargestNumber([5,3,6,3,5,1], 1));


