Array.prototype.myReduce = function (callback, initialValue) {
  if (typeof callback !== "function") {
    throw new Error(`Not a valid function`);
  }

  let arr = this;
  let acc = initialValue !== undefined ? initialValue : arr[0];
  let startIndex = initialValue !== undefined ? 0 : 1;

  for (let i = startIndex; i < arr.length; i++) {
    acc = callback(acc, arr[i], i, arr);
  }

  return acc;
};

console.log(
  [1, 2, 3, 4, 5].myReduce((acc, element, index, arr) => {
    return acc + element;
  }, 0)
);

console.log(
  ["a", "b", "c", "d", "e"].myReduce((acc, element, index, arr) => {
    return acc + element;
  })
);
