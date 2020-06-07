// function which always return same result for same input
// cannot use random values
// cannot use current date / time
// no global state ( DOM, files, db)
// REDUX Reducer functions always must be pure.
// cachable since not dependant on any other input data or global variables
// concurrent, can be run in parallel, as no other dependancy

// pure function
function add(a, b){
    return a + b;
}

console.log(add(10,20));
//==========================================================

// impure functions
function add_random(a, b){
    return a + b + Math.random();
}
console.log(add_random(10,20));

var minAge = 10; // global variable which can be changed anytime
function checkAge(age){
    // if minAge is changed the function output is different
    return age > minAge;
}
console.log(checkAge(20));