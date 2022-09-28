// merge two sorted array in place, in place means the first array contains extra place for the second array to merge
// eg: [1,2,3,0,0,0] + [4,5,6] => [1,2,3,4,5,6s]
/**
 * @param nums1 the array want to be merged
 * @param m the true length of num1, except the extra place
 * @param nums2 the array want to merge
 * @param n the length of num2
 */
function mergeTwoSortedArrayInPlace(nums1: Array<number>, m: number, nums2: Array<number>, n: number) {
    let end = m + n - 1;
    let n1 = m - 1;
    let n2 = n - 1;
    while(n1>=0 && n2>=0) {
        if (nums1[n1] >= nums2[n2]) {
            nums1[end--] = nums1[n1--];
        } else {
            nums1[end--] = nums2[n2--];
        }
    }
    // when n1 < 0, n2 > 0, it means we should place spare number in the num2 into num1 
    while(n1 < 0 && n2>=0) {
        nums1[end--] = nums2[n2--];
    }
}
