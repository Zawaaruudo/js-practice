// 1. Identify the base case
// 2. Identify the recursive case
// 3. Get closer and closer and return when needed. Usually you have 2 returns
let counter = 0;
const inception = () => {
  console.log(counter);
  if (counter > 3) {
    return 'done!';
  }
  counter++;
  return inception();
}
inception();

// Write two functions that find the factorial of any number.
// One should be recursive, the other one should just use a for loop.

// Recurisve version
const factorialRecursive = (number) => {
  // Base case: if the number is 2, return 2 (since 2! = 2)
  if (number === 2) {
    return 2;
  }
  // Recursive case: multiply the current number by the factorial of the previous number
  return number * factorialRecursive(number - 1);
};
// Example:
console.log(factorialRecursive(5));

// Iterative version
const factorialLoop = (number) => {
  // Start with an initial answer of 1
  let answer = 1;
  // Optional check: if the number is 2, directly assign 2 (not necessary due to the loop below)
  if (number === 2) {
    answer = 2;
  }
  // Loop from 2 up to the given number
  for (let i = 2; i <= number; i++) {
    // Multiply the current answer by the loop index to build the factorial
    answer = answer * i;
  }
  // Return the factorial result
  return answer;
};
// Example:
console.log(factorialLoop(5));

/* 
  Given a number (n) return the index of value of the Fibonacci sequence
  where the sequence is: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144....
  the pattern of the sequence is that each value is the sum of the previous 2 values
  that means for n = 5 --> 2 + 3 = 5
*/
// Iterative version
const fibonacci = (n) => {
  // Initialize an array with the first two Fibonacci numbers
  let arr = [0, 1];
  // Start building the sequence from index 2 up to n
  for (let i = 2; i < n + 1; i++) {
    // Each new number is the sum of the two previous numbers
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  // Return the nth Fibonacci number
  return arr[n];
};
// Example:
console.log(fibonacci(8));

// Recursive version
const fibonacciRecursive = (n) => {
  // Base case: if n is 0 or 1, return n (since the first two Fibonacci numbers are 0 and 1)
  if (n < 2) {
    return n;
  }
  // Recursive case: return the sum of the two preceding Fibonacci numbers
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
};
// Example:
console.log(fibonacciRecursive(8));

// Cache (memoizetion) version
let calculations = 0;
const fibonacciMaster = () => {
  let cache = {};
  return function fib(n) {
    calculations++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  }
}
const fasterFib = fibonacciMaster();
console.log('DP', fasterFib(10));
console.log(`We did ${calculations} calculations`);


// Create a function to reverse a string
const reverseString = (str) => {
  // Convert the input string into an array of characters
  let arrayStr = str.split("");
  // This array will hold the reversed characters 
  let reversedArray = [];
  // Recursive helper function to pop characters from the original array
  // and push them into the reversed array
  const addToArray = (array) => {
    // Base case: if the array is not empty, continue reversing
    if (array.length > 0) {
      // Remove the last character and add it to the reversed array
      reversedArray.push(array.pop());
      // Recursively call the function on the remaining array
      addToArray(array);
    }
    // Once the array is empty, stop the recursion
    return;
  }
  // Start the recursive reversal
  addToArray(arrayStr);
  // Join the reversed array back into a string and return it
  return reversedArray.join("");
};
console.log(reverseString("yoyo master"));

// Create a function to reverse a string using recursion
const recursiveReverse = (str) => {
  // Base case: if the string is empty, return an empty string
  if (str === "") {
    return "";
  }
  else {
    // Recursive case: 
    // Call the function on the substring starting from index 1 (i.e., remove the first character)
    // After the recursion returns, append the first character to the end
    return recursiveReverse(str.substr(1)) + str.charAt(0);
  }
};
console.log(recursiveReverse("yoyo master"));


// Create a bubble sorting function
// Define an unsorted array of numbers
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
// Define the bubble sort function to sort the array in ascending order
const bubbleSort = (array) => {
  // Get the length of the array
  const length = array.length;
  // Outer loop: repeat the process for each element in the array
  for (let i = 0; i < length; i++) {
    // Inner loop: compare adjacent elements
    for (let j = 0; j < length; j++) {
      // If the current element is greater than the next one, swap them
      if (array[j] > array[j + 1]) {
        // Temporarily store the current value
        let temp = array[j];
        // Swap all elements
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
}
bubbleSort(numbers);
console.log(numbers);

// Create a selection sorting function 
// We use the numbers array that we defined earlier
// Define the selection sort function to sort an array in ascending order
const selectionSort = (array) => {
  // Get the length of the array
  const length = array.length;

  // Outer loop: iterate through each element of the array
  for (let i = 0; i < length; i++) {
    // Assume the current index is the minimum
    let min = i;
    // Temporarily store the current value (to use for swapping later)
    let temp = array[i];
    // Inner loop: find the actual minimum value in the remaining unsorted part
    for (let j = i + 1; j < length; j++) {
      // Update the index of the minimum value if a smaller value is found
      if (array[j] < array[min]) {
        min = j;
      }
    }
    // Swap the current element with the found minimum element
    array[i] = array[min];
    array[min] = temp;
  }
  // Return the sorted array
  return array;
};

console.log(selectionSort(numbers));

// Create an insertion sorting function 
// We use the numbers array that we defined earlier
// Define the insertion sort function to sort an array in ascending order
const insertionSort = (array) => {
  // Get the length of the array
  const length = array.length;

  // Loop through each element in the array starting from index 0
  for (let i = 0; i < length; i++) {
    // Case 1: If the current element is smaller than the first element,
    // move it to the front of the array
    if (array[i] < array[0]) {
      // Remove the element at index i and insert it at the beginning (index 0)
      array.unshift(array.splice(i, 1)[0]);
    } else {
      // Case 2: Find the correct position within the sorted portion of the array
      for (let j = 1; j < i; j++) {
        // If the current element is greater than the one before j,
        // and smaller than the one at j, insert it at position j
        if (array[i] > array[j - 1] && array[i] < array[j]) {
          // Remove the element from index i and insert it at index j
          array.splice(j, 0, array.splice(i, 1)[0]);
        }
      }
    }
  }
};

insertionSort(numbers);
console.log(numbers);

// Create a merge sorting function
// We use the numbers array that we defined earlier
// Merge Sort function - recursively sorts the input array
const mergeSort = (array) => {
  // Base case: if the array has only one element, it's already sorted
  if (array.length === 1) {
    return array;
  }

  // Get the length of the array
  const length = array.length;

  // Find the middle index to divide the array into two halves
  const middle = Math.floor(length / 2);

  // Slice the array into left and right halves
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  // Recursively split and merge the halves
  return merge(mergeSort(left), mergeSort(right));
};

// Helper function to merge two sorted arrays
const merge = (left, right) => {
  const result = [];       // Final merged array
  let leftIndex = 0;       // Pointer for left array
  let rightIndex = 0;      // Pointer for right array

  // Compare elements from both arrays and merge them in sorted order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);  // Push smaller element
      leftIndex++;                   // Move left pointer
    } else {
      result.push(right[rightIndex]); // Push smaller element
      rightIndex++;                   // Move right pointer
    }
  }

  // Concatenate any remaining elements (one of the arrays may still have items)
  return result
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
};

// Create quick sorting function
// We use the numbers array that we defined earlier
// Quick sort implementation using recursion and the partition method
const quickSort = (array, left, right) => {
  // Save the length of the array in a variable
  const len = array.length;
  // Define a pivot point for comparison (this will be assigned later)
  let pivot;
  // Define partitionIndex to keep track of the position for the pivot
  let partitionIndex;
  // Recursive base case: 
  if (left < right) {
    // Use the rightmost element as pivot
    pivot = right;
    // Get the partition index where the pivot ends up
    partitionIndex = partition(array, pivot, left, right);
    // Recursively apply quickSort to the left subarray
    quickSort(array, left, partitionIndex - 1);
    // Recursively apply quickSort to the right subarray
    quickSort(array, partitionIndex + 1, right);
  }
  // return the sorted array
  return array;
}
// Partition function to place elements smaller than the pivot on the left
// and elements greater than the pivot on the right
const partition = (array, pivot, left, right) => {
  let pivotValue = array[pivot]; // Get pivot value
  let partitionIndex = left; // Set partitionIndex to left
  // Iterate from left to one before the pivot
  for (let i = left; i < right; i++) {
    // If current element is less than pivot, swap it to the left side
    if (array[i] < pivotValue) {
      swap(array, i, partitionIndex);
      partitionIndex++;
    }
  }
  // Swap the pivot element to its correct position
  swap(array, right, partitionIndex);
  // Return the partition index
  return partitionIndex;
}
// Swap function to exchange values at two indices in the array
const swap = (array, firstIndex, secondIndex) => {
  let temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}
quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);

// Sorting
// 1. Sort 10 schools around your house by distance: INSERTION SORT
// 2. Sort listings on eBay by the current bid amount: RADIX or COUNTING SORT
// 3. Sport scores on ESPN: QUICK SORT
// 4. Massive database(can't fit all into memory) needs to sort through past year's user data: MERGE SORT
// 5. Almost sorted Udemy review data needs to update and add 2 new reviews: INSERTION SORT
// 6. Temperature records for the past 50 years in Canada: RADIX or COUNTING SORT / QUICK SORT if decimal
// 7. Large username database needs to be sorted. Data is very random: QUICK SORT
// 8. You want to teach sorting for the first time: BUBBLE SORT or SELECTION SORT

// Searching / Traversal
// If you know a solution is not far from the root of the tree: BREADTH-FIRST SEARCH (BFS)
// If the tree is very deep and solutions are rare: BREADTH-FIRST SEARCH (BFS / DFS will take too long)
// If the tree is very wide: DEPTH-FIRST SEARCH (DFS / BFS will need too much memory)
// If solutions are frequent but located deep in the tree: DEPTH-FIRST SEARCH (DFS)
// Determining wether a path exists between two nodes: DEPTH-FIRST SEARCH (DFS)
// Finding the shortest path: BREADTH-FIRST SEARCH (BFS)

const addTo80 = (n) => {
  console.log('long time');
  return n + 80;
}

let cache = {};
const memoizedAddTo80 = (n) => {
  if (n in cache) {
    return cache[n];
  } else {
    console.log('long time');
    cache[n] = n + 80;
    return cache[n];
  }
}
console.log('1', memoizedAddTo80(5));
console.log('2', memoizedAddTo80(5));
