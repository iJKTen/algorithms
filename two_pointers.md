# Two Pointers

The two pointers technique is used when working with sequential data structures
like arrays or linked lists. As the name suggests, it involves maintaining two 
pointers that traverse the data structure in a coordinated manner, 
typically starting from different positions or moving in opposite directions.


## <span style="color: pink">125. Valid Palindrome</span> [🔗](https://leetcode.com/problems/valid-palindrome/description/)
A phrase is a palindrome if, after converting all uppercase letters into 
lowercase letters and removing all non-alphanumeric characters, 
it reads the same forward and backward.
Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:

> Input: s = "A man, a plan, a canal: Panama"<br />
Output: true<br />
Explanation: "amanaplanacanalpanama" is a palindrome.<br />

Example 2:<br />

> Input: s = "race a car"<br />
Output: false<br />
Explanation: "raceacar" is not a palindrome.<br/>

Example 3:<br/>

> Input: s = " "
Output: true<br/>
Explanation: s is an empty string "" after removing non-alphanumeric characters.<br/>
Since an empty string reads the same forward and backward, it is a palindrome.<br/>

Apply two pointers pattern, where one pointer starts from the left and the other 
pointer starts from the right. Continue comparing characters until left exceeds right.

Skip any characters that are not alpha numeric. Do not forget to increment/decrement counter by 1

Return false if the lower case character at the left pointer is not equal to the 
lower case character at the right pointer.

💡 [Python Solution](src/python/palindrome.py)<br/>
💡 [JavaScript Solution](src/javascript/palindrome.js) 


## <span style="color: pink">680. Valid Palindrome 2</span> [🔗](https://leetcode.com/problems/valid-palindrome-ii/description/)
Given a string s, return true if the s can be palindrome after deleting
at most one character from it.

Example 1:
>Input: s = "aba"<br/>
Output: true

Example 2:
> Input: s = "abca"<br/>
Output: true<br/>
Explanation: You could delete the character 'c'.<br/>

> Example 3:<br/>
Input: s = "abc"<br/>
Output: false<br/>

We are going to have two pointers, left pointer starting from 0 and a right
one starting from the end of the string.

When for the first time you encounter that the characters at left and right
pointers do not match, skip a character, by incrementing the
left pointer by one and checking if the string is a palindrome or 
decrementing the right pointer by one and check if the string is a
palindrome or not.


💡 [Python Solution](src/python/palindrome2.py)<br />
💡 [JavaScript Solution](src/javascript/palindrome2.js)


## <span style="color: pink">15. 3Sum</span> [🔗](https://leetcode.com/problems/3sum/description/)
Given an integer array nums, return all the triplets 
[nums[i], nums[j], nums[k]] such that 
i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:
>Input: nums = [-1,0,1,2,-1,-4]<br/>
Output: [[-1,-1,2],[-1,0,1]]<br/>
Explanation: <br/>
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.<br/>
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.<br/>
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.<br/>
The distinct triplets are [-1,0,1] and [-1,-1,2].<br/>
Notice that the order of the output and the order of the triplets does not matter.<br/>

Example 2:
>Input: nums = [0,1,1]<br/>
Output: []<br/>
Explanation: The only possible triplet does not sum up to 0.<br/>

Example 3:
>Input: nums = [0,0,0]<br/>
Output: [[0,0,0]]<br/>
Explanation: The only possible triplet sums up to 0.<br/>

‼️ In this problem the three indicies are unique and there could be more than 
one set of 3 values. Remember, we cannot have duplicate triplets.

First sort the array of numbers.

Loop through the array and if index > 0 then check if the current number
is equal to the previous number and if they are skip this iteration.

Initialize, left pointer to index + 1 and right pointer to the last element.

While left does not exceed right check if the sum of three numbers at indices 
index, left, and right = 0. If yes then record that answer as an array in result.

While left pointer does not exceed right and the number at left and the next
number are equal then increment left, reason being
to exclude the duplicates. 

While the left pointer does not exceed the right pointer and the number at right
and the previous number are not equal then decrement the right counter, reason
being to exclude the duplicate triplet.

After the above two while loops increment the left and decrement the right pointer.

If the sum is less than 0 then increment left pointer else decrement the right.

