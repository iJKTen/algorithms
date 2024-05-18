/*
  * 
Question: 680. Valid Palindrome II
https://leetcode.com/problems/valid-palindrome-ii/description/

Given a string s, return true if the s can be palindrome after
deleting at most one character from it.

#two-pointers
*/


function palindrome(s) {
  let left = 0
  let right = s.length - 1;

  while (left < right) {
    if (s[left] != s[right]) {
      return (isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1));
    }
    left++;
    right--;
  }

  return true;
}

function isPalindrome(s, left, right) {
  while (left < right) {
    if (s[left] !== s[right]) {
      return false
    }
    left++;
    right--;
  }
  
  return true;
}
