const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
// class BinarySearchTree {

//   constructor() {
//     this._root = null;
//   }

//   root() {
//     return this._root;
//   }

//   add(data) {
//     const node = new Node(data);

//     if (!this._root) {
//       this._root = node;
//     } else {
//       let current = this._root;

//       while (true) {
//         if (data < current.data) {
//           if (!current.left) {
//             current.left = node;
//             break;
//           }

//           current = current.left;
//         } else if (data > current.data) {
//           if (!current.right) {
//             current.right = node;
//             break;
//           }

//           current = current.right;
//         } else {
//           break;
//         }
//       }
//     }
//   }

//   has(data) {
//     let current = this._root;

//     while (current) {
//       if (data === current.data) {
//         return true;
//       }

//       if (data < current.data) {
//         current = current.left;
//       } else {
//         current = current.right;
//       }
//     }

//     return false;
//   }

//   find(data) {
//     let current = this._root;

//     while (current) {
//       if (data === current.data) {
//         return current;
//       }

//       if (data < current.data) {
//         current = current.left;
//       } else {
//         current = current.right;
//       }
//     }

//     return null;
//   }

//   remove(data) {
//     const removeNode = (node, data) => {
//       if (!node) {
//         return null;
//       }

//       if (data === node.data) {
//         if (!node.left && !node.right) {
//           return null;
//         }

//         if (!node.left) {
//           return node.right;
//         }

//         if (!node.right) {
//           return node.left;
//         }

//         let tempNode = node.right;

//         while (tempNode.left) {
//           tempNode = tempNode.left;
//         }

//         node.data = tempNode.data;
//         node.right = removeNode(node.right, tempNode.data);

//         return node;
//       } else if (data < node.data) {
//         node.left = removeNode(node.left, data);

//         return node;
//       } else {
//         node.right = removeNode(node.right, data);

//         return node;
//       }
//     };

//     this._root = removeNode(this._root, data);
//   }

//   min() {
//     let current = this._root;

//     while (current && current.left) {
//       current = current.left;
//     }

//     return current ? current.data : null;
//   }

//   max() {
//     let current = this._root;

//     while (current && current.right) {
//       current = current.right;
//     }

//     return current ? current.data : null;
//   }
// }

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }
// const tree = new BinarySearchTree();

// tree.add(4);
// tree.add(2);
// tree.add(6);
// tree.add(1);
// tree.add(3);
// tree.add(5);
// tree.add(7);

// console.log(tree.root().data); 
// console.log(tree.has(5)); 
// console.log(tree.find(6).data); 
// tree.remove(6);
// console.log(tree.max()); 
// console.log(tree.min()); 

module.exports = {
  BinarySearchTree
};