/* eslint-disable require-jsdoc */
const Graph = function() {
  this.adjacencyList = {};
};

Graph.prototype.addEdge = function(v, w) {
  if (this.adjacencyList[v] === undefined) {
    this.adjacencyList[v] = [w];
  } else {
    this.adjacencyList[v].push(w);
  }
};

Graph.prototype.bfs = function(node) {
  const visited = [node];
  const queue = [node];

  while (queue.length > 0) {
    const tempNode = queue.shift();
    console.log(tempNode);

    const neighbours = this.adjacencyList[tempNode];

    if (neighbours !== undefined) {
      neighbours.forEach((element) => {
        if (!visited.includes(element)) {
          visited.push(element);
          queue.push(element);
        }
      });
    }
  }
};

Graph.prototype.dfs = function(node) {
  const visited = [];

  const recursiveDFS = (vertex) => {
    visited.push(vertex);
    console.log(vertex);

    const neighbours = this.adjacencyList[vertex];
    if (neighbours !== undefined) {
      neighbours.forEach((element) => {
        if (!visited.includes(element)) {
          recursiveDFS(element);
        }
      });
    }
  };

  recursiveDFS(node);
};

Graph.prototype.vertices = function() {
  return Object.keys(this.adjacencyList);
};

Graph.prototype.print = function() {
  console.log(this.adjacencyList);
};

module.exports = {
  Graph
}

const obj = new Graph();
obj.addEdge('A', 'B');
obj.addEdge('A', 'D');
obj.addEdge('A', 'E');
obj.addEdge('B', 'C');
obj.addEdge('D', 'E');
obj.addEdge('E', 'F');
obj.addEdge('E', 'C');
obj.addEdge('C', 'F');
console.log('---print---');
obj.print();
console.log('---bfs---');
obj.bfs('A');
console.log('---dfs---');
obj.dfs('A');
console.log(obj.vertices());
  