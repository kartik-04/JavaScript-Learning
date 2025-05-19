function resolveQuickly() {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve(`Resolved quickly`, 2500);
    });
  });
}

function resolveSlowly() {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve(`Resolved Slowly`, 2000);
    });
  });
}

function rejectFast() {
  return new Promise((_resolve, reject) => {
    setTimeout(() => {
      reject(`Reject quickly`, 3300);
    });
  });
}

function rejectSlowly() {
  return new Promise((_resolve, reject) => {
    setTimeout(() => {
      reject(`Reject Slowly`, 1500);
    });
  });
}

Promise.any([resolveQuickly(), resolveSlowly(), rejectFast(), rejectSlowly()])
  .then((values) => console.log(values))
  .catch((error) => console.log(error));
