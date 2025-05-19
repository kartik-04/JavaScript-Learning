const fetchWheatherUpdate1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ city: "Delhi", temperature: 30 });
    }, 6000);
  });
};

const fetchWeatherUpdate2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ city: "Delhi", temperature: 30 });
    }, 7000);
  });
};

const setTiemoutThreshold = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`Time Exceed`);
    }, 5000);
  });
};

Promise.race([
  fetchWheatherUpdate1(),
  fetchWeatherUpdate2(),
  setTiemoutThreshold(),
])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.log(error);
  });
