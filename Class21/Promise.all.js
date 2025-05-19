const fetchUserData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "John Doe", age: 25 });
      const time = new Date();
      console.log(time);
    }, 2000);
  });
};

const fetchUserPost = () => {
  return new Promise((resolve, reject) => {
    let time = new Date();
    console.log(time);
    setTimeout(() => {
      if (time > Date()) {
        resolve({ name: "John Die", age: 30 });
      } else {
        reject("there has been issue which I created myself");
      }
    }, 3000);
  });
};

Promise.allSettled([fetchUserData(), fetchUserPost()]).then((values) => {
  console.log(values);
});
