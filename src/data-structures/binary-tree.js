/* eslint-disable require-jsdoc */
const findPositionToAdd = (node, value) => {
  let nodeFound;
  while (node) {
    if (value > node.data) {
      if (node.right) {
        node = node.right;
      } else {
        nodeFound = node;
        break;
      }
    } else if (value < node.data) {
      if (node.left) {
        node = node.left;
      } else {
        nodeFound = node;
        break;
      }
    }
  }
  return nodeFound;
};

const bfs = (node) => {
  const stack = [node.root];
  console.log(node.root.data);

  while (stack.length > 0) {
    const node = stack.shift();
    if (node.left && node.right) {
      console.log(`${node.left.data} ${node.right.data}`);
      stack.unshift(node.right);
      stack.unshift(node.left);
    }
  }
};

/* Root, Left, Right
Also known as preorder traversal
*/
const dfs = (node) => {
  if (node) {
    console.log(node.data);
    dfs(node.left);
    dfs(node.right);
  }
};

/* Left, Root, Right */
const inOrderTraversal = (node) => {
  if (node !== undefined || node !== null) {
    if (node.left) {
      inOrderTraversal(node.left);
    }
    console.log(node.data);
    if (node.right) {
      inOrderTraversal(node.right);
    }
  }
};

/* Left, Right, Root */
const postOrderTraversal = (node) => {
  if (node !== undefined || node !== null) {
    if (node.left) {
      postOrderTraversal(node.left);
    }
    if (node.right) {
      postOrderTraversal(node.right);
    }
    console.log(node.data);
  }
};

const isBST = (node) => {
  let prev = null;
  const checkIsBST = (node) => {
    if (node === null || node === undefined) {
      return true;
    }

    if (!checkIsBST(node.left)) {
      return false;
    }

    if (prev != null) {
      console.log(`prev = ${prev.data}, node = ${node.data}`);
    }

    if (prev != null && node.data < prev.data) {
      return false;
    }

    prev = node;
    return checkIsBST(node.right);
  };
  return checkIsBST(node.root);
};

const sumOfNodes = (node, sum) => {
  const results = [];

  const doSum = (node, sum) => {
    if (node === null) {
      return;
    }

    sum += node.data;
    doSum(node.left, sum);

    if (node.left === null && node.right === null) {
      results.push(sum);
    }

    doSum(node.right, sum);
  };

  doSum(node, sum);
  return results;
};

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
    this.size = 0;
    this.left = null;
  }

  add(element) {
    const node = new Node(element);
    if (this.root === null) {
      this.root = node;
    } else {
      const foundNode = findPositionToAdd(this.root, element);
      if (element > foundNode.data) {
        foundNode.right = node;
      } else {
        foundNode.left = node;
      }
    }

    this.size++;
  }

  traverseLevelPerLine() {
    console.log(this.root.data);
    let current = this.root;
    const stack = [current];
    while (stack.length > 0) {
      current = stack.shift();
      if (current.left && current.right) {
        console.log(`${current.left.data} ${current.right.data}`);
        stack.unshift(current.right);
        stack.unshift(current.left);
      }
    }
  }

  traverseInPreOrder() {
    dfs(this.root);
  }

  traverseInOrder() {
    inOrderTraversal(this.root);
  }

  traversePostOrder() {
    postOrderTraversal(this.root);
  }

  sumNode() {
    return sumOfNodes(this.root, 0);
  }
}

// module.exports = {
//   BinaryTree
// };

const tree = new BinaryTree();
tree.add(25);
console.log(JSON.stringify(tree));
tree.add(10);
console.log(JSON.stringify(tree));
tree.add(30);
console.log(JSON.stringify(tree));
tree.add(5);
console.log(JSON.stringify(tree));
tree.add(11);
console.log(JSON.stringify(tree));
tree.add(35);
console.log(JSON.stringify(tree));
tree.add(28);
console.log(JSON.stringify(tree));
console.log(isBST(tree));
console.log(tree.traverseLevelPerLine());
console.log(bfs(tree));
console.log(tree.traverseInPreOrder());
console.log(tree.sumNode());
