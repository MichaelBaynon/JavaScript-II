// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];



// Given this problem: 

function firstItem(arr, cb) {
  return cb(arr[0])
  //  firstItem passes the first item of the given array to the callback function.
}
firstItem(items, function (getFirst) {
  console.log(getFirst)
});
// Potential Solution:

// Higher order function using "cb" as the call back
// function firstItem(arr, cb) {
//   return cb(arr[0]);
// }

// Function invocation 
// firstItem(items, function(first) {
//   console.log(first)
// });




function getLength(arr, cb) {

  // getLength passes the length of the array into the callback.
}
console.log(items.length);

function last(arr, cb) {
  // last passes the last item of the array into the callback.
}
var last_element = items[items.length - 1];


function sumNums(x, y, cb) {
  return cb(x + y);
}
sumNums(5, 7, function (add) {
  console.log(add)
})



function multiplyNums(x, y, cb) {
  return cb(x * y);
  // multiplyNums multiplies two numbers and passes the result to the callback.
}
multiplyNums(3, 8, function (multiply) {
  console.log(multiply)
})



function contains(item, list, cb) {
  cb(arr.includes(item))

  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}
console.log(items.includes('Tape'))
console.log(items.includes('Paper'))

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}