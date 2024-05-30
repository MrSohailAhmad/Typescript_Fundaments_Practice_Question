console.log("================ Easy ===============");
// ? Question no1

console.log("Hello World!");

// // ? Question no 2

let temperature: number = 15;

if (temperature < 20) {
  console.log("It's cold!");
}

// ? Question no 3

let apple: number = 10;

apple = apple - 3;

console.log(apple);

// ? Question 4

let firstName: string = "Muhammad";
let lastName: string = "Sohail";

let FullName: string = `${firstName} ${lastName}`;

console.log(FullName);

// ? Questiuon no 5

let num1: number = 5;
let num2: number = 3;

if (num1 > num2) {
  console.log("Yes");
} else {
  console.log("No");
}

console.log("====================== Medium Question ====================");

// ? Question no 6
function calculateArea(radius: number) {
  const areaodCircle = 3.14 * (radius * 2);

  console.log(`The Area of circle is ${areaodCircle}`);
}

calculateArea(10);

// ? Question no 7

for (let num = 1; num <= 50; num++) {
  if (num % 3 === 0) {
    console.log(`${num} Fizz`);
  } else {
    console.log(`${num} Buzz`);
  }
}

// ? Question no 8

let temp: number[] = [20, 23, 19, 89, 45];

// ? Question no 9

let age: number = 17;

if (age < 18) {
  console.log("You are minor");
} else {
  console.log("you are Adult");
}

// //? Question no 10 Write a function that takes an array of numbers and returns the count of positive numbers in the array.

let numbrss: number[] = [-1, 3, 5, 7, 8, 4, -45, -34, -45, -45];

function positiveNum(numbrs: number[]) {
  for (let i = 1; i < numbrs.length; i++) {
    if (numbrs[i] > 0) {
      console.log(`Positive Number ${numbrs[i]}`);
    } else {
      console.log(`Negative Number ${numbrs[i]}`);
    }
  }
}
positiveNum(numbrss);

console.log(
  "====================== Arrays and Array Methods ===================="
);

// ? Question no 11 Write a function that takes an array of words and returns a new array containing only the words that start with the letter 'a'.

let words: string[] = [
  "muhammad",
  "sohail",
  "apple",
  "grapes",
  "allah",
  "Ahmad",
];

function aWordArray(wordArry: string[]) {
  for (let i = 0; i < wordArry.length; i++) {
    if (wordArry[i][0] === "a" || wordArry[i][0] === "A") {
      console.log(wordArry[i]);
    }
  }
}

aWordArray(words);

// ? Question no 12

let fruits = ["apple", "grapes", "kivi", "banana", "orange"];

let printFruit = fruits[fruits.length - 2];

console.log(printFruit);

// ? Question no 13 Develop a function that takes an array of numbers and returns a new array with each number squared,

let numbrs: number[] = [1, 3, 5, 6, 798, 76, 46, 354, 3, 5, 633, 24, 23];

function squaredNum(num: number[]) {
  for (let i = 0; i < num.length; i++) {
    console.log(`The squared Number of ${num[i]} is ${num[i] * num[i]}`);
  }
}

squaredNum(numbrs);

// ? Question no 14 Write a JavaScript function that accepts an array and reverses its elements without using the .reverse() method. Log the result.

let numbers: number[] = [1, 3, 5, 6, 798, 76, 46, 354, 3, 5, 633, 24, 23];

function reverseArray(num: number[]) {
  for (let i = num.length - 1; i >= 0; i--) {
    console.log(`Array element ${i} value is ${num[i]}`);
  }
}

reverseArray(numbers);

// ? Question no 15 Given an array scores [10, 5, 20, 20, 4, 5, 2, 25, 1], write a function that logs the number of times the score exceeded the maximum score and the number of times it fell below the minimum score.
function countExceedingAndFalling(scores: number[]): {
  exceeding: number;
  falling: number;
} {
  if (scores.length === 0) {
    return { exceeding: 0, falling: 0 };
  }

  let maxScore = scores[0];
  let minScore = scores[0];
  let exceeding = 0;
  let falling = 0;

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > maxScore) {
      exceeding++;
      maxScore = scores[i];
    } else if (scores[i] < minScore) {
      falling++;
      minScore = scores[i];
    }
  }

  return { exceeding, falling };
}

const scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
const result = countExceedingAndFalling(scores);
console.log(
  `Number of times score exceeded the maximum score: ${result.exceeding}`
);
console.log(
  `Number of times score fell below the minimum score: ${result.falling}`
);

//? Question no 16 Create a function that removes all falsey values from an array. Falsey values include false, null, 0, "", undefined, and NaN.

let fArray: any[] = [
  1,
  3,
  5,
  6,
  798,
  76,
  46,
  354,
  3,
  5,
  633,
  24,
  23,
  NaN,
  null,
  false,
  "",
  0,
];

function falseArrayFun(numArr: any[]) {
  let num = [];
  for (let i = 0; i < numArr.length; i++) {
    if (typeof numArr[i] === "number" && !isNaN(numArr[i])) {
      num.push(numArr[i]);
    }
  }
  console.log(`Number of Array [${num}]`);
}

