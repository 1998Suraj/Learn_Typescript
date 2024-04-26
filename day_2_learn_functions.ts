const names : any = [];
names.push("suraj");
names.push(2);
console.log(names);

// A tuple is a typed array with a pre-defined length and types for each index.

// Tuples are great because they allow each element in the array to be a known type of value.

// To define a tuple, specify the type of each element in the array

// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
console.log(ourTuple);

// define our tuple
let ourTuple1: [number, boolean, string];

// initialized incorrectly which throws an error
// ourTuple1 = [false, 'Coding God was mistaken', 5];

