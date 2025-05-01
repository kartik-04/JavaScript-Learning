const setDummyPromise = (delay, message) =>{
    const promise = new Promise(function(resolve, reject){
        const timeout = 5000;
        const currentDelay = delay > timeout ? timeout : delay;
        setTimeout(() => {
            if(delay > timeout)
                reject(`Maximum delay is 5000 : ${message}`);
            else
                resolve(message);
        }, currentDelay);
    });

    return promise;
}

setDummyPromise(1000, '1 sec').then((data) => console.log('Delay :', data)).catch((err) => console.log(err));

setDummyPromise(6000, '6 sec').then((data) => console.log('Delay :', data)).catch((err) => console.log(err));

setDummyPromise(5000, '5 sec').then((data) => console.log('Delay :', data)).catch((err) => console.log('Error : ', err));

setDummyPromise(3000, '3 sec').then((data) => console.log('Delay :', data)).catch((err) => console.log('Error : ', err));

 