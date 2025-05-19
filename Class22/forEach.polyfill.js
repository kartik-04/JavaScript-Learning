Array.prototype.myForEach = function (callback, thisArgs) {
  let arr = thisArgs || this;

  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
};

let cb = (element, idx, arr) => {
  console.log(element);
};

[1, 2, 3, 4, 5].myForEach(cb);
[1, 2, 3, 4, 5].myForEach(cb, [6, 7, 8, 9, 10]);
