// Log all pairs
// Array of numbers to check for pairs that sum to 8

const nums = [1, 7, 2, 6, 3, 5, 4, 4];

// Function to find and return all unique pairs in the array that sum to 8
const logPairsThatSumTo8 = (array) => {
  // Initialize an empty array to store the resulting pairs
  const pairs = [];

  // Outer loop: iterate through each element in the array
  for (let i = 0; i < array.length; i++) {
    // Inner loop: check all elements that come after the current one
    for (let j = i + 1; j < array.length; j++) {
      // If the sum of the current pair is 8, add it to the results
      if (array[i] + array[j] === 8) {
        pairs.push([array[i], array[j]]);
      }
    }
  }

  // Return the list of valid pairs
  return pairs;
};

// Log the result to the console
console.log(logPairsThatSumTo8(nums));
// Output: [ [ 1, 7 ], [ 2, 6 ], [ 3, 5 ], [ 4, 4 ] ]



// Version using Set
const findUniquePairsThatSumTo8 = (arr) => {
  // A Set to track numbers we've seen so far
  const seen = new Set();

  // A Set to store unique pairs as strings (e.g., "1,7")
  const pairs = new Set();

  // Loop through each number in the array
  for (const num of arr) {
    // Calculate the number needed to reach 8
    const complement = 8 - num;

    // If we've already seen the complement, we have a valid pair
    if (seen.has(complement)) {
      // Sort the pair to avoid duplicates like [7,1] and [1,7]
      const sortedPair = [num, complement].sort((a, b) => a - b).join(',');

      // Add the stringified pair to the Set (only unique pairs will be kept)
      pairs.add(sortedPair);
    }

    // Add the current number to the 'seen' set
    seen.add(num);
  }

  // Convert the string pairs back into arrays of numbers
  return Array.from(pairs).map(pair => pair.split(',').map(Number));
};

// Example usage:
const numbers = [1, 7, 2, 6, 3, 5, 4, 4];
console.log(findUniquePairsThatSumTo8(numbers));
// Output: [ [1, 7], [2, 6], [3, 5], [4, 4] ]




/* 
  Given 2 arrays, create a function that lets a user know (true or false) whether
  these two arrays contain any common items
  For example:
  const array1 = ['a', 'b', 'c', 'x'];
  const array2 = ['z', 'y', 'i'];
  Should return 'false'
  ----------
  const array1 = ['a', 'b', 'c', 'x'];
  const array2 = ['z', 'y', 'x'];
  Should return 'true'

  2 inputs (arrays) - no size limit
  should return 'true' or 'false'
  */




// Naive / Brute-force solution
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];

// Function to check if any two elements in the array add up to a specific sum
const hasPairWithSum = (arr, sum) => {
  let len = arr.length;
  // Loop through each element in the array
  for (let i = 0; i < len - 1; i++) {
    // For each element, loop through the elements that come after it
    for (let j = i + 1; j < len; j++) {
      // Check if the sum of the pair equals the given sum
      if (arr[i] + arr[j] === sum) {
        return true; // If found, return true immediately
      }
    }
  }

  return false; // If no such pair is found, return false
};

console.log(hasPairWithSum(10, 10));
// O(a*b) Time Complexity
// O(1) Space Complexity

// Better optimized solution
// Optimized function to check if any two numbers in the array add up to the given sum
const hasPairWithSum2 = (arr2, sum) => {
  const mySet = new Set(); // Initialize a set to store needed values

  // Loop through each element in the array
  for (let i = 0; i < arr2.length; i++) {
    // If current element is already in the set, we've found a pair
    if (mySet.has(arr2[i])) {
      return true;
    }

    // Otherwise, store the value needed to complete the sum
    // (i.e., sum - current element)
    mySet.add(sum - arr2[i]);
  }

  // If no pair adds up to the sum, return false
  return false;
};

console.log(hasPairWithSum2([6, 4, 3, 2, 1, 7], 9));
// O(a + b) Time Complexity
// O(a) Space Complexity




