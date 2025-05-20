Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    let responses = [];
    let responseCounter = 0;

    promises.forEach((promise, idx) => {
      Promise.resolve(promise) // Ensure the input is a promise
        .then((res) => {
          // Successful
          responses[idx] = res;
          responseCounter++;
          if (responseCounter === promises.length) {
            resolve(responses);
          }
        })
        .catch((err) => {
          // Unsuccessful
          reject(err);
        });
    });
  });
};

// Example usage
const promise1 = Promise.resolve(10);
const promise2 = Promise.resolve(20);
const promise3 = Promise.resolve(30);

Promise.myAll([promise1, promise2, promise3])
  .then((results) => console.log("Results:", results)) // Output: Results: [10, 20, 30]
  .catch((error) => console.error("Error:", error));
