/*
  Bubble sort.
  DO NOT USE THIS.
*/

const swap = (arr, indexOne, indexTwo) => {
  const tempValue = arr[indexOne];
  arr[indexOne] = arr[indexTwo];
  arr[indexTwo] = tempValue;
};

const bubbleSort = (arr) => {
  for (let indexOne = 0; indexOne <= arr.length - 1; indexOne++) {
    for (let indexTwo = 0; indexTwo <= arr.length - 1; indexTwo++) {
      if (arr[indexTwo] > arr[indexOne]) {
        swap(arr, indexOne, indexTwo);
      }
    }
  }
};

module.exports = {
  bubbleSort
};
