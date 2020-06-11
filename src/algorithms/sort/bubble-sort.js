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

// const bubbleSort = (arr) => {
//   for (let index = 0; index < arr.length; index++) {
//     for (let innerIndex = index + 1; innerIndex < arr.length; innerIndex++) {
//       if (arr[index] > arr[innerIndex]) {
//         swap(arr, index, innerIndex);
//       }
//     }
//   }
// };

module.exports = {
  bubbleSort
};
