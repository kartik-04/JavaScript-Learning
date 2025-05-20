Promise.myAllSettled = function (promises) {
  return new Promise((resolve) => {
    if (!Array.isArray(promises)) {
      throw new TypeError("Input must be an array of promises");
    }

    let results = [];
    let responseCounter = 0;

    promises.forEach((promise, idx) => {
      Promise.resolve(promise)
        .then((res) => {
          results[idx] = { status: "fulfilled", value: res };
        })
        .catch((err) => {
          results[idx] = { status: "rejected", reason: err };
        })
        .finally(() => {
          responseCounter++;
          if (responseCounter === promises.length) {
            resolve(results);
          }
        });
    });
  });
};

// Example usage
const promise1 = Promise.resolve(10);
const promise2 = Promise.reject("Error occurred");
const promise3 = Promise.resolve(30);

Promise.myAllSettled([promise1, promise2, promise3]).then((results) =>
  console.log("Results:", results)
);
