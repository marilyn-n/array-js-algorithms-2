// 1. Write a JavaScript program to list the properties of a JavaScript object.
// Sample object:
const student = {
  name: 'David Rayy',
  sclass: 'VI',
  rollno: 12,
};
// Sample Output: name,sclass,rollno

const objKeys = () => {
  const keys = Object.keys(student).join(',');
  return keys;
};
console.log(objKeys());


// 2. Write a JavaScript program to delete the rollno property from the following object.
// Also print the object before or after deleting the property.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };

const removeKey = () => {
  const removedKey = delete student.rollno;
  if (removedKey === true) {
    return `${Object.keys(student)} * rollno property has been deleted`;
  }
};

console.log(`${Object.keys(student)} * before deleting property`);
console.log(removeKey());

// 3. Write a JavaScript program to display the reading status
// (i.e. display book name, author name and reading status) of the following books.

const library = [
  {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true,
  },
  {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true,
  },
  {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false,
  }];

const displayLibrary = () => {
  const res = library;
  return res;
};

console.log(displayLibrary());
// 4. Write a JavaScript program to create a Clock.
// Note: The output will come every second.
// Expected Console Output :
// "14:37:42"
// "14:37:43"
// "14:37:44"
// "14:37:45"
// "14:37:46"
// "14:37:47"

// 5 .Write a JavaScript program to sort an array of JavaScript objects. Go to the editor
// Sample Object :

// var library = [
//    {
//        title:  'The Road Ahead',
//        author: 'Bill Gates',
//        libraryID: 1254
//    },
//    {
//        title: 'Walter Isaacson',
//        author: 'Steve Jobs',
//        libraryID: 4264
//    },
//    {
//        title: 'Mockingjay: The Final Book of The Hunger Games',
//        author: 'Suzanne Collins',
//        libraryID: 3245
//    }];

//    Expected Output:

// [[object Object] {
//   author: "Walter Isaacson",
//   libraryID: 4264,
//   title: "Steve Jobs"
// }, [object Object] {
//   author: "Suzanne Collins",
//   libraryID: 3245,
//   title: "Mockingjay: The Final Book of The Hunger Games"
// }, [object Object] {
//   author: "The Road Ahead",
//   libraryID: 1254,
//   title: "Bill Gates"
// }]


// Bonus================

//  Write a JavaScript function to check whether a given value is a DOM element.

//  Write a JavaScript function to check if an object contains given property.
