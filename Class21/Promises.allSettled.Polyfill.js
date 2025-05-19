Promise.myAllSettled = function (promises) {
  //Scenariol: All promises should execute in parallel
  // Scenario2: All promises resolves
  // Scenar103: Any promise)fejects
  // output : promise = list of responses | Error
  return new Promise((resolve, reject) => {
    let resolved = [];
    let rejected = [];
    let responseCounter = 0;

    promises.forEach((promise, idx) => {
      promise
        .then((res) => {
          resolved[idx] = res;
          responseCounter++;
          if (responseCounter === promises.length) {
            const responses = [...resolved, ...rejected];
            resolve(responses);
          }
        })
        .catch((err) => {
          rejected[idx] = err;
          responseCounter++;
          if (responseCounter === promises.length) {
            const responses = [...resolved, ...rejected];
            resolve(responses);
          }
        });
    });
  });
};

Promise.myAllSettled = function (promises) {
  return new Promise((resolve) => {
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