// Reverse a string
const reverse = (str) => {
  // Check for input
  if (!str || str.length < 2 || typeof str !== 'string') {
    return "Enter a valid string!";
  }
  // Store the reversed string
  const reversed = [];
  // Get last index of the string
  const totalItems = str.length - 1;
  // Loop backwards through the string and push characters into 'reversed' array
  for (let i = totalItems; i >= 0; i--) {
    reversed.push(str[i]);
  }
  console.log(reversed);
  // Join separated characters back a string and return
  return reversed.join('');
};
// Examples:
console.log(reverse("Coding is the game and Dukov is my name"));


// Reverse a string (easy and readable solution)


const reverse2 = (str) => {
  // Check for input
  if (!str || str.length < 2 || typeof str !== 'string') {
    return "Enter a valid string!";
  }
  // Split, reverse and join (using built-in methods) the string together and then return it
  return str.split('').reverse().join('');
}
// Examples:
console.log(reverse2("Coding is difficult but fun"));



// Given two sorted arrays, merge them into one sorted array
const mergeSortedArrays = (sortedOne, sortedTwo) => {
  // Edge case: If one of the arrays is empty, return the other one as the result
  if (sortedOne.length === 0) return sortedTwo;
  if (sortedTwo.length === 0) return sortedOne;
  // Initialize pointers for both arrays
  let pointerOne = 0;
  let pointerTwo = 0;
  // Store merged result
  let merged = [];
  // Loop through both arrays while both pointers are in bounds
  while (pointerOne < sortedOne.length && pointerTwo < sortedTwo.length) {
    // Compare current elements from both arrays
    if (sortedOne[pointerOne] < sortedTwo[pointerTwo]) {
      // Add the smaller value to the merged array
      merged.push(sortedOne[pointerOne]);
      pointerOne++; // Move 'pointerOne' forward
    }
    else {
      merged.push(sortedTwo[pointerTwo]);
      pointerTwo++; // Move 'pointerTwo' forward
    }
  }
  // Add any remaining elements from 'sortedOne'
  while (pointerOne < sortedOne.length) {
    merged.push(sortedOne[pointerOne]);
    pointerOne++;
  }
  // Add any remaining elements from 'sortedTwo'
  while (pointerTwo < sortedTwo.length) {
    merged.push(sortedTwo[pointerTwo]);
    pointerTwo++;
  }
  // Return the merged result
  return merged;
};
// Example:
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));




// Given an array = [2, 5, 1, 2, 3, 5, 1, 2, 4]
// Return the first recurring character

const firstRepeatingChar = (arr) => {
  // Edge case: Empty array
  if (arr.length === 0) return "Array is empty.";
  // Edge case: Only one character in the array
  if (arr.length === 1) return "Only one character in the array.";
  // Create a set to store the 'seen' characters
  let seenChars = new Set();
  // Loop through the array
  for (let i = 0; i < arr.length; i++) {
    if (seenChars.has(arr[i])) {
      return arr[i]; // Return the first repeating character
    }
    else {
      seenChars.add(arr[i]); // Add the character to the set
    }
  }
  // If no repeating character is found, return a message
  return "No repeating characters.";
};
// Example:
console.log(firstRepeatingChar([]));
console.log(firstRepeatingChar(['a']));
console.log(firstRepeatingChar(['a', 'b', 'c', 'b', 'h']));
console.log(firstRepeatingChar(['a', 'b', 'c']));




// Create a linked list class
class LinkedList {
  constructor(value) {
    // Initialize the first node when creating a new LinkedList
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head; // Initially, head and tail point to the same node
    this.length = 1; // Starts with one node
  }

  append(value) {
    // Create a new node to be added at the end
    const newNode = {
      value: value,
      next: null
    };
    console.log(newNode);
    this.tail.next = newNode; // Link the current tail to the new node
    this.tail = newNode; // Update the tail to the new node
    this.length++; // Increase length of the list
    return this; // Return the updated list
  }

