const {selectionSort} = require('../../../src/algorithms/sort/selection-sort');

const a = [64, 25, 12, 22, 11];
const b = [1, 10, 4, 80, 50, 2, 33, 44, 77];

test('selection sort', () => {
  expect(selectionSort(a)).toEqual([11, 12, 22, 25, 64]);
});

test('selection sort test', () => {
  expect(selectionSort(b)).toEqual([1, 2, 4, 10, 33, 44, 50, 77, 80]);
});
