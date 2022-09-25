// implement the bubble algorithum
// eg: [4,5,5,2,8,9] => [2,4,5,5,8,9]
// time complexity: o(n2)
function bubble(arr: Array<number>) {
    for( let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

