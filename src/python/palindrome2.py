"""
Question: 680. Valid Palindrome II
https://leetcode.com/problems/valid-palindrome-ii/description/

Given a string s, return true if the s can be palindrome after
deleting at most one character from it.

#two-pointers
"""


class Solution:
    def palindrome(self, s, left, right):
        while left < right:
            if s[left] != s[right]:
                return False
            left += 1
            right -= 1
        return True

    def validPalindrome(self, s):
        left = 0
        right = len(s) - 1

        while left < right:
            if s[left] != s[right]:
                return (self.palindrome(s, left + 1, right) or
                        self.palindrome(s, left, right - 1))
            left += 1
            right -= 1
        return True


"""
Space Complexity: The function creates fixed amount of space
in terms of left and right pointers but does not create any
new data structures. O(1)

Time Complexity:
The outer loop goes over one character at a time and in the worst
case this loop goes over O(n/2) which is O(n) where n is the length of s

If a mismatch is found then the work done by palindrome function
in the worst case scenario is O(n/2) = O(n) skipping one character
from the left and one from the right.

The overall complexity is O(n)
"""
