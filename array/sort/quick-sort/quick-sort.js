// time complexity: O(nlogn)
var QuickSort = /** @class */ (function () {
    function QuickSort(array) {
        this.array = array;
    }
    QuickSort.prototype.sort = function () {
        this.quickSort(this.array, 0, this.array.length - 1);
    };
    QuickSort.prototype.print = function () {
        for (var i = 0; i < this.array.length; i++) {
            console.log(this.array[i]);
        }
    };
    /**
     * @param array
     * @param begin
     * @param end
     */
    QuickSort.prototype.quickSort = function (array, begin, end) {
        if (begin === void 0) { begin = 0; }
        if (end === void 0) { end = 0; }
        if (begin < end) {
            var key = array[begin];
            var i = begin;
            var j = end;
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
    };
    return QuickSort;
}());
// test the quick-sort algorithum
(function test() {
    var array = [5, 9, 1, 9, 5, 3, 7, 6, 1];
    var quickSort = new QuickSort(array);
    quickSort.sort();
    quickSort.print();
})();
