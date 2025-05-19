// Question1:

// // Flatten a nested array

const nestedArray = [1, 2, 3, [4, 5, [6, 7, 8], 9], 10, [11, 12]];

function flattenArray(arr) {
  // Implementation goes here
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      result.push(arr[i]);
    } else {
      result = result.concat(flattenArray(arr[i]));
    }
  }
  return result;
}

console.log(flattenArray(nestedArray));

// Expected output: [1,2,3,4,5,6,7,8,9,10,11,12]
