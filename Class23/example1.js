var a = {
  x: 1,
  y: 4,
  z: {
    l: "a",
    m: "b",
  },
};

var d = a;

var b = Object.assign({}, a);
var c = { ...a };

c.x = 5;
console.log(a);
b.z.l = "z";
console.log(a);
