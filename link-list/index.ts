// reverse the linklist
function reverseLinkList(head: {
    next: any,
    value: any,
}) {
    // the exit condition
    if(head.next === null || head === null) {
        return head;
    }
    // split the question into two，one is head node, two is the others;
    const result = reverseLinkList(head.next);
    // link the head node and the others
    head.next.next = head;
    head.next = null;
    return result;
}


