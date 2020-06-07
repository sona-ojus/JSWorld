obj1 = {a:2,b:3};
obj2 = {a:4,b:10};

function add(num){
    return this.a + this.b + num;
}

var result1 = add.call(obj1,5);
console.log(result1);

var result2 = add.call(obj2,5);
console.log(result2);

// trick question
var result3 = add.call(obj1.a,obj1.b);
console.log(result3);