/* General Explanation
Merge sort is a divide & conquer algorithm where we divide the array into smaller parts. We keep on
splitting / dividing the array until the array is left with one element.
We split the array by first finding the middle index of the array. Once we have the middle, we divide
the array into two parts, one left and the other right.
If the length of the array on the left side is greator than 1, we continue to split the left array
by finding the middle nand splitting it further.
Once we reach a stage where the array can no longer be split then we sort the left side of the array
and the right side of the array and it merge it.

What happens in code.
Merge sort is a divide & conquer algorithm. The array is figuratively split by finding the middle
indexuntil it can no longer be split. Actually, we are trying to find the indices in a recursive way.
If this is a recursive funtion then we need a way to exit the recursion, which is handled by the
condition, beginIndex < endIndex.
*/

const merge = (a, beginIndex, endIndex, length) => {
  const tempArr = [];
  let leftIndex = beginIndex;
  let rightIndex = endIndex + 1;

  // Pick if the element in the left side of the array is smaller than the right.
  // If the left is smaller than increment that index else increment right index.
  while (leftIndex <= endIndex && rightIndex <= length) {
    if (a[leftIndex] <= a[rightIndex]) {
      tempArr.push(a[leftIndex]);
      leftIndex++;
    } else {
      tempArr.push(a[rightIndex]);
      rightIndex++;
    }
  }

  // If one of the indices has not yet reached the end of the list
  // For example consider [11, 10] The above while loop will check if 11 <= 10 and if it is not
  // it copies the element at right index to the new array and increments the right index.
  // But we still have the element 11 which is not yet added to the new array and this does that.
  // This can also be executed if you have an array with odd number of elements.
  while (leftIndex <= endIndex) {
    tempArr.push(a[leftIndex]);
    leftIndex++;
  }

  // See above explanation and this is executed when the left index has moved beyond the bounds
  // and right index has not moved.
  while (rightIndex <= length) {
    tempArr.push(a[rightIndex]);
    rightIndex++;
  }

  // Update the original array from the temporary array.
  for (let index = beginIndex; index <= length; index++) {
    a[index] = tempArr[index - beginIndex];
  }
};

// Here we are not splitting the array figuratively but we are finding indices
// needed to merge the array.
const sort = (a, beginIndex, endIndex) => {
  // When this condition is not satisfied an item is poped from the stack
  if (beginIndex < endIndex) {
    const mid = Math.floor((beginIndex + endIndex) / 2);

    sort(a, beginIndex, mid);
    sort(a, mid + 1, endIndex);
    merge(a, beginIndex, mid, endIndex);
  }

  return a;
};

module.exports = {
  sort
};
