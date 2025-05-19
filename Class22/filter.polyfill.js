Array.prototype.myMap = function (callback, thisArgs) {
  if (typeof callback !== "function") {
    throw new Error(`Callback must be a function`);
  }

  const arr = thisArgs || this;
  const newArr = new Array(arr.length); // Initialize array with the same length

  arr.forEach((item, index) => {
    if (callback(item, index, arr)) {
      newArr.push(item);
    }
  });

  return newArr;
};

let cb = (element, index, arr) => {
  return element % 2 === 0;
};

console.log([1, 2, 3, 4, 5].myMap(cb));
console.log([1, 2, 3, 4, 5].myMap(cb, [22, 33, 44, 55]));

// Output: [2, 4, 6, 8, 10]
