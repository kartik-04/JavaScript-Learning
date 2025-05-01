
// let myRadiusArray = [2,3,4,5,8]

// let areaArray = [];
// let circumferenceArray = [];

// function calculateArea (){
//     for(let i=0; i < myRadiusArray.length; i++){
//       areaArray[i] = 3.14 * myRadiusArray[i] * myRadiusArray[i];
//     }
//     return areaArray;
// }

// function calculatecircumference(){
//     for(let i = 0; i < myRadiusArray.length; i++){
//       circumferenceArray[i] = 2 * 3.14 * myRadiusArray[i];
//     }
//     return circumferenceArray;
// }

// console.log(calculateArea());
// console.log(calculatecircumference());

let myRadiusArray = [2,3,4,5,8]


// function calculateArea(){
//     return areaMap = myRadiusArray.map(function(r, i){
//         return r * r * 3.14;
//     })
// }

function calculateArea(){
    return areaMap = myRadiusArray.map((r,i) => r*r*3.14);
}


// function calculatecircumference(){
//    return circumArr = myRadiusArray.map((r,i) => 2*3.14*r);
// }

const calculatecircumference = () => (circumArr = myRadiusArray.map((r) => 2*3.14*r));

// console.log(calculateArea());
console.log(calculateArea());
console.log(calculatecircumference());