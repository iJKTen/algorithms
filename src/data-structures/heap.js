const Heap = function() {
  this.arr = [];
};

Heap.prototype.printArray = function() {
  console.log(this.arr);
};

Heap.prototype.left = function(index) {
  return (2 * index) + 1;
};

Heap.prototype.right = function(index) {
  return (2 * index) + 2;
};

Heap.prototype.parent = function(index) {
  return Math.floor((index - 1) / 2);
};

Heap.prototype.swap = function(index1, index2) {
  const temp = this.arr[index1];
  this.arr[index1] = this.arr[index2];
  this.arr[index2] = temp;
};

Heap.prototype.heapify = function(completeTree) {
  this.arr = completeTree;
  const totalItems = this.arr.length - 1;
  const stack = [];

  for (let index = totalItems; index >= 0; index--) {
    stack.push(index);

    while (stack.length > 0) {
      const tempIndex = stack.pop();
      const left = this.left(tempIndex);
      let indexToSwapWith = -1;

      if (left < totalItems) {
        if (this.arr[left] > this.arr[tempIndex]) {
          indexToSwapWith = left;
        }
        const right = this.right(tempIndex);
        if (right <= totalItems) {
          indexToSwapWith = (this.arr[left] > this.arr[right]) ? left : right;
        }
      }

      if (indexToSwapWith > -1) {
        this.swap(tempIndex, indexToSwapWith);
        stack.push(indexToSwapWith);
      }
    }
  }
};

const MinHeap = function() {
  Heap.call(this);
};

MinHeap.prototype = Object.create(Heap.prototype);
MinHeap.prototype.constructor = MinHeap;

MinHeap.prototype.add = function(element) {
  this.arr.push(element);

  if (this.arr.length > 1) {
    let isHeap = false;
    let elementAtIndex = this.arr.length - 1;

    while (!isHeap) {
      const parentIndex = this.parent(elementAtIndex);
      const parent = this.arr[parentIndex];
      if (parent > element) {
        this.swap(parentIndex, elementAtIndex);
        elementAtIndex = parentIndex;
      } else {
        isHeap = true;
      }
    }
  }
};

MinHeap.prototype.remove = function() {
  this.swap(0, this.arr.length - 1);
  this.arr.pop();
  let elementAtIndex = 0;
  let isHeap = false;

  while (!isHeap && this.arr.length > 1) {
    const leftIndex = this.left(elementAtIndex);
    const rightIndex = this.right(elementAtIndex);
    const index = (this.arr[leftIndex] < this.arr[rightIndex]) ? leftIndex : rightIndex;

    if (this.arr[index] < this.arr[elementAtIndex]) {
      this.swap(index, elementAtIndex);
      elementAtIndex = index;
    } else {
      isHeap = false;
    }
  }
};

const MaxHeap = function() {
  Heap.call(this);
};

MaxHeap.prototype = Object.create(Heap.prototype);
MaxHeap.prototype.constructor = MaxHeap;

MaxHeap.prototype.add = function(element) {
  this.arr.push(element);

  if (this.arr.length > 1) {
    let isHeap = false;
    let elementAtIndex = this.arr.length - 1;

    while (!isHeap) {
      const parentIndex = this.parent(elementAtIndex);
      const parent = this.arr[parentIndex];
      if (parent < element) {
        this.swap(parentIndex, elementAtIndex);
        elementAtIndex = parentIndex;
      } else {
        isHeap = true;
      }
    }
  }
};

MaxHeap.prototype.remove = function() {
  this.swap(0, this.arr.length - 1);
  this.arr.pop();
  let elementAtIndex = 0;
  let isHeap = false;

  while (!isHeap && this.arr.length > 1) {
    const leftIndex = this.left(elementAtIndex);
    const rightIndex = this.right(elementAtIndex);
    const index = (this.arr[leftIndex] > this.arr[rightIndex]) ? leftIndex : rightIndex;

    if (this.arr[index] > this.arr[elementAtIndex]) {
      this.swap(index, elementAtIndex);
      elementAtIndex = index;
    } else {
      isHeap = false;
    }
  }
};

module.exports = {
  MinHeap,
  MaxHeap
};
