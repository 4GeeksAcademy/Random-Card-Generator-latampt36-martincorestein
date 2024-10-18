/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  generateCard();
};

document.getElementById("generate-btn").addEventListener("click", generateCard);

function generateCard() {
  const suits = ["heart", "spade", "diamond", "club"];
  const numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let randomSuit = suits[Math.floor(Math.random() * suits.length)];
  let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

  let card = document.getElementById("card");
  let topSuit = document.querySelector(".top-suit");
  let bottomSuit = document.querySelector(".bottom-suit");
  let number = document.querySelector(".number");

  card.className = `card border border-dark shadow ${randomSuit}`;

  number.textContent = randomNumber;
  topSuit.innerHTML = getSuitSymbol(randomSuit);
  bottomSuit.innerHTML = getSuitSymbol(randomSuit);

  topSuit.classList.remove("text-danger", "text-dark");
  bottomSuit.classList.remove("text-danger", "text-dark");
  number.classList.remove("text-danger", "text-dark");

  if (randomSuit === "heart" || randomSuit === "diamond") {
    topSuit.classList.add("text-danger");
    bottomSuit.classList.add("text-danger");

    if (["A", "J", "Q", "K"].includes(randomNumber)) {
      number.classList.add("text-danger");
    } else {
      number.classList.add("text-dark");
    }
  } else {
    topSuit.classList.add("text-dark");
    bottomSuit.classList.add("text-dark");
    number.classList.add("text-dark");
  }
}

function getSuitSymbol(suit) {
  const suitSymbols = {
    heart: "♥",
    spade: "♠",
    diamond: "♦",
    club: "♣"
  };
  return suitSymbols[suit];
}
