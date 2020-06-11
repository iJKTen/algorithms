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
  let elementsToSort = arr.length;
  let keepGoing = false;

  do {
    keepGoing = false;

    for (let index = 0; index < elementsToSort; index++) {
      if (arr[index] > arr[index + 1]) {
        swap(arr, index, index + 1);
        keepGoing = true;
      }
    }

    elementsToSort--;
  } while (keepGoing === true);
};

module.exports = {
  bubbleSort
};
