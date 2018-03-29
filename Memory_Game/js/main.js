var cards = ["queen", "queen", "king", "king"]
var cardOne = cards[0]
var cardTwo = cards[3]
var cardsInPlay = []
cardsInPlay.push(cardOne)
cardsInPlay.push(cardTwo)
console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);
if (cardsInPlay[0] === cardsInPlay[3]) {
	alert("You found a match!");
}
else if (cardsInPlay[0] !== cardsInPlay[3]) {
	alert("Try Again");
}