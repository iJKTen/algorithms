const { LinkedList } = require('../../src/data-structures/linked-list');

const linkedList = new LinkedList();
linkedList.add(10);
linkedList.add(20);
linkedList.add(30);
linkedList.add(40);

test('test linked list add', () => {
  expect(JSON.stringify(linkedList)).toMatchSnapshot();
});

test('test linked list reverse', () => {
  linkedList.reverse();
  expect(JSON.stringify(linkedList)).toMatchSnapshot();
});
