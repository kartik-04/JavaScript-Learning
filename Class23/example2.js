var a = {
  x: 1,
  y: 4,
  z: {
    l: "a",
    m: "b",
  },
};

function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item));
  } else if (obj instanceof Function) {
    return obj.bind({});
  } else {
    let clone = {};
    for (let key in obj) {
      clone[key] = deepClone(obj[key]);
    }
    return clone;
  }
}

const copy = deepClone(a);
console.log(typeof copy);
