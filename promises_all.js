
let p1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Inside p1");
        resolve("P1")
    }, 1000)
});

let p2 = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Inside p2");
        resolve("P2")
    }, 3000)
});

let p3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Inside p3");
        resolve({a:2,b:10});
    }, 5000)
});

// will wait for all promises to complete.
// consolidates the output to an array.
Promise.all([p1, p2, p3]).then(data => console.log(data));