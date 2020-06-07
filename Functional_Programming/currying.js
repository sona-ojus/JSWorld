// used to transform a function with multiple arguments to one with single argument
// used in situations where a function must return another compulsorily
// eg: pipe() in lodash library accepts only functions as arguments.

// without currying
function sum(a, b){
    return a + b;
}

console.log(sum(10, 20));

// with currying
function sum_with_curry(a){
    return function(b){
        return a + b;
    }
}

console.log(sum_with_curry(10)(20));