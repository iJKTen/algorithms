"""
Question: 75. Sort Colors
https://leetcode.com/problems/sort-colors/description/

Given an array nums with n objects colored red, white, or blue, sort
them in-place so that objects of the same color are adjacent, with the colors
in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and
blue, respectively.

You must solve this problem without using the library's sort function.

#two-pointers
"""


def sort_colors(colors):
    red = 0
    white = 0
    blue = len(colors) - 1

    while white <= blue:
        if colors[white] == 0:
            colors[white], colors[red] = colors[red], colors[white]
            white += 1
            red += 1
        elif colors[white] == 1:
            white += 1
        else:
            colors[white], colors[blue] = colors[blue], colors[white]
            blue -= 1
    return colors
