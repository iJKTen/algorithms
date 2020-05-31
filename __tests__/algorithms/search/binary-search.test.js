const { binarySearch } = require('../../../src/algorithms/search/binary-search');

const a = [2, 4, 6, 8, 10, 12, 14, 16, 18];
test('binary search right', () => {
  expect(binarySearch(a, 16)).toBe(7);
});

test('binary search left', () => {
  expect(binarySearch(a, 4)).toBe(1);
});

test('binary search not found', () => {
  expect(binarySearch(a, 1)).toBe(-1);
});
