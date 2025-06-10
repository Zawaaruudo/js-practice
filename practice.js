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

/*
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
*/

// Find the mode:
/*
const findMode = (arr) => {
  const freqCounter = {}; // Step 1: Create frequency counter

  // Count occurrences of each number
  arr.forEach(num => {
    freqCounter[num] = (freqCounter[num] || 0) + 1;
  });

  let mode = null;
  let maxCount = 0;

  // Step 2: Find the number with the highest frequency
  for (let num in freqCounter) {
    if (freqCounter[num] > maxCount) {
      maxCount = freqCounter[num];
      mode = Number(num); // Convert key back to a number
    }
  }

  return mode; // Step 3: Return the mode
};

// Example usage
const surveyData = [1, 3, 3, 7, 8, 3, 2, 7, 7, 7, 8, 8, 8, 7, 8, 8];
console.log(findMode(surveyData)); // Output: 8 (or another valid mode)
*/

/*
// Find count occurences

const occurenceCount = (arr) => {
  const freqCounter = {};

  arr.forEach(num => {
    // If the number is already in the object, increase the count
    //Otherwise set it to 1
    freqCounter[num] = (freqCounter[num] || 0) + 1;
  });
  return freqCounter;
};
console.log(occurenceCount([1, 2, 2, 3, 3, 3, 4]));
*/

/*
class Student {
  constructor(name, id, grade) {
    this.name = name;
    this.id = id;
    this.grade = grade;
  }
  getGradeLetter() {
    if (this.grade >= 93 && this.grade <= 100) return 'A';
    if (this.grade >= 90 && this.grade <= 92) return 'A-';
    if (this.grade >= 87 && this.grade <= 89) return 'B+';
    if (this.grade >= 83 && this.grade <= 86) return 'B';
    if (this.grade >= 80 && this.grade <= 82) return 'B-';
    if (this.grade >= 77 && this.grade <= 79) return 'C+';
    if (this.grade >= 73 && this.grade <= 76) return 'C';
    if (this.grade >= 70 && this.grade <= 72) return 'C-';
    if (this.grade >= 67 && this.grade <= 69) return 'D+';
    if (this.grade >= 60 && this.grade <= 66) return 'D';
    if (this.grade <= 59) return 'F';
  }
};
class ClassRoster {
  constructor() {
    this.students = [];
  }

  addStudent(name, id, grade) {
    if (this.students.some(student => student.id === id)) {
      console.log(`Student with ID ${id} already exists.`);
      return;
    }
    this.students.push(new Student(name, id, grade));
  }

  removeStudent(id) {
    this.students = this.students.filter(student => student.id !== id);
  }

  getStudentRecord(id) {
    const student = this.students.find(student => student.id === id);
    if (student) {
      console.log(`Name: ${student.name}, ID: ${student.id}, Grade: ${student.grade}, Letter Grade: ${student.getGradeLetter()}`);
    } else {
      console.log(`Student with ID ${id} not found.`);
    }
  }

  getAverageGrade() {
    if (this.students.length === 0) return 0;
    const totalGrade = this.students.reduce((sum, student) => sum + student.grade, 0);
    return (totalGrade / this.students.length).toFixed(2);
  }
}
const roster = new ClassRoster();
roster.addStudent("Alice", 101, 85);
roster.addStudent("Dylan", 102, 75);
roster.addStudent("Chloe", 103, 93);

roster.getStudentRecord(103);
console.log("Average Score:", roster.getAverageGrade());
*/

//Automobile class 

/*
class Automobile {
  constructor(manufacturer, model, year) {
    this._manufacturer = manufacturer;
    this._model = model;
    this._year = year;
  }
  // Getters
  get manufacturer() {
    return this._manufacturer;
  }
  get model() {
    return this._model;
  }
  get year() {
    return this._year;
  }
  // Setters
  set manufacturer(newManufacturer) {
    this._model = newManufacturer;
  }
  set year(newYear) {
    this._year = newYear;
  }
  // Returns a formatted description
  getDescription() {
    return `${this._year} ${this._manufacturer} ${this._model}`;
  }
  // Returns the age of the automobile
  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this._year;
  }
}
const myCar = new Automobile("Chevrolet", "Impala", 1957);
console.log(myCar.getDescription());
console.log(`Age: ${myCar.getAge()} years`);

*/

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
