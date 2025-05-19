Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    let responses = [];
    let responseCounter = 0;
    promises.forEach((promise, idx) => {
      promise
        .then((res) => {
          //successful
          responses[idx] = res;
          responseCounter++;
          if (responseCounter === promises.length) {
            resolve(responses);
          }
        })
        .catch((err) => {
          //Unsuccessful
          reject(err);
        });
    });
  });
};
