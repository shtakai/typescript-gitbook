var CardSuit;
(function (CardSuit) {
    CardSuit[CardSuit["Clubs"] = 0] = "Clubs";
    CardSuit[CardSuit["Diamonds"] = 1] = "Diamonds";
    CardSuit[CardSuit["Hearts"] = 2] = "Hearts";
    CardSuit[CardSuit["Spades"] = 3] = "Spades";
})(CardSuit || (CardSuit = {}));
var card = CardSuit.Clubs;
console.log(card);
console.log(CardSuit.Hearts);
console.log(CardSuit[CardSuit.Hearts]);
card = "not a menmber of card suit";
console.log(card);
