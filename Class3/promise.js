const probability =new Promise(function(resolve, reject){
    const isHead = Math.random();
    if(isHead > 0.5){
        resolve("Even");
    }else{
        reject("Odd");
    }
});

probability.then((data) =>{
    console.log('then >', data );
});
probability.catch((err) =>{
    console.log('catch >', err);
})
probability.then((data) =>{
    console.log('then >', data );
});
probability.catch((err) =>{
    console.log('catch >', err);
})
probability.then((data) =>{
    console.log('then >', data );
});
probability.catch((err) =>{
    console.log('catch >', err);
})
probability.then((data) =>{
    console.log('then >', data );
});
probability.catch((err) =>{
    console.log('catch >', err);
})