/*
Question: 125. Valid Palindrome
https://leetcode.com/problems/valid-palindrome/description/

A phrase is a palindrome if, after converting all uppercase letters into
lowercase letters and removing all non-alphanumeric characters, it reads the
same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

#two-pointers
*/


function is_palindrome(s) {
  s = s.trim()
  let left = 0
  let right = s.length - 1;

  while (left < right) {
    if (!isLetterOrDigit(s[left])) {
      left++;
      continue;
    }
    if (!isLetterOrDigit(s[right])) {
      right--;
      continue;
    }
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

function isLetterOrDigit(char) {
  const charCode = char.charCodeAt();
  return (
    charCode >= "a".charCodeAt() && charCode <= "z".charCodeAt() ||
    charCode >= "A".charCodeAt() && charCode <= "Z".charCodeAt() ||
    charCode >= "0".charCodeAt() && charCode <= "9".charCodeAt()
  );
}
