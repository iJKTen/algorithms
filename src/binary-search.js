/*

*/

const binarySearch = (array, beginIndex, endIndex, x) => {
  if (endIndex >= 1) {
    const mid = beginIndex + Math.floor((endIndex - beginIndex) / 2);
    if (array[mid] === x) {
      return mid;
    }

    if (array[mid] > x) {
      return binarySearch(array, beginIndex, mid - 1, x);
    }

    return binarySearch(array, mid + 1, endIndex, x);
  }

  return -1;
};

module.exports = {
  binarySearch
};
