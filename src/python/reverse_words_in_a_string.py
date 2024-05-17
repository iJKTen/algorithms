"""
Question
https://www.educative.io/courses/grokking-coding-interview-patterns-python/reverse-words-in-a-string

Given a sentence, reverse the order of its words without affecting the order of
letters within the given word.

Note: The input string may contain leading or trailing spaces or multiple
spaces between words. The returned string, however, should only have a single
space separating each word. Do not include any extra spaces.

#two-pointers
"""


import re


def reverse_words(sentence) -> str:
    sentence = re.sub(" +", " ", sentence.strip())
    sentence = list(sentence)
    strLen = len(sentence)

    reverse(sentence, 0, strLen - 1)
    left = 0
    right = 0

    while left < strLen:
        while right < strLen and sentence[right] != " ":
            right += 1
        reverse(sentence, left, right - 1)
        left = right + 1
        right += 1

    return "".join(sentence)


def reverse(sentence, left, right):
    while left < right:
        sentence[left], sentence[right] = sentence[right], sentence[left]
        left += 1
        right -= 1
