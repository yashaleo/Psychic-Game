var playerWins = 0;
var playerLosses = 0;
var playerGuessesLeft = 9;
var playerGuesses;
var compChoice;

var letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

var playerGuessList = [];
var playerGuesses = document.getElementById("playerGuesses").innerHTML;

var compPick = function() {
  compChoice = letters[Math.floor(Math.random() * letters.length)];
  console.log("Comp Picked " + compChoice);
};

var gameStart = function() {
  playerGuessesLeft = 9;
  compPick();
  document.getElementById("playerWins").innerHTML = "Wins: " + playerWins;
  document.getElementById("playerLosses").innerHTML = "Losses: " + playerLosses;
  document.getElementById("playerGuessesLeft").innerHTML =
    "Guesses Left: " + playerGuessesLeft;
  console.log("Start OVER PLEASE!");
  playerGuesses = [];
};

document.onkeyup = function(event) {
  playerGuesses = String.fromCharCode(event.keyCode).toLocaleLowerCase();
  console.log("player picked " + playerGuesses);
  letterChecker();
  playerGuessList.push(playerGuesses);
  document.getElementById("playerGuesses").innerHTML =
    "Your Guesses So Far: " + playerGuessList;
};

document.getElementById("playerWins").innerHTML = "Wins: " + playerWins;
document.getElementById("playerLosses").innerHTML = "Losses: " + playerLosses;
document.getElementById("playerGuessesLeft").innerHTML =
  "Guesses Left: " + playerGuessesLeft;

var letterChecker = function() {
  if (playerGuesses == compChoice) {
    alert("Got it!");
    playerWins++;
    document.getElementById("playerGuesses").innerHTML =
      "Your Guesses So Far: " + playerGuessList;
    playerGuessList = [];
    gameStart();
  }
  if (playerGuessesLeft == 0) {
    alert("You lost!");
    playerLosses++;
    document.getElementById("playerLosses").innerHTML =
      "Losses: " + playerLosses;
    playerGuessList = [];
    gameStart();
  } else {
    playerGuessesLeft--;
    document.getElementById("playerGuessesLeft").innerHTML =
      "Guesses Left: " + playerGuessesLeft;
  }
};
