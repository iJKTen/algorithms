/*
Question
https://www.educative.io/courses/grokking-coding-interview-patterns-python/sum-of-three-values

Given an array of integers, nums, and an integer value, target,
determine if there are any three integers in nums whose
sum is equal to the target, that is, nums[i] + nums[j] + nums[k] == target.
Return TRUE if three such integers exist in the array. Otherwise, return FALSE.

NOTE: A valid triplet consists of elements with distinct indexes.

#two-pointers
*/


function find_sum_of_three(nums, target) {
  nums.sort((a, b) => a - b);

  for (let index = 0; index < nums.length; index++) {
    let left = index + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[index] + nums[left] + nums[right];
      if (sum === target) {
        return true;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return false;
}
