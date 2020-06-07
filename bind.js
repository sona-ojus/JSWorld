// returns a function
// useful if u have multiple arguments.
// combine the arguments to an array and call function with it.

obj1 = {a:2, b:3};
obj2 = {a:4, b:10};

function add(c, d, e){
    return this.a + this.b + c + d + e;
}

var result1 = add.bind(obj1);
console.log(result1); // returns a function

var result2 = add.bind(obj2);
console.log(result2); // returns a function

var final_result1 = result1(1,2,3);
console.log(final_result1);

var final_result2 = result2(1,2,3);
console.log(final_result2);