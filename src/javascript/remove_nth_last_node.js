/*
Question
https://www.educative.io/courses/grokking-coding-interview-patterns-python/remove-nth-node-from-end-of-list

Given a singly linked list, remove the nth node from the end of the list and
return its head.

#two-pointers
#slow-fast-pointers
*/


function remove_nth_last_node(head, n) {
  let left = head;
  let right = head;

  for(let i = 0; i < n; i++) {
    right = right.next;
  }

  if(!right) {
    head = head.next;
    return head;
  }

  while (right.next) {
    left = left.next;
    right = right.next;
  }

  left.next = left.next.next;
  return head;
}
