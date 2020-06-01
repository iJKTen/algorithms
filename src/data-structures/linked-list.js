/* eslint-disable require-jsdoc */
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    const node = new Node(element);

    if (this.head == null) {
      this.head = node;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
  }

  insertAt(element, indexAt) {
    if (indexAt > 0 && indexAt > this.size) {
      return false;
    }

    const node = new Node(element);
    let current = this.head;
    let previous;
    let index = 0;

    while (index < indexAt) {
      index++;
      previous = current;
      current = current.next;
    }

    node.next = current;
    previous.next = node;
    this.size++;

    return true;
  }

  removeFrom(indexAt) {
    if (indexAt > 0 && indexAt > this.size) {
      return false;
    }

    let current = this.head;
    let previous;
    let index = 0;

    while (index < indexAt) {
      index++;
      previous = current;
      current = current.next;
    }

    previous.next = current.next;
    this.size--;

    return true;
  }

  remove(element) {
    let current = this.head;
    let previous;

    while (current.next) {
      if (current.data === element) {
        break;
      }
      previous = current;
      current = current.next;
    }

    previous.next = current.next;
    this.size--;
  }

  indexOf(element) {
    let current = this.head;
    let index = 0;

    while (current.next) {
      if (current.data === element) {
        break;
      }

      current = current.next;
      index++;
    }

    return index;
  }

  isEmpty() {
    return this.size === 0 ? true : false;
  }
}

module.exports = {
  LinkedList
};
