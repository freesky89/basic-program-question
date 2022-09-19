function ListNode(val: any, next: typeof ListNode | null) {
    this.val = val;
    this.next = next;
}

// merge two sorted link-list with two pointer 
function mergeTwoLists(list1: typeof ListNode | null, list2: typeof ListNode | null): typeof ListNode | null {
    let newListNode = new ListNode(-1, null);
    let prev = newListNode;
    let first = list1;
    let second = list2;
    while(first && second) {
        if (first.val < second.val) {
            newListNode.next = first;
            first = first.next;
        } else {
            newListNode.next = second;
            second = second.next;
        }
        newListNode = newListNode.next;
    }
    if (first === null) {
        newListNode.next = second;
    }
    if (second === null) {
        newListNode.next = first;
    }
    return prev.next;
};
