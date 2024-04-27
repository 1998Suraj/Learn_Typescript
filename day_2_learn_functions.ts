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


