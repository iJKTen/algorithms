const { bubbleSort } = require('../../../src/algorithms/sort/bubble-sort');

const a = [20, 10, 4, 80, 50, 1, 33, 44];
const b = [80, 77, 50, 44, 33, 10, 4, 2, 1];

test('bubble sort', () => {
  bubbleSort(a);
  expect(a).toEqual([1, 4, 10, 20, 33, 44, 50, 80]);
});

test('bubble sort test', () => {
  bubbleSort(b);
  expect(b).toEqual([1, 2, 4, 10, 33, 44, 50, 77, 80]);
});
