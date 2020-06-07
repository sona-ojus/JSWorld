// copying one object to another
const person = {name: "alan"};
var obj1 =  Object.assign({}, person, {age:30})
console.log(obj1);

//  OR
var obj2 = {...person, age:50};
console.log(obj2);

// trick question
const initialObj = {
    name: "alan", 
    address: {
        country: "India",
        city: "Bengaluru"
    }
};
var obj3 = {...initialObj, name:"sona"};
obj3.address.city = "Kochi";
console.log(initialObj); // { name: 'alan', address: { country: 'India', city: 'Kochi' } }
console.log(obj3);       // { name: 'sona', address: { country: 'India', city: 'Kochi' } }
// this is because of shallow copy done by spread operator. 
// both objects shares the address object in memory

// Solution : Deep Copy
const initialObj1 = {
    name: "alan", 
    address: {
        country: "India",
        city: "Bengaluru"
    }
};
var obj4 = {...initialObj1, name:"sona", address: {...initialObj1.address, city: "Kochi"}};
console.log(initialObj1); // { name: 'alan', address: { country: 'India', city: 'Bengaluru' } }
console.log(obj4);        // { name: 'sona', address: { country: 'India', city: 'Kochi' } }