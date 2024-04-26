const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
console.log(car);


const car1 = {
    type: "Toyota",
};
car1.type = "Ford"; // no error
//   car.type = 2; // Error: Type 'number' is not assignable to type 'string'.
console.log("car1: ", car1.type);

// const car2: { type: string, mileage: number } = { // Error: Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.
//     type: "Toyota"
//   };
//   car2.mileage = 2000;

//   console.log("car2: ", car2.mileage);

const car3: { type: string, mileage?: number } = { // no error
    type: "Toyota"
};
car3.mileage = 2000;
console.log("car3: ", car3.mileage);

// Index Signatures
// Index signatures can be used for objects without a defined list of properties.
const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25; // no error
// nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.