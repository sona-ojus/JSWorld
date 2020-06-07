// functions are first class if you are able to assign it to a variable
// then they can be treated like any other datatype.

var sum = function() { return 10 + 20};

console.log("type of sum: " + typeof(sum));
console.log("type of sum(): " + typeof(sum()));
console.log("output : " + sum());