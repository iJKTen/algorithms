/*
Insertion sort is an inplace sorting algorithm and similar to selection sort.
Insertion sort iterates, consuming one input element each repetition, and growing a sorted output list.
At each iteration input sort removes one element from the input data and finds the location
within the sorted list.

Does this mean we will have two arrays? We already said this is an inplace sorting algorithm.

We create the idea of two arrays with an index. All the items on the left side of the index will be sorted
and the elements on the right side will not be sorted.

When we first begin the index will be 1 and the left side of the array is sorted because left side only
has one element which is at index 0. As the index increments from 1 we check the element at the new index
if it is less than its neighbor on the left and we keep doing this until condition is not true & that is
how we find the position in the left side of the array where this element should be inserted.
*/

const moveInPlace = (arr, index, selectedElement) => {
  while (index >= 0 && arr[index - 1] > selectedElement) {
    arr[index] = arr[index - 1];
    index--;
  }
  arr[index] = selectedElement;
};

const insertionSort = (arr) => {
  for (let index = 1; index < arr.length; index++) {
    const selectedElement = arr[index];

    moveInPlace(arr, index, selectedElement);
  }

  return arr;
};

module.exports = {
  insertionSort
};
