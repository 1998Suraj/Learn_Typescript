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

// define our tuple
let ourTuple2: [number, boolean, string];
// initialize correctly
ourTuple2 = [5, false, 'Coding God was here'];
// We have no type safety in our tuple for indexes 3+
ourTuple2.push('Something new and wrong');
ourTuple2.push(6);
ourTuple2.push(true);
console.log(ourTuple2);

// define our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// throws error as it is readonly.
// ourReadonlyTuple.push('Coding God took a day off');

// Named Tuples
// Named tuples allow us to provide context for our values at each index.

const graph: [x: number, y: number] = [55.2, 41.3];
console.log("x: ", graph[0], "y: ", graph[1]);

// Destructuring Tuples
// Since tuples are arrays we can also destructure them.

const graph1: [number, number] = [55.2, 41.3];
const [a, b] = graph1;
console.log("a: ", a, "b: ", b);

