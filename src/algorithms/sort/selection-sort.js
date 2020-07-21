/*
Selection sort is an in place sorting algorithm where you compare one element with every other element
in the array.

Assume, the first index in the array has the lowest value and compare that value with every other
element in the array and if you find a lower value at an index then swap those two values.

increment the first index by one and then compare the value at that index with every other value but
not the ones you already looked at. This continues until the first loop has completed.

You will require two loops when you want to compare one element in the array with every other element
in the array.
*/

const swap = (a, indexOne, indexTwo) => {
  const temp = a[indexOne];
  a[indexOne] = a[indexTwo];
  a[indexTwo] = temp;
};

const findMinValue = (arr, currentMinValueIndex, startIndex) => {
  for (let index = startIndex; index < arr.length;index++) {
    if (arr[currentMinValueIndex] > arr[index]) {
      currentMinValueIndex = index;
    }
  }

  return currentMinValueIndex;
};

const selectionSort = (arr) => {
  for (let index = 0; index < arr.length; index++) {
    const minValueIndex = findMinValue(arr, index, index + 1);

    if (minValueIndex != index) {
      swap(arr, index, minValueIndex);
    }
  }

  return arr;
};


module.exports = {
  selectionSort
};
