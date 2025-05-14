// // console.log(this);

// function test() {
//   console.log(this);
// }

// test();

let obj = {
  name: "John",
  test: function () {
    console.log(this);
  },
};

// let newObjTest = obj.test;

// newObjTest();

let obj1 = {
  name: "kartik",
};

obj1.test = obj.test;

obj1.test();
