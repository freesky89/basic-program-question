// merge-sort
function mergeSort(arr: Array<number>) {
    if (arr.length < 2) {
        return arr;
    }
    let mid = arr.length / 2;
    let sortedLeft = mergeSort(arr.slice(0, mid));
    let sortedRight = mergeSort(arr.slice(mid, arr.length));
    return merge(sortedLeft, sortedRight);
}

function merge(left: Array<number>, right: Array<number>) {
    let arr = Array(left.length + right.length);
    let i = 0;
    let j = 0;
    let k = 0;
    while(i < left.length && j < right.length) {
        arr[k++] = left[i] < right[j] ? left[i++] : right[j++];
    }
    while(i < left.length) {
        arr[k++] = left[i++];
    }
    while(j < right.length) {
        arr[k++] = right[j++];
    }
    return arr;
}
