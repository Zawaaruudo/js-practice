/*
//array doubler
const doubleNumbers = (arr) => arr.map(num => num * 2);

// Example usage:
console.log(doubleNumbers([1, 2, 3])); // [2, 4, 6]
console.log(doubleNumbers([5, -3, 10])); // [10, -6, 20]
console.log(doubleNumbers([])); // []


//array sum
const sumArray = (arr) => {
  let arraySum = 0;
  for (let i = 0; i < arr.length; i++) {
    arraySum += arr[i];
  }
  return arraySum;
};
sumArray([1, 2, 3]); // Output: 6
sumArray([-1, 1, 2]); // Output: 2
sumArray([]); // Output: 0

//array length 
const stringLengths = (arr) => {
  let strArr = [];
  for (let i = 0; i < arr.length; i++) {
    strArr.push(arr[i].length);
  }
  return strArr;
}
console.log(stringLengths(["hello", "world"])); // Output: [5, 5]
console.log(stringLengths(["JavaScript", "is", "fun"])); // Output: [10, 2, 3]
console.log(stringLengths([])); // Output: []
*/
/*
const filterEvenNumbers = (arr) => {
  let evenNums = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNums.push(arr[i]);
    }
  }
  return evenNums;
};
console.log(filterEvenNumbers([1, 2, 3, 4, 5])); // Output: [2, 4]
console.log(filterEvenNumbers([10, 15, 20, 25])); // Output: [10, 20]
console.log(filterEvenNumbers([1, 3, 5])); // Output: []
*/

/*
const findLargestNumber = (arr) => {
  let largestNum = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNum) {
      largestNum = arr[i];
    }
  }
  return largestNum;
}
console.log(findLargestNumber([1, 2, 3, 4, 5])); // Output: 5
console.log(findLargestNumber([-1, -2, -3])); // Output: -1
console.log(findLargestNumber([10, 15, 2, 30, 25])); // Output: 30
console.log(findLargestNumber([])); // Output: -Infinity
*/

/*
const squareNumbers = (arr) => {
  let squaredNumber = [];
  for (let i = 0; i < arr.length; i++) {
    squaredNumber.push(arr[i] ** 2);
  }
  return squaredNumber;
}
console.log(squareNumbers([1, 2, 3, 4, 5])); // Output: [1, 4, 9, 16, 25]
console.log(squareNumbers([-2, 0, 3])); // Output: [4, 0, 9]
console.log(squareNumbers([])); // Output: []

const sumEvenNumbers = (array) => {
  let evenSum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenSum += array[i];
    }
  }
  return evenSum;
}
console.log(sumEvenNumbers([1, 2, 3, 4, 5])); // Output: 6 (2 + 4)
console.log(sumEvenNumbers([10, 15, 20, 25])); // Output: 30 (10 + 20)
console.log(sumEvenNumbers([1, 3, 5, 7])); // Output: 0 (no even numbers)
console.log(sumEvenNumbers([])); // Output: 0
*/

/*
const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}


const filterPrimeNumbers = (arr) => {
  let primeNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      primeNumbers.push(arr[i]);
    }
  }
  return primeNumbers;
};
console.log(filterPrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Output: [2, 3, 5, 7]
console.log(filterPrimeNumbers([11, 13, 17, 19, 23])); // Output: [11, 13, 17, 19, 23]
console.log(filterPrimeNumbers([4, 6, 8, 10])); // Output: []
console.log(filterPrimeNumbers([])); // Output: []
*/

const findLongestWord = (sentence) => {
  if (!sentence) return ""; // Handle empty input
  const words = sentence.split(" "); // Split sentence into words
  let longestWord = ""; // Initialize variable to hold the longest word

  for (let i = 0; i < words.length; i++) {
    // Check if the current word is longer than the longest found so far
    if (words[i].length > longestWord.length) {
      longestWord = words[i]; // Update longestWord
    }
  }

  return longestWord; // Return the longest word
};

// Example usage:
console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); // Output: "jumps"
console.log(findLongestWord("Coding is fun and challenging")); // Output: "challenging"
console.log(findLongestWord("I love JavaScript")); // Output: "JavaScript"
console.log(findLongestWord("")); // Output: ""

const findUniqueElements = (arr) => {
  const elementCount = {}; // Object to store the count of each element

  // Count occurrences of each element
  for (let i = 0; i < arr.length; i++) {
    elementCount[arr[i]] = (elementCount[arr[i]] || 0) + 1;
  }

  // Create an array of unique elements
  const uniqueElements = [];
  for (const key in elementCount) {
    if (elementCount[key] === 1) {
      uniqueElements.push(Number(key)); // Push the unique elements to the result array
    }
  }

  return uniqueElements; // Return the array of unique elements
};

// Example usage:
console.log(findUniqueElements([1, 2, 3, 2, 4, 5, 1])); // Output: [3, 4, 5]
console.log(findUniqueElements([5, 5, 6, 7, 8, 8])); // Output: [6, 7]
console.log(findUniqueElements([1, 1, 1])); // Output: []
console.log(findUniqueElements([])); // Output: []
