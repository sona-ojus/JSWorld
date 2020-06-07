// 1. Default Parameters
function sum(a=10,b=20,c=30){
    var sum = a+b+c;
    console.log("Sum: " + sum);
}

sum(100,200,300); // Sum: 600
sum(); // Sum: 60
sum(100,200); // Sum: 330

//==================================================================================

// 2. Template Literals
var name = "sona";
var age = "20";
console.log(`The name of the student is ${name} and age is ${age}`);

//===================================================================================

// 3. Multi line string
var a = 
`
    Hellooo 
    My name is Sona
    I am from Kerala
`;
console.log(a);

//==================================================================================

// 4. Destructuring of Objects and Arrays
var str = "My name is Sona";
[a1,a2,a3,a4] = str.split(' ');
console.log(a1);

var obj = {a: 10, b:20, c:30};
var {a, b, c} = obj; // has to be same as the keys of the objects
console.log(b);