Let's walk through an example

Example 1
> nums = [-2, 0, 0, 2, 2]<br />
nums = [-2, 0, 0, 2, 2], i = 0, left = 1, right = 4, sum = 0<br/>
result = [[-2, 0, 2]]<br/>
nums[left] != nums[left + 1]<br/>
nums[right] == nums[right - 1], 2 == 2, right = 3<br/>
nums[right] != nums[right - 1] 2 != 0<br/>
nums = [-2, 0, 0, 2, 2], i = 0, left = 2, right = 2<br/>


💡 [Python Solution](src/python/3sum.py)<br />
💡 [JavaScript Solution](src/javascript/3sum.js)


## <span style="color: pink">Sum of Three Values</span> [🔗](https://www.educative.io/courses/grokking-coding-interview-patterns-python/sum-of-three-values)
Given an array of integers, nums, and an integer value, target, 
determine if there are any three integers in nums whose sum is equal to 
the target, that is, nums[i] + nums[j] + nums[k] == target.
Return TRUE if three such integers exist in the array. Otherwise, return FALSE.

> NOTE: A valid triplet consists of elements with distinct indices.

To use the two pointer solution its helpful if the array is sorted. This allows
us to move the left pointer is the sum is less than the target and decrement
the right pointer by 1 if the sum of triplets is greater than the target.

Sort the array

‼️Start looping the array and intializa two pointers, left at index + 1 and
right at the last element of the array.

As long as the two pointers do not exceed each other, calculate the sum of
the triplets (number at index + number at left + number at right). If this
sum is less than the target then we increment the left pointer by one, else, 
decrement the right pointer by one. If they are equal then return true.


💡 [Python Solution](src/python/sum_of_three_values.py)<br/>
💡 [JavaScript Solution](src/javascript/sum_of_three_values.js)


## <span style="color: pink">75. Sort Colors</span> [🔗](https://leetcode.com/problems/sort-colors/description/)
Given an array nums with n objects colored red, white, or blue,
sort them in-place so that objects of the same color are adjacent,
with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

Example 1:

>Input: nums = [2,0,2,1,1,0]<br/>
Output: [0,0,1,1,2,2]<br/>

Example 2:

>Input: nums = [2,0,1]<br/>
Output: [0,1,2]<br/>

This problem is also known as the Dutch National Flag problem and usually
solved with three pointers instead of two.

Initialize three variables tracking indices for red, white, and blue where
red = 0, white = 0, and blue is length - 1

Since blue shows up after white lets create our while loop white <= blue

We will swap white with red if the color at index white is red(0), swap colors
and increment both the pointers

Else if the color at index white is white(1) then nothing to do but
increment the white index.

Else, now we know that the color must be blue(2) at index white so we will swap 
blue with white and decrement the blue counter because blue is now in its 
correct place.

Example 1:
>arr = [2, 0, 2, 1, 1, 0] red = 0, white = 0, blue = 5<br/>
arr = [0, 0, 2, 1, 1, 2], red = 0, white = 0, blue = 4, while condition is true<br/>
arr[white]is 0, arr = [0, 0, 2, 1, 1, 2], red = 1, white = 1, blue = 4,<br/>
arr[white]is 0, arr = [0, 0, 2, 1, 1, 2], red = 2, white = 2, blue = 4,<br/>
... this will go on until the white condition is not true<br/>

Example 2:
>arr = [2, 0, 1], red = 0, white = 0, blue = 2<br/>
arr = [1, 0, 2], red = 0, white = 0, blue = 1, while is still true<br/>
arr = [1, 0, 2], red = 0, white = 1, blue = 1, while is still true<br/>
arr = [0, 1, 2], red = 1, white = 2, blue = 1, while is not true<br/>

Example 3:
>arr = [1, 0, 2, 1, 2, 2], red = 0, white = 0, blue = 5<br/>
arr = [1, 0, 2, 1, 2, 2], red = 0, white = 1, blue = 5<br/>
arr = [0, 1, 2, 1, 2, 2], red = 1, white = 2, blue = 5<br/>
arr = [0, 1, 2, 1, 2, 2], red = 1, white = 2, blue = 4(we did swap but its the same number)<br/>
arr = [0, 1, 2, 1, 2, 2], red = 1, white = 2, blue = 3<br/>
arr = [0, 1, 1, 2, 2, 2], red = 1, white = 2, blue = 2<br/>


