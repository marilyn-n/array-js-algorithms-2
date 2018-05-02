// 1. Write a JavaScript function to check whether an `input` is an array or not.
// false
// true

const isArray = input => Array.isArray(input);

// Test Data :
console.log(isArray('w3resource'));
console.log(isArray([1, 2, 4, 0]));

// 2. Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red+Green+White+Black"

const arrayToString = (array) => {
  const result = array.toString();
  return result;
};

// TEST
const myColor = ['Red', 'Green', 'White', 'Black', 'Violet'];
console.log(arrayToString(myColor));
console.log(arrayToString(myColor.join('+')));

// 3. Write a JavaScript program to find the most frequent item of an array. Go to the editor
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

const frequentItem = (arr) => {
  const counts = {};
  for (const i in arr) {
    const num = arr[i];
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  return counts;
};

console.log(frequentItem([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));

// 4. Write a JavaScript program which prints the elements of the following array. Go to the editor
// Note : Use nested for loops.
// Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14]];
// Sample Output:
// "row 0"
// " 1"
// " 2"
// " 1"
// " 24"
// "row 1"
// ------
// ------


const printRows = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      console.log(`${arr[[j]]} is row ${j}`);
    }
    return arr[i];
  }
};

const arrayOfArrays = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14]];
// TEST
printRows(arrayOfArrays);

// 5. Write a JavaScript program which accept a number as
// input and insert dashes (-) between each two even numbers.
// For example if you accept 025468 the output should be 0-254-6-8.
