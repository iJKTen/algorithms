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

  sortedAdd(element) {
    const node = new Node(element);

    if (this.head === null) {
      this.head = node;
    } else {
      if (this.head.data > element) {
        const temp = this.head;
        this.head = node;
        node.next = temp;
      } else {
        let current = this.head;
        let previous;
        let index = 0;

        while (index < this.size) {
          if (current.data > element) {
            node.next = current;
            previous.next = node;
            break;
          } else {
            previous = current;
            current = current.next;
          }
          index++;
        }
      }
    }

    this.size++;
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

  reverse() {
    let current = this.head;
    let newHead = null;

    // Not checking current.next because we want to take the last node
    while (current) {
      const temp = current.next;
      current.next = newHead;
      newHead = current;
      current = temp;
    }

    this.head = newHead;
  }

  isEmpty() {
    return this.size === 0 ? true : false;
  }
}

module.exports = {
  LinkedList
};