  prepend(value) {
    // Create a new node to be added at the beginning
    const newNode = {
      value: value,
      next: null
    };
    newNode.next = this.head; // Point new node's next to the current head
    this.head = newNode; // Update the head to the new node
    this.length++; // Increase the list length
    return this;
  }

  printList() {
    // Convert the linked list into an array of values
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index, value) {
    // If index is out of bounds, add the node at the end
    if (index >= this.length) {
      console.log('yes');
      return this.append(value);
    }

    // Create the new node
    const newNode = {
      value: value,
      next: null
    };

    // Find the node before the desired index
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next; // Temporarily store the next node
    leader.next = newNode; // Link leader to new node
    newNode.next = holdingPointer; // Link new node to the next node
    this.length++; // Increase length
    return this.printList();
  }

  traverseToIndex(index) {
    // Traverse the list to get the node at the specified index
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    // Find the node before the one we want to remove
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next; // Bypass the unwanted node
    this.length--; // Decrease length
    return this.printList();
  }

  reverse() {
    // Edge case: list has only one node
    if (!this.head.next) {
      return this.head;
    }

    let first = this.head;
    this.tail = this.head; // Update tail to the original head
    let second = first.next;

    while (second) {
      const temp = second.next; // Store next node
      second.next = first; // Reverse pointer
      first = second; // Move first forward
      second = temp; // Move second forward
    }

    this.head.next = null; // Old head is now tail; set its next to null
    this.head = first; // Set head to the new front of the list
    return this.printList();
  }
}

// Examples:
let myLinkedList = new LinkedList(10);
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
myLinkedList.printList()
myLinkedList.insert(2, 99)
myLinkedList.insert(20, 88)
myLinkedList.printList()
myLinkedList.remove(2)
myLinkedList.reverse()


// Node class to represent each element in the stack
class Node {
  constructor(value) {
    this.value = value; // The data value
    this.next = null;   // Pointer to the next node (below this one in the stack)
  }
};

// Stack class implementing LIFO (Last In, First Out) behavior using linked lists
class Stack {
  constructor() {
    this.top = null;     // Top of the stack
    this.bottom = null;  // Bottom of the stack (only used when stack is empty or has one item)
    this.length = 0;     // Number of items in the stack
  }

  // Returns the top item without removing it
  peek() {
    return this.top;
  }

  // Pushes a new value onto the top of the stack
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      // If stack is empty, top and bottom point to the new node
      this.top = newNode;
      this.bottom = newNode;
    } else {
      // If stack has elements, place the new node on top
      const holdingPointer = this.top; // Temporarily store the current top
      this.top = newNode;              // Set new node as the new top
      this.top.next = holdingPointer;  // Link new top to the previous top
    }
    this.length++; // Increase stack size
    return this;
  }

  // Removes the top item from the stack
  pop() {
    if (!this.top) {
      // If stack is empty, return null
      return null;
    }

    if (this.top === this.bottom) {
      // If there's only one item, reset bottom
      this.bottom = null;
    }

    const holdingPointer = this.top;   // Store the current top
    this.top = this.top.next;          // Move top pointer down
    this.length--;                     // Decrease stack size
    return this;                       // Return the updated stack
  }
};

// Examples:
const myStack = new Stack();
console.log(myStack.push('google'));
console.log(myStack.push('udemy'));
console.log(myStack.push('discord'));
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());


// Stack class using arrays
class Stack2 {
  constructor() {
    // Initialize an empty array to store stack elements
    this.array = [];
  }

  // Return the top element of the stack without removing it
  peek() {
    return this.array[this.array.length - 1];
  }

  // Add a new value to the top of the stack
  push(value) {
    this.array.push(value);
    return this; // Return the stack instance for method chaining
  }

  // Remove the top element from the stack
  pop() {
    this.array.pop();
    return this; // Return the stack instance for method chaining
  }
};

const myStack2 = new Stack();
console.log(myStack.push('google'));
console.log(myStack.push('udemy'));
console.log(myStack.push('discord'));
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());

