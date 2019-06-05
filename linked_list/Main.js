const LinkedList = require('./LinkedList');
const Node = require('./Node');

// const LinkedListMenu = require('./LinkedListMenu')(); 

// instantiate linked list
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

const node4 = new Node(4);
linkedList.insert(2, node4);

linkedList.print(true);

linkedList.delete(4);
console.log('\n\nAfter deleting\n\n');

linkedList.print(true);

