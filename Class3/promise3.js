const createDummyPromises = (delay, message) =>{
    const promise = new Promise(function (resolve, reject) {

        setTimeout(() => {
            resolve(`I am : ${message}`);
        }, delay);
    })
    return promise;
}

createDummyPromises(2000, 'exercising')
    .then((data) => {
        console.log(data);
        return createDummyPromises(1000, 'Bathing');
    }).then((data) => {
        console.log(data);
        return createDummyPromises(5000, 'eating');
    }).then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    })

