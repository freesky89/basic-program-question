// delete the nth node from the end
function ListNode(val: any, next: typeof ListNode) {
    this.val = val;
    this.next = next;
}

// merge two link-list with fast and slow pointer
function deleteNthNodeFromTheEnd(head: typeof ListNode, n: number) {
    let prev = new ListNode(0, head);
    let fast = prev;
    let slow = prev;
    while(n--) {
        fast = fast.next;
    }
    while(fast.next!==null) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return prev.next;
}
