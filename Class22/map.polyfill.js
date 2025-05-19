Array.prototype.myMap = function (callback, thisArgs) {
  if (typeof callback !== "function") {
    throw new Error(`Callback must be a function`);
  }

  const arr = thisArgs || this;
  const newArr = new Array(arr.length); // Initialize array with the same length

  arr.forEach((item, index) => {
    newArr[index] = callback(item, index, arr);
  });

  return newArr;
};

let cb = (element, index, arr) => {
  return 2 * element;
};

console.log([1, 2, 3, 4, 5].myMap(cb));
console.log([1, 2, 3, 4, 5].myMap(cb, [22, 33, 44, 55]));

// Output: [2, 4, 6, 8, 10]