falseArrayFun(fArray);

// ?  Question no 17 Write a script that concatenates two arrays [1, 2, 3] and [4, 5, 6] into a single array

let arry1: number[] = [1, 2, 3];
let array2: number[] = [4, 5, 6];

let concatArray: number[] = arry1.concat(array2);

console.log(concatArray);

// ? Question no 18 Develop a function called sumOfElements that calculates the sum of all elements in an array that are either even or odd, based on a parameter.

function sumOfElements(numbers: number[], status: Boolean) {
  let sum: number = 0;
  for (let num of numbers) {
    if ((num % 2 === 0 && status) || (num % 2 !== 0 && !status)) {
      sum += num;
    }
  }

  return sum;
}

let numberOfArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 89, 78, 67, 56, 45, 33, 45, 22, 1,
];

console.log(`Sum of even numbers `, sumOfElements(numberOfArray, true));
console.log(`Sum of add numbers `, sumOfElements(numberOfArray, false));

// ? Question no 19 Create a function that checks whether an element exists in an array. If it exists, return the index, otherwise return -1.

function checkArray(numOfArray: number[], num: number) {
  for (let i = 0; i < numOfArray.length; i++) {
    if (numOfArray[i] === num) {
      console.log(`The index of Matching number is ${i}`);
    }
  }
}

let numOfArray = [
  100, 200, 3, 4, 5, 6, 7, 8, 10, 1, 9, 89, 78, 67, 56, 45, 33, 45, 22, 10,
];

checkArray(numOfArray, 10);

// ? Question no 20 Write a function to find and return the smallest number in an array of integers.

function findSmallest(num: number[]) {
  let smallestInt = num[0];

  for (let i = 0; i < num.length; i++) {
    if (num[i] < smallestInt) {
      smallestInt = num[i];
    }
  }
  return smallestInt;
}

console.log(`The Smallest number of array is `, findSmallest(numOfArray));

// ? Question no 21 Write a function calculateProduct that takes an array of numbers and returns the product of all elements.

let arrayOfNumber: number[] = [3, 5, 6, 3, 4, 6, 2, 5, 6, 2];

const calculateProduct = (numbers: number[]) => {
  let product: number = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    product = product * numbers[i];
  }
  return product;
};

console.log(calculateProduct(arrayOfNumber));

// ? Question no 22 Develop a function filterByLength that takes an array of strings and a number n. The function should return an array containing only the strings that are longer than n characters.

const arrayOfString: string[] = [
  "string",
  "stringisa",
  "muhammad",
  "sohail",
  "khan",
  "dashes",
  "iam",
];

const filterByLength = (aryofString: string[], num: number) => {
  return aryofString.slice(num);
};

console.log(filterByLength(arrayOfString, 3));

// ? Question no 23 Create a function findDuplicates that finds and logs all duplicates in an array.
let arrayOfElement: string[] = [
  "muhammad",
  "sohail",
  "khan",
  "khan",
  "muhammad",
  "sohail",
  "alternatives",
  "and",
  "or",
  "that",
  "and",
  "or",
  "that",
];
const findDuplicates = (arayofelement: string[]) => {
  let dupelem: string[] = arayofelement.filter(
    (elm, index) => arayofelement.indexOf(elm) !== index
  );

  return dupelem;
};

console.log(findDuplicates(arrayOfElement));

// ? Question no 24 Write a function incrementAll that takes an array of integers and increments each element by one.

let arrayOfIntergers: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
let dupEle: number[] = [];
const incrementAll = (aryofinteger: number[]) => {
  for (let i = 0; i < aryofinteger.length; i++) {
    dupEle.push(aryofinteger[i] + 1);
  }
  return dupEle;
};

console.log(incrementAll(arrayOfIntergers));

console.log(
  "Question no 25 Develop a function countOccurrences that counts how many times a specific element appears in an array."
);

let numofArray: number[] = [6, 3, 4, 3, 5, 6, 3, 4, 6, 2, 5, 6, 2, 6, 2, 5, 6];

const countOccurrences = (numofarray: number[], chars: number) => {
  for (let i = 0; i < numofarray.length; i++) {}
  let count: number = 0;
  for (let num of numofarray) {
    if (num === chars) {
      count++;
    }
  }

  console.log(count);
};

countOccurrences(numofArray, 2);

// ? Question no 26 Create a function isSorted that checks if an array is sorted in ascending order.
let numOfArrray = [2, 3, 4, 5, 56, 3, 22, 434, 45];
const isSorted = (numOfArrray: number[]): boolean => {
  let result: boolean = false;
  for (let i = 0; i < numOfArrray.length; i++) {
    if (numOfArrray[i] > numOfArrray[i + 1]) {
      result = false;
    } else {
      result = true;
    }
  }
  return result;
};

console.log(isSorted(numOfArrray));

// ? Question no 27 Write a function that receives an array of names and formats them into a string separated by commas, except for the last two names, which should be separated by "and".