// Node class used internally by the Queue
// Create a queue class
class Queue {
  constructor() {
    this.first = null; // Points to the front of the queue
    this.last = null; // Points to the end of the queue
    this.length = 0; //Number of elements in the queue
  }
  // Returns the element at the front of the queue without removing it
  peek() {
    return this.first;
  }
  // Adds a new element to the end of the queue
  enqueue(value) {
    const newNode = new Node(value);
    // If the queue is empty, both first and last point to the new node
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    }
    // Otherwise, link the new node to the end and update last
    else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++; // Increases the queue length
    return this;  // Return the queue to allow chaining
  }
  // Removes the element at the front of the queue
  dequeue() {
    // If the queue is empty, return null
    if (!this.first) {
      return null;
    }
    // If there's only one element, set the last to null
    if (this.first === this.last) {
      this.last = null;
    }
    // Move the first pointer to the next node
    this.first = this.first.next;
    this.length--;  // Decrease the queue length
    return this;  // Return the queue to allow chaining
  }
};
// Examples:
const myQueue = new Queue();
console.log(myQueue.peek());
console.log(myQueue.enqueue('George'));
console.log(myQueue.enqueue('Jack'));
console.log(myQueue.enqueue('Peter'));
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());

// Create a queue using stacks
class StackedQueue {
  constructor() {
    this.first = []; // Stack used when dequeuing or peeking
    this.last = []; // Stack used when enqueuing
  }
  // Adds an element to the queue
  enqueue(value) {
    // Move all elements from 'first' to 'last' stack to maintain correct order
    const length = this.first.length;
    for (let i = 0; i < length; i++) {
      this.last.push(this.first.pop());
    }
    this.last.push(value); // Push the new value to the 'last' stack
    return this; // Return the queue for chaining
  }
  // Removes the element at the front of the queue
  dequeue() {
    // Move all elements from 'last' to 'first' to access the oldest element
    const length = this.last.length;
    for (let i = 0; i < length; i++) {
      this.first.push(this.last.pop());
    }
    this.first.pop(); // Remove the element from the front of the queue (top of 'first')
    return this;  // Return the queue for chaining
  }
  // Returns the element at the front of the queue without removing it 
  peek() {
    // If first is empty, move everything from last to first (like in dequeue)
    if (this.first.length === 0) {
      while (this.last.length > 0) {
        this.first.push(this.last.pop());
      }
    }
    // Peek the last element from first — that’s the front of the queue
    return this.first[this.first.length - 1];
  }

};
// Examples:
const stacked = new StackedQueue();
console.log(stacked.enqueue('apples'));
console.log(stacked.enqueue('bananas'));
console.log(stacked.enqueue('cherries'));
console.log(stacked.dequeue());
console.log(stacked.peek());

// Create a BST (binary search tree)
// Node class for creating new nodes in the tree
class Node2 {
  constructor(value) {
    this.left = null;  // Left child
    this.right = null; // Right child
    this.value = value; // Node value
  }
};

// Binary Search Tree implementation
class BinarySearchTree {
  constructor() {
    this.root = null; // Initialize empty tree
  }

  // Insert a new value into the BST
  insert(value) {
    const newNode = new Node2(value);
    if (this.root === null) {
      this.root = newNode; // First node becomes the root
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          // Go left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          // Go right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  // Lookup a value in the BST
  lookup(value) {
    if (!this.root) {
      return false; // Tree is empty
    }

    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left; // Move left
      } else if (value > currentNode.value) {
        currentNode = currentNode.right; // Move right
      } else if (currentNode.value === value) {
        return currentNode; // Found the value
      }

      return false; // This line should be outside the while loop
    }
  }

