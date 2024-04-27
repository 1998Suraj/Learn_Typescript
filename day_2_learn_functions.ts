function add(x: number, y: number): number {
    return x + y;
}

let myAdd = function (x: number, y: number): number {
    return x + y;
};

console.log("myAdd: ", myAdd(2, 3));
console.log("add: ", add(2, 3));

