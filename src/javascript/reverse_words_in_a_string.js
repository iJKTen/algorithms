/*
Question
https://www.educative.io/courses/grokking-coding-interview-patterns-python/reverse-words-in-a-string

Given a sentence, reverse the order of its words without affecting the order of
letters within the given word.

Note: The input string may contain leading or trailing spaces or multiple
spaces between words. The returned string, however, should only have a single
space separating each word. Do not include any extra spaces.

#two-pointers
*/


function reverse_words(sentence) {
  sentence = sentence.trim().replace(/\s+/g, " ");
  sentence = sentence.split("");
  const strLen = sentence.length;
  reverse(sentence, 0, strLen - 1);

  let left = 0;
  let right = 0;

  while (left < strLen) {
    while (right < strLen && sentence[right] !== " ") {
      right++;
    }
    reverse(sentence, left, right - 1);
    left = right + 1;
    right++;
  }

  return sentence.join("");
}

function reverse(arr, left, right) {
  while (left < right) {
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
  }
}
