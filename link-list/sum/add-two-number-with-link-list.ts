// implement two number add with the link-list
// 4->3->2 + 9->8->7->4 => 1->0->3->0->6
// time complexity: O(max(m, n)) space complexity: O(m+n)
function LinkNode(val: any, next: typeof LinkNode | undefined) {
    this.val = val ?? 0;
    this.next = next === undefined ? null : next;
}

function addTwoNumberWithLinkList(l1: typeof LinkNode, l2: typeof LinkNode) {
    let ans = null;
    let highNumber = 0;
    const arr1 = [];
    const arr2 = [];
    // use the array to simulate the stack to implement the add of two number in the linkList
    while(l1) {
        arr1.push(l1.val);
        l1 = l1.next;
    }
    while(l2) {
        arr2.push(l2.val);
        l2 = l2.next;
    }
    while(arr1.length || arr2.length || highNumber) {
        let val1 = arr1.pop() ?? 0;
        let val2 = arr2.pop() ?? 0;
        let sum = val1 + val2 + highNumber;
        let val = sum % 10;
        // construct the new linkList, high node pointer to low node, the prev node is ans;
        const newList = new LinkNode(val, undefined);
        newList.next = ans;
        ans = newList;
        // update the highNumber
        highNumber = Math.floor(sum / 10);
    }
    return ans;
}