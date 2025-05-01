const createDummyPromises = (delay, message) =>{
    const promise = new Promise(function(resolve, reject){
        const timeout = 5000;
        if(delay < timeout){
        setTimeout(() => {
            resolve(`I am ${message}`);
        }, delay);
    }else{
        reject(`Maximum delay is 5000 : I am not ${message}`);
    }
    });
    return promise;
}

async function callingpromiseallSettled(){
    const result = await Promise.allSettled([
        createDummyPromises(2000,'Exercising'),
        createDummyPromises(10000, 'Bathing'),
        createDummyPromises(3000, 'Eating'),
    ]);
    console.log(result);
}

callingpromiseallSettled();