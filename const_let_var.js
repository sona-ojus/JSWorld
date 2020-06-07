// 1: var and let can change their value and const cannot change its value
// 2: var can be accessible anywhere in function but let and const can only be accessible inside the block where they are declared.
// 3: const cannot be declared only, you need to initialize it with declaration
// 4: let and const hoist but you cannot access them before the actual declaration is evaluated at runtime. 
// So in case of let and const you cannot access them before declaration.
 
// const variables are immutable
var a = 10;
a = 90; // not allowed!!!

// const objects are mutable
const obj = {a: 10, b: 20};
obj.b = 30 // this is allowed
obj = {name: "sona"} // not allowed!!


// Hoisiting
console.log(a); // undefined
var a = 5;

console.log(a);  //ReferenceError: a is not defined
let a = 5;

console.log(a);  //ReferenceError: a is not defined
const a = 5;

// EventListner
for (var i = 0; i < 5; i++) {
    var btn = document.createElement('button');
    btn.appendChild(document.createTextNode('Button ' + i));
    btn.addEventListener('click', (function() {
       { console.log(i); };
    }));
    document.body.appendChild(btn);
  }
// on click of any button, console output = 5
// var has function scope or global score so var i is sharing one value in each block of for loop.

for (let i = 0; i < 5; i++) {
    var btn = document.createElement('button');
    btn.appendChild(document.createTextNode('Button ' + i));
    btn.addEventListener('click', function(){ console.log(i); });
    document.body.appendChild(btn);
}
// on click of button 2, console output = 2