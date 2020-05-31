/*
  Quick sort is an in-place divide & conquer recursive sorting algorithm.
  Quick sort is started by selecting a pivot value, which is, a number present in the array and imagine
  this pivot number in the array where left of the pivot number is less than the pivot number and
  the elements on the right are greater than the pivot number.

  Quick sort begins by finding a partition index, which is an index in the array where the numbers left
  of the array is less than the number at the partition index and the numbers on the right are greater.

  So the first thing we have to do is find this partition index and this is where we call our
  partitionIndex function. This function takes three parameters, array, startIndex, and endIndex.

  Partition index function starts by selecting a pivot we talked about earlier. In quick sort and in this
  function, findPartitionIndex function, the pivot is always located at the endIndex.

  Once we have the pivot value, we start at the begining of the array using the startIndex and storing
  that value in another variable called partitionIndex.

  Now we loop from the startIndex till the endIndex comparing if the value at index is <= pivot value.
  If the condition is satisfied then we swap the element at index with the partitionIndex and increment
  the partitionIndex value. This goes on until teh for loop is completed.

  After this for loop is finished, we have elements on the left of the partition which are smaller than the
  pivot and the elements on right of the partition index are greater.

  The only thing left to do is to swap the element at the partition index with the pivot and since the pivot
  is always at the endIndex we swap those two values.

  The swap function is pretty easy to understand. We swap two values with the help of a temporary variable.

  Since this is a recursive function, we then call quickSort passing in the array, the startIndex and
  endIndex as partitionIndex -1, and we call quickSort again by passing in the array, the
  partitionIndex + 1, and endIndex. In other words we are dividing the array logically with the help
  of the partitionIndex.

*/

const swap = (arr, itemOne, itemTwo) => {
  const tempValue = arr[itemOne];
  arr[itemOne] = arr[itemTwo];
  arr[itemTwo] = tempValue;
};

const findPartitionIndex = (arr, startIndex, endIndex) => {
  const pivot = arr[endIndex];
  let partitionIndex = startIndex;

  for (let index = startIndex; index < endIndex; index++) {
    if (arr[index] <= pivot) {
      swap(arr, index, partitionIndex);
      partitionIndex++;
    }
  }

  swap(arr, partitionIndex, endIndex);
  return partitionIndex;
};

const quickSort = (arr, startIndex, endIndex) => {
  if (startIndex < endIndex) {
    const partitionIndex = findPartitionIndex(arr, startIndex, endIndex);
    quickSort(arr, startIndex, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, endIndex);
  }
};

module.exports = {
  quickSort
};
