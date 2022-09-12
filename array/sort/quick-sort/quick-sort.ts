// time complexity: O(nlogn)
class QuickSort {
    private array: Array<number>;
    constructor(array: Array<number>) {
        this.array = array;
    }
    public sort(): void {
        this.quickSort(this.array, 0, this.array.length - 1);
    }
    public print(): void {
        for (let i = 0; i < this.array.length; i++) {
            console.log(this.array[i]);
        }
    }
   
    /**
     * @param array
     * @param begin
     * @param end
     */
    private quickSort(array: Array<number>, begin = 0, end = 0): void {
        if (begin < end) {
            let key = array[begin];
            let i = begin;
            let j = end;
            while (i < j) {
                while (i < j && array[j] > key) {
                    j--;
                }
                if (i < j) {
                    array[i] = array[j];
                    i++;
                }
                while (i < j && array[i] < key) {
                    i++;
                }
                if (i < j) {
                    array[j] = array[i];
                    j--;
                }
            }
            array[i] = key;
            this.quickSort(array, begin, i - 1);
            this.quickSort(array, i + 1, end);
        }
    }
}

// test the quick-sort algorithum
(function test() {
    const array = [5, 9, 1, 9, 5, 3, 7, 6, 1];
    const quickSort = new QuickSort(array);
    quickSort.sort();
    quickSort.print();
})();
