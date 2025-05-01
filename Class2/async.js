// console.log('A');


// let minute = 5;
// let second = 60;
// setInterval(() => {
//    if(second < 0){
//     second = 60;
//     minute--;
//    }
//    console.log(minute + ":" + second);
//    second--;
// }, 1000);



function delayedSum(a, b, callback) {
    setTimeout(() => {
        console.log(a+b);
    }, 1000);
}

delayedSum(5, 3);
