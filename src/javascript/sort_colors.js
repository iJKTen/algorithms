/*
Question: 75. Sort Colors
https://leetcode.com/problems/sort-colors/description/

Given an array nums with n objects colored red, white, or blue, sort
them in-place so that objects of the same color are adjacent, with the colors
in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and
blue, respectively.

You must solve this problem without using the library's sort function.

#two-pointers
*/


function sort_colors(colors) {
  let red = 0;
  let white = 0;
  let blue = colors.length - 1;

  while (white <= blue) {
    if (colors[white] === 0) {
      swap(colors, white, red);
      white++;
      red++;
    } else if (colors[white] === 1) {
      white++;
    } else {
      swap(colors, white, blue);
      blue--;
    }
  }
}

function swap(arr, a, b) {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
