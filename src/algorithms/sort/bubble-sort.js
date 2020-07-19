/*
  Bubble sort.
  DO NOT USE THIS.
*/

// const bubbleSort = (arr) => {
//   let elementsToSort = arr.length;
//   let keepGoing = false;

//   do {
//     keepGoing = false;

//     for (let index = 0; index < elementsToSort; index++) {
//       if (arr[index] > arr[index + 1]) {
//         swap(arr, index, index + 1);
//         keepGoing = true;
//       }
//     }

//     elementsToSort--;
//   } while (keepGoing === true);
// };

// const bubbleSort = (arr) => {
//   for (let index = 0; index < arr.length; index++) {
//     for (let innerIndex = index + 1; innerIndex < arr.length; innerIndex++) {
//       if (arr[index] > arr[innerIndex]) {
//         swap(arr, index, innerIndex);
//       }
//     }
//   }
// };

const swap = (arr, index1, index2) => {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
};

const bubbleSort = (arr) => {
  let length = arr.length;
  let swappedAtLeastOnce = true;

  while (length > 0 && swappedAtLeastOnce) {
    let index = 0;
    swappedAtLeastOnce = false;

    for (let nextIndex = index + 1; nextIndex < length; nextIndex++) {
      if (arr[index] > arr[nextIndex]) {
        swap(arr, index, nextIndex);
        swappedAtLeastOnce = true;
      }
      index++;
    }

    length--;
  }
};

module.exports = {
  bubbleSort
};

