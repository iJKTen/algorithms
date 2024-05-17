"""
Question
https://www.educative.io/courses/grokking-coding-interview-patterns-python/sum-of-three-values

Given an array of integers, nums, and an integer value, target,
determine if there are any three integers in nums whose
sum is equal to the target, that is, nums[i] + nums[j] + nums[k] == target.
Return TRUE if three such integers exist in the array. Otherwise, return FALSE.

NOTE: A valid triplet consists of elements with distinct indexes.

#two-pointers
"""


def find_sum_of_three(nums: list[int], target: int) -> bool:
    nums.sort()

    for i in range(len(nums)):
        left = i + 1
        right = len(nums) - 1

        while left < right:
            sum = nums[i] + nums[left] + nums[right]
            if sum == target:
                return True
            if sum < target:
                left += 1
            else:
                right -= 1
    return False
