let player = {
  Name: "bek",
  chips: 115,
};
let sum = 0;
let cards = [];
let hasBlackjack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.Name + ":" + " " + "$" + player.chips;
function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13 + 1);
  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber >= 11) {
    return 10;
  }
  return randomNumber;
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;

  renderGame();
}

function renderGame() {
  cardsEl.textContent = "cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "you've got Blackjack!";
    hasBlackjack = true;
  } else {
    message = "you are out of the game";
    isAlive = false;
  }
  messageEl.textContent = message;
}
function newCard() {
  if (hasBlackjack === false && isAlive === true) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
