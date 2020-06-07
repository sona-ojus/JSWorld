// same as call.
// useful if u have multiple arguments.
// combine the arguments to an array and call function with it.

obj1 = {a:2, b:3};
obj2 = {a:4, b:10};

function add(c, d, e){
    return this.a + this.b + c + d + e;
}

var arr = [1,2,3];
var result1 = add.apply(obj1,arr);
console.log(result1);

var result2 = add.apply(obj2,arr);
console.log(result2);