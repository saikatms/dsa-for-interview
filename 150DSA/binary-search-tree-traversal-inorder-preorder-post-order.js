// Traverse left subtree
// Visit the root and print the data.
// Traverse the right subtree

// JavaScript code to implement the approach
class Node {
  constructor(v) {
    this.left = null;
    this.right = null;
    this.data = v;
  }
}

// Inorder Traversal
function printInorder(root) {
  if (root) {
    // Traverse left subtree
    printInorder(root.left);

    // Visit node
    console.log(root.data);

    // Traverse right subtree
    printInorder(root.right);
  }
}

// Driver code
if (true) {
  // Build the tree
  let root = new Node(100);
  root.left = new Node(20);
  root.right = new Node(200);
  root.left.left = new Node(10);
  root.left.right = new Node(30);
  root.right.left = new Node(150);
  root.right.right = new Node(300);

  // Function call
  console.log("Inorder Traversal:");
  printInorder(root);
}

// This code is contributed by akashish__

class Node {
  constructor(v) {
    this.data = v;
    this.left = this.right = null;
  }
}

function printPreOrder(node) {
  if (node == null) return;

  console.log(node.data + " ");

  printPreOrder(node.left);
  printPreOrder(node.right);
}

// Visit the root and print the data.
// Traverse left subtree
// Traverse the right subtree

// Build the tree
let root = new Node(100);
root.left = new Node(20);
root.right = new Node(200);
root.left.left = new Node(10);
root.left.right = new Node(30);
root.right.left = new Node(150);
root.right.right = new Node(300);

console.log("Preorder Traversal: ");
printPreOrder(root);

// This code is contributed by akashish__

class Node {
  constructor(v) {
    this.data = v;
    this.left = null;
    this.right = null;
  }
}

// Traverse left subtree
// Traverse the right subtree
// Visit the root and print the data.

// Preorder Traversal
function printPostOrder(node) {
  if (node === null) {
    return;
  }

  // Traverse left subtree
  printPostOrder(node.left);

  // Traverse right subtree
  printPostOrder(node.right);

  // Visit Node
  console.log(node.data, (end = " "));
}

// Driver code
// Build the tree
let root = new Node(100);
root.left = new Node(20);
root.right = new Node(200);
root.left.left = new Node(10);
root.left.right = new Node(30);
root.right.left = new Node(150);
root.right.right = new Node(300);

// Function call
console.log("Postorder Traversal: ", (end = ""));
printPostOrder(root);

// This code is contributed by akashish__
