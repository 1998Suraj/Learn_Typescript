function add(x: number, y: number): number {
    return x + y;
}

let myAdd = function (x: number, y: number): number {
    return x + y;
};

console.log("myAdd: ", myAdd(2, 3));
console.log("add: ", add(2, 3));

let myAdd1: (x: number, y: number) => number = function (
    x: number,
    y: number
): number {
    return x + y;
};
console.log("myAdd1: ", myAdd1(2, 3));

let myAdd2: (baseValue: number, increment: number) => number = function (
    x: number,
    y: number
): number {
    return x + y;
};

console.log("myAdd2: ", myAdd2(2, 3));

function buildName(firstName: string, lastName?: string) {
    if (lastName) return firstName + " " + lastName;
    else return firstName;
}

let result1 = buildName("Bob"); // works correctly now
//   let result2 = buildName("Bob", "Adams", "Sr."); // error, too many parameters
//   Expected 1-2 arguments, but got 3.
let result3 = buildName("Bob", "Adams"); // ah, just right

console.log("result3: ", result3);

let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        };
    },
};

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();
console.log("pickedCard: ", pickedCard);

interface Card {
    suit: string;
    card: number;
}

interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
}

let deck1: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function (this: Deck) {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        };
    },
};

let cardPicker1 = deck.createCardPicker();
let pickedCard1 = cardPicker1();

console.log("pickedCard1: ", pickedCard1);

let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: any): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

let myDeck = [
    { suit: "diamonds", card: 2 },
    { suit: "spades", card: 10 },
    { suit: "hearts", card: 4 },
];

let pickedCard3 = myDeck[pickCard(myDeck)];
console.log("pickedCard3: ", pickedCard3);

let pickedCard4 = pickCard(15);
console.log("pickedCard4: ", pickedCard4);

function greeter(fn: (a: string) => void) {
    fn("Hello, World");
}

function printToConsole(s: string) {
    console.log(s);
}

greeter(printToConsole);


type DescribableFunction = {
    description: string;
    (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
    console.log(fn.description + " returned " + fn(6));
}

function myFunc(someArg: number) {
    return someArg > 3;
}
myFunc.description = "default description";

doSomething(myFunc);

function firstElement<Type>(arr: Type[]): Type | undefined {
    return arr[0];
}

// s is of type 'string'
const s = firstElement(["a", "b", "c"]);
// n is of type 'number'
const n = firstElement([1, 2, 3]);
// u is of type undefined
const u = firstElement([]);
console.log("s: ", s, "n: ", n, "u: ", u);

function firstElement1<Type>(arr: Type[]) {
    return arr[0];
  }
   
  function firstElement2<Type extends any[]>(arr: Type) {
    return arr[0];
  }
   
  // a: number (good)
  const a = firstElement1([1, 2, 3]);
  // b: any (bad)
  const b = firstElement2([1, 2, 3]);