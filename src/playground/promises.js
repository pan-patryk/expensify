const promise = new Promise( (resolve, reject) => {
    
    setTimeout(()=>{

        // resolve('This is my resolved data');
        reject('wrong')
    },1500)
});

console.log('before');
promise.then((data) => {
    console.log('1'+data) 
},(e) => {
    
});

