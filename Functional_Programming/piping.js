// function takes an n sequence of operations; 
// each operation takes an argument; 
// process it; 
// gives the processed output as an input for the next operation in the sequence. 
// The result of a pipe function is a function that is a bundled up version of the sequence of operations.

const pipe = (op1, op2, op3) => {
    return (arg) => op3(op2(op1(arg)));
}

function op1(arg){
    return 10 * arg;
}

function op2(arg){
    return 10 * arg;
}

function op3(arg){
    return 10 * arg;
}

var result = pipe(op1, op2, op3);
console.log(result(10));