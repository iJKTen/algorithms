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

const insertionSort = (a) => {
  // index represents the logical boundary where left array is sorted & right array is unsorted.
  for (let index = 1; index < a.length; index++) {
    const elementToSwap = a[index];
    let previousIndex = index - 1;

    // Figure out where to place elementToSwap.
    while (previousIndex >= 0 && a[previousIndex] > elementToSwap) {
      a[previousIndex + 1] = a[previousIndex];
      previousIndex--;
    }
    a[previousIndex + 1] = elementToSwap;
  }

  return a;
};

module.exports = {
  insertionSort
};
