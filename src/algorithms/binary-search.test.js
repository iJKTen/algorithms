const {binarySearch} = require('./binary-search');

const a = [2, 4, 6, 8, 10, 12, 14, 16, 18];
test('binary search right', () => {
  expect(binarySearch(a, 0, a.length - 1, 16)).toBe(7);
});

test('binary search left', () => {
  expect(binarySearch(a, 0, a.length - 1, 4)).toBe(1);
});

test('binary search not found', () => {
  expect(binarySearch(a, 0, a.length - 1, 1)).toBe(-1);
});
