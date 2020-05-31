const { insertionSort } = require('../../../src/algorithms/sort/insertion-sort');

const a = [20, 10, 4, 80, 50, 1, 33, 44];
const b = [20, 10, 4, 80, 50, 1, 33, 44, 77];

test('insertion sort test', () => {
  expect(insertionSort(a)).toEqual([1, 4, 10, 20, 33, 44, 50, 80]);
});

test('insertion sort test', () => {
  expect(insertionSort(b)).toEqual([1, 4, 10, 20, 33, 44, 50, 77, 80]);
});
