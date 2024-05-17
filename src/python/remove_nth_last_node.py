"""
Question
https://www.educative.io/courses/grokking-coding-interview-patterns-python/remove-nth-node-from-end-of-list

Given a singly linked list, remove the nth node from the end of the list and
return its head.

#two-pointers
#slow-fast-pointers
"""


class LinkedListNode:
    def __init__(self, data, next=None):
        self.data = data
        self.next = next


def remove_nth_last_node(head, n: int):
    left = head
    right = head

    for _ in range(n):
        right = right.next

    if not right:
        head = head.next
        return head

    while right.next:
        right = right.next
        left = left.next

    left.next = left.next.next
    return head
