const {LinkedList} = require('../../src/data-structures/linked-list');

const linkedList = new LinkedList();
linkedList.sortedAdd(40);
linkedList.sortedAdd(30);
linkedList.sortedAdd(35);
linkedList.sortedAdd(20);
linkedList.sortedAdd(10);

test('test linked list add', () => {
  expect(JSON.stringify(linkedList)).toMatchSnapshot();
});

test('test linked list reverse', () => {
  linkedList.reverse();
  expect(JSON.stringify(linkedList)).toMatchSnapshot();
});

test('index of 20', () => {
  expect(linkedList.indexOf(20)).toEqual(3);
});

test('is Empty', () => {
  expect(linkedList.isEmpty()).toEqual(false);
});

test('remove 10', () => {
  linkedList.remove(10);
  expect(JSON.stringify(linkedList)).toMatchSnapshot();
});

test('insert at index 3', () => {
  linkedList.insertAt(22, 3);
  expect(JSON.stringify(linkedList)).toMatchSnapshot();
});

test('add new 80', () => {
  linkedList.add(80);
  expect(JSON.stringify(linkedList)).toMatchSnapshot();
});

test('removed from index 3', () => {
  linkedList.removeFrom(3);
  expect(JSON.stringify(linkedList)).toMatchSnapshot();
});
