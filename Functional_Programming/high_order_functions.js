// any function which take functions as arguments or returns a function or both

// Eg 1: Take other functions as arguments
function a(argument){
    var b = argument();
    console.log("My name is Sona \n" + b());
}

// Eg 2: Return a function
function b(){
    return function(){
        return "Age is 27";
    }
}

a(b);

// Eg 3: Arrat functions like map, filter, reduce, callbacks
var a = [1,2,3];
a = a.map(elem => elem * 2);
console.log(a);

// Eg 4: setTimeout
setTimeout(() => console.log("Javascript is the best!"), 2000);