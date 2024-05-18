/*
Question: 15. 3Sum
https://leetcode.com/problems/3sum/description/

Given an integer array nums, return all the triplets
[nums[i], nums[j], nums[k]]
such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

#two-pointers
*/


function threeSum(nums) {
  const result = [];
  nums.sort((a, b) => a - b);

  for (let index = 0; index < nums.length; index++) {
    if (index > 0 && nums[index] === nums[index - 1]) {
      continue;
    }

    let left = index + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[index] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[index], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }

        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}
