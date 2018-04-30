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
console.log(arrayToString(['Red', 'Green', 'White', 'Black']));
console.log(arrayToString(['Red', 'Green', 'White', 'Black'].join('+')));

// 3. Write a JavaScript program which accept a number as
// input and insert dashes (-) between each two even numbers.
// For example if you accept 025468 the output should be 0-254-6-8.

// 4. Write a JavaScript program to find the most frequent item of an array. Go to the editor
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

// 5. Write a JavaScript program which prints the elements of the following array. Go to the editor
// Note : Use nested for loops.
// Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14];
// Sample Output:
// "row 0"
// " 1"
// " 2"
// " 1"
// " 24"
// "row 1"
// ------
// ------
