const {binarySearch} = require('../src/binary-search');

const a = [2, 4, 6, 8, 10, 12, 14, 16, 18];
test('binary search', () => {
  expect(binarySearch(a, 0, a.length - 1, 16)).toBe(7);
});
