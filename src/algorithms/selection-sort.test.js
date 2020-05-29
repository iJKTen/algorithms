const {selectionSort} = require('./selection-sort');

const a = [20, 10, 4, 80, 50, 1, 33, 44];
const b = [1, 10, 4, 80, 50, 2, 33, 44, 77];

test('selection sort', () => {
  expect(selectionSort(a)).toEqual([1, 4, 10, 20, 33, 44, 50, 80]);
});

test('selection sort test', () => {
  expect(selectionSort(b)).toEqual([1, 2, 4, 10, 33, 44, 50, 77, 80]);
});
