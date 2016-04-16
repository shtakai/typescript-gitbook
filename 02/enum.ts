enum CardSuit {
  Clubs,
  Diamonds,
  Hearts,
  Spades
}

var card = CardSuit.Clubs;
console.log(card);
console.log(CardSuit.Hearts);
console.log(CardSuit[CardSuit.Hearts]);
card = "not a menmber of card suit";
console.log(card);