  // Remove a value from the BST
  remove(value) {
    if (!this.root) {
      return false; // Tree is empty
    }

    let currentNode = this.root;
    let parentNode = null;

    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left; // Move left
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right; // Move right
      } else if (currentNode.value === value) {
        // Found the node to remove

        // Case 1: No right child
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left; // Remove root
          } else {
            // Reassign child pointer on parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          // Case 2: Right child with no left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right; // Remove root
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          // Case 3: Right child with a left child
        } else {
          // Find the leftmost node in the right subtree
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;

          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          // Reassign leftmost's parent's left to leftmost's right
          leftmostParent.left = leftmost.right;

          // Replace current node with leftmost
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost; // Replace root
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true; // Removal complete
      }
    }
  }
  breadthFirstSearch() {
    // Start from the root of the binary search tree
    let currentNode = this.root;
    // This will store the values in BFS order
    let list = [];
    // Queue to keep track of nodes to visit next
    let queue = [];
    // Begin by adding the root node to the queue
    queue.push(currentNode);
    // Continue until there are no more nodes to visit
    while (queue.length > 0) {
      // Remove the first node from the queue and set it as the current node
      currentNode = queue.shift();
      // Print the value of the current node (optional, useful for debugging)
      console.log(currentNode.value);
      // Add the value of the current node to the result list
      list.push(currentNode.value);
      // If the current node has a left child, add it to the queue
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      // If the current node has a right child, add it to the queue
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    // Return the list of values visited in BFS order
    return list;
  }
  BFSRecursive(queue, list) {
    if (!queue.length) {
      return list;
    }
    let currentNode = queue.shift();
    list.push(currentNode.value);
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
    return this.BFSRecursive(queue, list);
  }
  DFSInOrder() {
    return traverseInOrder(this.root, []);
  }
  DFSPostOrder() {
    return traversePostOrder(this.root, []);
  }
  DFSPreOrder() {
    return traversePreOrder(this.root, []);
  }
}

const traverseInOrder = (node, list) => {
  console.log(node.value);
  if (node.left) {
    traverseInOrder(node.left, list);
  }
  list.push(node.value);
  if (node.right) {
    traverseInOrder(node.right, list);
  }
  return list;
};
const traversePreOrder = (node, list) => {
  list.push(node.value);
  if (node.left) {
    traversePreOrder(node.left, list);
  }
  if (node.right) {
    traversePreOrder(node.right, list);
  }
  return list;
}
const traversePostOrder = (node, list) => {
  if (node.left) {
    traversePostOrder(node.left, list);
  }
  if (node.right) {
    traversePostOrder(node.right, list);
  }
  list.push(node.value);
  return list;
}


// Examples:
const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
// tree.breadthFirstSearch();
// tree.BFSRecursive([tree.root], []);
console.log(tree.DFSInOrder());
console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder());

const traverse = (node) => {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
// console.log(JSON.stringify(traverse(tree.root)));


// Create an undirected graph
class Graph {
  constructor() {
    // Initialize the number of nodes to 0
    this.numberOfNodes = 0;
    // This object stores each node and its list of adjacent (connected) nodes
    this.adjacentList = {};
  }
  // Adds a new node (vertex) to the graph
  addVertex(node) {
    // Create an empty array for the node's connections 
    this.adjacentList[node] = [];
    // Increment the count of nodes
    this.numberOfNodes++;
  }
  // Adds an edge (connection) between to nodes
  addEdge(node1, node2) {
    // Push node2 into node1's list of connections
    this.adjacentList[node1].push(node2);
    // Push node1 into node2's list of connections
    this.adjacentList[node2].push(node1);
  }
  // Displays all connections in the graph
  showConnections() {
    // Get all the keys (node names) from the adjacency list
    const allNodes = Object.keys(this.adjacentList);
    // Loop through each node
    for (let node of allNodes) {
      // Get all the nodes connected to the current node
      let nodeConnections = this.adjacentList[node];
      // Create a string of all connected nodes
      let connections = nodeConnections.join(' ');
      // Log the node and its connections
      console.log(`${node} --> ${connections}`);
    }
  }
}
const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addEdge('3', '1');
myGraph.addEdge('3', '4');
myGraph.addEdge('4', '2');
myGraph.addEdge('4', '5');
myGraph.addEdge('1', '2');
myGraph.addEdge('3', '4');
myGraph.addEdge('0', '2');
myGraph.addEdge('6', '5');
myGraph.showConnections();

