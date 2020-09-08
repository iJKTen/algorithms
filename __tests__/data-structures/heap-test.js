const {Heap, MinHeap, MaxHeap} = require('../../src/data-structures/heap');

const toHeapify = [10, 20, 15, 12, 40, 25, 18];
const minHeap = new MinHeap();
const maxHeap = new MaxHeap();
const heap = new Heap();

test('min heap', () => {
  minHeap.add(25);
  minHeap.add(32);
  minHeap.add(35);
  minHeap.add(40);
  minHeap.add(20);
  minHeap.add(10);
  minHeap.add(30);

  expect(minHeap.dataSource()).toMatchSnapshot();
});

test('min heap add 8', () => {
  minHeap.add(8);
  expect(minHeap.dataSource()).toMatchSnapshot();
});

test('min heap remove', () => {
  minHeap.remove();
  expect(minHeap.dataSource()).toMatchSnapshot();
});

test('max heap', () => {
  maxHeap.add(50);
  maxHeap.add(30);
  maxHeap.add(20);
  maxHeap.add(15);
  maxHeap.add(10);
  maxHeap.add(8);
  maxHeap.add(16);

  expect(maxHeap.dataSource()).toMatchSnapshot();
});

test('max heap add 60', () => {
  maxHeap.add(60);
  expect(maxHeap.dataSource()).toMatchSnapshot();
});


test('remove 60 from max heap', () => {
  maxHeap.remove();
  expect(maxHeap.dataSource()).toMatchSnapshot();
});

test(`heapify ${toHeapify}`, () => {
  heap.heapify(toHeapify);
  expect(heap.dataSource()).toMatchSnapshot();
});
