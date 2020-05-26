const binarySearch = (array, x) => {
  let beginIndex = 0;
  let endIndex = array.length - 1;

  while (beginIndex <= endIndex) {
    const mid = beginIndex + Math.floor((endIndex - beginIndex) / 2);
    if (array[mid] === x) {
      console.log('found x', x);
      return mid;
    }

    if (array[mid] > x) {
      endIndex = mid - 1;
    } else {
      beginIndex = mid + 1;
    }
  }

  return -1;
};

module.exports = {
  binarySearch
};
