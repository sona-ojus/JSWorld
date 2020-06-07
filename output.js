// The setTimeout function callback isn’t triggered until the for loop execution has completed
 // output : 55555
for(var i=0; i<5; i++){
    setTimeout(function(){
        console.log(i);    
    },0);
}

// how to fix above problem. (Immediately Invoked Function Expression)
for(var i = 0; i < 5; i++){
    (function(i){
        setTimeout(function(){
            console.log('value is ', i);
        }, 0);
    })(i);
}

// another way
// The let keyword creates a separate scope for each iteration
for(var i = 0;i < 5; i++){
    let k = i;
    setTimeout(function(){
        console.log('count ', k);
    }, 0);
}

// now how to give delay between each count?
for(var i = 0;i < 5; i++){
    let k = i;
    setTimeout(function(){
        console.log('count ', k);
    }, 5000 * (k+1));
}

console.log(2 + '2') // 22
console.log(2 - '2') // 0 (- is purely a mathematical operator)


const a = {b:2};
a.c = 10; // it is allowed
a.b = 11; // it is allowed

var aa = {bb:4};
a = aa; // not allowed

// remove duplicates from array
var arr = [1,2,2,3];
let s = new Set(arr); // no duplicates , but still a Set
let s1 = [...new Set(arr)]; // no duplicates, array
