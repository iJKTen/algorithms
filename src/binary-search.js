/*
As the name suggests, binary search, you will be searching something in two different "things". Here, the
two differemt "things" are the array. But, you say the function below takes only one array?

Assume the array is sorted.

Let's assume that the length of the array is 10, and we will have two variables to keep track of where our
array begins and end. Let's call these two variables, beginIndex and endIndex. When this function is called
for the first time, beginIndex will be 0 and endIndex will be 9. The middle index of the array will be
beginIndex + (endIndex - beginIndex) / 2 which will give us 4.

Check, if the value at index 4 is the element we are looking for and if it is then we return that index, in
this case 4.

If the value at index > 4 then we must assume that the value is present between index 0 and index mid.
So now the beginIndex will be 0 and endIndex will be mid.

If the value at index < 4 then we must assume that the value is present between index mid and index length
of the array - 1. So nowthe beginIndex will be mid and endIndex will be length of the array - 1.

We will not be splitting the array, we will keep track of where the array starts and where it ends, using two
variables, beginIndex and endIndex. We will change these two variables by comparing x with the middle element
of the array.

If you array has even number of elements then you will get a whole number, otherwise you get a decimal number,
which is not an index in the array and it won't serve our puropse. You, get a whole number by passing the
number to Math.floor (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
floor) which will give you a whole number. This number we will call mid and it is an index present in our
array. Keep track of this number.

If the number present at the index > x, then the number must be present between beginIndex and mid.
If the number present at the index < x, then the number must be present betwen mid and endIndex.

The above two lines indicate then we need to keep track of three variables, mid, beginIndex, and endIndex.

If the number present at the index > x, then the number must be present between beginIndex and mid.
So, now the beginIndex will remain beginIndex
endIndex will be mid - 1, you subtract - 1 because the number is not present at index mid and remember, array
starts at index 0, meaning, an array with 10 elements, will have index from 0 - 9.

If the number present at the index < x, then the number must be present betwen mid and endIndex.
beginIndex will become mid + 1, you add one because the number is not present at index mid
endIndex will remain endIndex.

Yes, this is a recursive function.
*/

const binarySearch = (array, beginIndex, endIndex, x) => {
  // As long as endIndex is positive we can still divide and this number is the only one which is 
  // subtracted by 1
  if (endIndex >= 1) {
    /*
      Why add beginIndex below?
      First time when this function is called endIndex will be length of the array - 1 and beginIndex will be 0, so the mid will b 0 + (endIndex - beginIndex) and since beginIndex is 0 it does not change anything.
      As long as beginIndex is 0, beginIndex does not come into play and that simply means, the element we are looking for is present between 0 and mid index of the array. Since the array is sorted. 
      Because this is a recursive function, beginIndex and endIndex will have two different values.
      Let's now assume, beginIndex = 4, endIndex = 8 and if we only had Math.floow((endIndex - beginIndex) / 2) the value mid will be 8 - 4 = 4, 4 / 2 = 2. Now mid = 2. But, you cannot get the value at index 2, when clearly beginIndex starts at 4 and that is why you add beginIndex below, bringind the mid value to 6 which is correct. Now you mid value is between beginIndex and endIndex. 
    */
    const mid = beginIndex + Math.floor((endIndex - beginIndex) / 2);
    if (array[mid] === x) {
      return mid;
    }

    if (array[mid] > x) {
      // Makes it a recursive function
      return binarySearch(array, beginIndex, mid - 1, x);
    }

    // Makes it a recursive function
    return binarySearch(array, mid + 1, endIndex, x);
  }

  return -1;
};

module.exports = {
  binarySearch
};
