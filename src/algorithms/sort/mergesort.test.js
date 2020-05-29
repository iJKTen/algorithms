const {sort} = require('./mergesort');

const a = [20, 10, 4, 80, 50, 1, 33, 44];
const b = [20, 10, 4, 80, 50, 1, 33, 44, 77];

test('merge sort test', () => {
  expect(sort(a, 0, a.length - 1)).toEqual([1, 4, 10, 20, 33, 44, 50, 80]);
});

test('merge sort test', () => {
  expect(sort(b, 0, b.length - 1)).toEqual([1, 4, 10, 20, 33, 44, 50, 77, 80]);
});
