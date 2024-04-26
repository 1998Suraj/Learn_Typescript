const firstName: string = "suraj";
console.log("hello" + " " + firstName);

interface User {
    name: string;
    age: number;
    email: string;
}

const user: User = {
    name: "suraj",
    age:18,
    email:"surajkarosia98@gmail.com"
}
console.log(user);

// When we assign any value to any variable it will be of any type
let checkAny: any = 3;
checkAny = "suraj";
console.log(checkAny);

// When we assign any value to unknown variable it will be of any type
let checkUnknown: unknown = 3;
checkUnknown = true;
console.log(checkUnknown);

let w: unknown = 1;
w = "string"; // no error
w = {
  runANonExistentMethod: () => {
    console.log("I think therefore I am");
  }
} as { runANonExistentMethod: () => void}
// How can we avoid the error for the code commented out below when we don't know the type?
// w.runANonExistentMethod(); // Error: Object is of type 'unknown'.
if(typeof w === 'object' && w !== null) {
  (w as { runANonExistentMethod: Function }).runANonExistentMethod();
}

// let x: never = true; // Error: Type 'boolean' is not assignable to type 'never'.

// undefined and null are types that refer to the JavaScript primitives undefined and null respectively.

let y: undefined = undefined;
let z: null = null; // when we asign type null it's type object

console.log("Type of y: ", typeof(y));
console.log("Type of z: ", typeof(z));


