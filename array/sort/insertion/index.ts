// direct insert sort
// eg: const arr = [1,3,4,2] insertionSort(arr) => arr = [1,2,3,4]
function insertionSort(arr: Array<number>) {
    for(let i = 1; i < arr.length; i++) {
        let j = i - 1;
        let temp = arr[i];
        while(j > 0 && arr[j] > temp) {
            // put the value into the next index
            arr[j+1] = arr[j];
            j--
        }
        arr[j+1] = temp;
    }
}





