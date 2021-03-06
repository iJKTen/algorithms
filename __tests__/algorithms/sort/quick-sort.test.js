const { quickSort } = require('../../../src/algorithms/sort/quick-sort');

const a = [20, 10, 4, 80, 50, 1, 33, 44];
const b = [1, 10, 4, 80, 50, 2, 33, 44, 77];

test('quick sort', () => {
  quickSort(a, 0, a.length - 1);
  expect(a).toEqual([1, 4, 10, 20, 33, 44, 50, 80]);
});

test('quick sort test', () => {
  quickSort(b, 0, b.length - 1);
  expect(b).toEqual([1, 2, 4, 10, 33, 44, 50, 77, 80]);
});
