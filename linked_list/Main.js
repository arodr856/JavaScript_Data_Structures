const LinkedList = require('./LinkedList');
const Node = require('./Node');

const linkedList = new LinkedList();
const node1 = new Node(1);
linkedList.addNode(node1);

// console.log(linkedList);

const node2 = new Node(2);
linkedList.addNode(node2);
// console.log(linkedList);

const node3 = new Node(3);
linkedList.addNode(node3);
// console.log(linkedList);

console.log(linkedList.tail.previous);

linkedList.print();