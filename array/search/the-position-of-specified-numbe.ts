// find the first and the last position of specified-numbern from a sorted array by binarary search
function findTheFirstAndTheLastPosition(arr = [], target: number) {
    function binarySearch(lower: boolean) {
        let left = 0; 
        let right = arr.length - 1; 
        let position = arr.length;
        while(left <= right) {
            let mid = Math.floor((left + right)/2);
            // [3, 5, 5, 7] => lower = true, the search value is 7 else is 3;
            // when lower = true; return the position of specified number; 
            // if lower = false; return the position of greater than specified number;
            if (arr[mid] > target || (lower && arr[mid] >= target)) {
                right = mid - 1;
                position = mid;
            } else {
                left = mid + 1;
            }
        }
        return position;
    }
    let result = [-1, -1];
    let first = binarySearch(true);
    //  minus 1, return the position of 
    let last = binarySearch(false) - 1;
    if (first <= last && last < arr.length && arr[first] === target && arr[last] === target) {
        result = [first, last];
    }
    return result;
}