💡 [Python Solution](src/python/sort_colors.py)<br />
💡 [JavaScript Solution](src/javascript/sort_colors.js)


## <span style="color: pink">Reverse Words in a String</span> [🔗](https://www.educative.io/courses/grokking-coding-interview-patterns-python/reverse-words-in-a-string)
Given a sentence, reverse the order of its words without affecting the order of letters within the given word.
Note: The input string may contain leading or trailing spaces or multiple
spaces between words. The returned string, however, should only have a
single space separating each word. Do not include any extra spaces.

Example 1:
> input string: "Reverse this string"<br />
output string: "string this Reverse"<br />

Since there could be multiple space between words you will first need to 
use regular expression to remove those extra spaces.

Remember, in some languages strings are immutable so you will need an array.

Here is how you can solve this.

Remove extra spaces from between words, then create an array out of the string
containing all the characters and spaces, then reverse this array, now you
can apply the two pointers technique reverse the characters in the array.

Use two pointers, left and right starting at 0, while left is less than the
length of the string. Run a while loop to move the right pointer, where
right pointer is less than the length of the string and character at right
pointer is not a Space, now reverse the characters from left till right - 1. 
Move the left pointer to be at right + 1 and right + 1.


💡 [Python Solution](src/python/reverse_words_in_a_string.py)<br />
💡 [JavaScript Solution](src/javaScript/reverse_words_in_a_string.js)


## <span style="color: pink">Remove nth Node from End of the list</span> [🔗](https://www.educative.io/courses/grokking-coding-interview-patterns-python/remove-nth-node-from-end-of-list)
Given a singly linked list, remove the nth node from the end of the list and
return its head.

Maintain two pointers left and right pointing at head. Move the right pointer 
by n places. 

If right is null then you know you have to remove the head. Do this by
adjusting the left pointer.

If right is not null then keep until you have something at the right and keep
moving the right pointer by one and left pointer by one.

Now your left pointer will be at the node before the nth element to delete. 

Rearrange the left pointer.

Example 1:
> [23, 28, 10, 5, 67, 39, 70, 28], n = 2 (delete 70)<br />
[23, 28, 10, 5, 67, 39, 70, 28], left = 23, right = 23<br/>
[23, 28, 10, 5, 67, 39, 70, 28], left = 23, right = 28<br/>
[23, 28, 10, 5, 67, 39, 70, 28], left = 23, right = 10, stop as you have moved right n places<br/>
[23, 28, 10, 5, 67, 39, 70, 28], left = 23, right = 10, right is not null, keep moving as long as you have a right<br/>
[23, 28, 10, 5, 67, 39, 70, 28], left = 28, right = 5<br/>
[23, 28, 10, 5, 67, 39, 70, 28], left = 10, right = 67<br/>
[23, 28, 10, 5, 67, 39, 70, 28], left = 5, right = 39<br/>
[23, 28, 10, 5, 67, 39, 70, 28], left = 67, right = 70<br/>
[23, 28, 10, 5, 67, 39, 70, 28], left = 67, right = 70, 70 still has a right so continue<br/>
[23, 28, 10, 5, 67, 39, 70, 28], left = 39, right = 28, there is no right of 28, so stop<br/>
Rearrange the left pointer<br/>

Example 2:
> [69, 98, 49, 1, 4, 6], n = 6 (delete 69)<br />
[69, 98, 49, 1, 4, 6], left = 69, right = 69<br/>
move right pointer by 6 places<br/>
[69, 98, 49, 1, 4, 6], left = 69, right = null<br/>


💡 [Python Solution](src/python/remove_nth_last_node.py)<br />
💡 [JavaScript Solution](src/javaScript/remove_nth_last_node.js)

## Notes

In JavaScript you can find out if a character is an alphabet by getting its
character code and checking if its in between or equal to char code of "a/z/A/Z"
```
const c = char.charCodeAt();
c >= "a".charCodeAt() && c <= "z".charCodeAt()
```