let nameOfArrray: string[] = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve",
  "Frank",
  "Grace",
  "Hank",
  "Ivy",
  "Jack",
];

const formatNames = (names: string[]): string => {
  // Check the number of names in the list
  if (names.length === 0) {
    return "";
  } else if (names.length === 1) {
    return names[0];
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]}`;
  } else {
    // Join all names except the last two with commas
    const allExceptLastTwo = names.slice(0, -2).join(", ");
    // Combine the last two names with 'and'
    const lastTwo = `${names[names.length - 2]} and ${names[names.length - 1]}`;
    // If there's more than two names, add a comma and space before the last two
    return `${allExceptLastTwo}, ${lastTwo}`;
  }
};

const names = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve",
  "Frank",
  "Grace",
  "Hank",
  "Ivy",
  "Jack",
];
const formattedNames = formatNames(names);
console.log(formattedNames);

// ? Question no 28 Develop a function that converts an array of Fahrenheit temperatures to Celsius and logs the new temperatures.

let fahrenheitValues = [34, 56, 23, 56, 34, 23, 4, 6, 2, 34];
const arrayTofahrenheit = (fahrenheitValues: number[]): void => {
  for (let li in fahrenheitValues) {
    console.log(((Number(li) - 32) * 5) / 9);
  }
};

arrayTofahrenheit(fahrenheitValues);

// ? Question no 29 Write a function minMaxAverage that takes an array of numbers and returns an object with properties for the minimum, maximum, and average of those numbers.

const minMaxAverage = (numbers: number[]) => {
  if (numbers.length === 0) {
    return {
      min: undefined,
      max: undefined,
      average: undefined,
    };
  }

  let min = numbers[0];
  let max = numbers[0];
  let sum = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    sum += numbers[i];
    if (numbers[i] < min) {
      min = numbers[i];
    }
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  const average = sum / numbers.length;

  return {
    min: min,
    max: max,
    average: average,
  };
};

const numberss = [5, 10, 3, 8, 15];
const results = minMaxAverage(numbers);
console.log(results);

// ? Question no 30 Create a function swapElements that swaps two specified indices in an array.
const swapElements = (arr: number[], index1: number, index2: number) => {
  // Check if indices are valid
  if (
    index1 < 0 ||
    index1 >= arr.length ||
    index2 < 0 ||
    index2 >= arr.length
  ) {
    console.error("Invalid indices provided.");
    return;
  }

  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;

  return arr;
};

const array = [1, 2, 3, 4, 5];
console.log("orignal array", array);
swapElements(array, 1, 3);
console.log(array);

console.log("================ HARD ===============");

// ? Question no 31 Develop a function that takes two inputs, a string and a character, and returns the number of times the character appears in the string.

const appearChar = (word: string, char: string) => {
  let num: number = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === char) {
      num++;
    }
  }
  console.log(num);
};

appearChar("apple", "p");

// ? Question no 32 Create a 'to-do list' array of objects where each object has properties task and completed (a boolean). Write a function to log only the tasks that are not yet completed.
type TodoList = { task: string; completed: boolean };
const todoList: TodoList[] = [
  { task: "Buy groceries", completed: true },
  { task: "Wash the car", completed: false },
  { task: "Finish homework", completed: false },
  { task: "Clean the house", completed: true },
  { task: "Pay bills", completed: false },
  { task: "Prepare dinner", completed: true },
  { task: "Call mom", completed: false },
  { task: "Read a book", completed: true },
];

const todoListCheck = (list: TodoList[]) => {
  for (let obj of list) {
    if (obj.completed === false) {
      console.log(obj.task);
    }
  }
};

todoListCheck(todoList);

// ? Question no 33 Write a function that takes an array of integers and sorts them from smallest to largest.
let arrrayofInteger = [3, 5, 6, 7, 34, 23, 4, 1, 5, 34, 23];
console.log("orignal array", arrrayofInteger);
const sortOfArray = (arrrayofInteger: number[]) => {
  let sortedArrray: number[] = [...arrrayofInteger];

  for (let i = 0; i < sortedArrray.length; i++) {}

  console.log("sortedArrray", sortedArrray);
};

sortOfArray(arrrayofInteger);

// ? Question no 34 Develop a TypeScript program that logs every element of an array in reverse order without using the .reverse() method.

let stringArray = [
  "apple",
  "banana",
  "cherry",
  "date",
  "elderberry",
  "fig",
  "grape",
  "honeydew",
  "kiwi",
  "lemon",
];

const reverseSort = (stringArray: string[]) => {
  for (let i = stringArray.length - 1; i >= 0; i--) {
    console.log(stringArray[i]);
  }
};

reverseSort(stringArray);

// ? Question no 35 Write a script that simulates a basic calculator. It should take two operands and an operator ('+', '-', '*', '/') from the user, perform the operation, and log the result

const basicCalculator = (
  num1: number,
  num2: number,
  ope: string
): number | string => {
  switch (ope) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        return "Error: Division by zero";
      }
      return num1 / num2;
    default:
      return "Error: Invalid operator";
  }
};

console.log(basicCalculator(3, 45, "+"));
