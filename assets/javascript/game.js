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

var gameStart = function() {
    playerGuessesLeft = 9;
  document.getElementById("playerWins").innerHTML = "Wins: " + playerWins;
  document.getElementById("playerLosses").innerHTML = "Losses: " + playerLosses;
  document.getElementById("playerGuessesLeft").innerHTML =
    "Guesses Left: " + playerGuessesLeft;
  document.getElementById("playerGuesses").innerHTML =
    "Your Guesses So Far: " + playerGuesses;
    console.log("Start OVER PLEASE!")
  compPick();
  playerGuesses.empty();
  playerGuesses = "You guessed: " + playerGuessList;
};

var compPick = function() {
  compChoice = letters[Math.floor(Math.random() * letters.length)];
  console.log("Comp Picked! " + compChoice)
};

document.onkeyup = function(event) {
  playerGuesses = String.fromCharCode(event.keyCode).toLocaleLowerCase();
  console.log("player picked!: " + playerGuesses);
  letterChecker();
  playerGuessList.push(playerGuesses);
  console.log("playerGuessList")
  document.getElementById("playerGuesses").innerHTML =
    "You guessed:" + playerGuessList;
}

var letterChecker = function() {
  if (playerGuesses === compChoice) {
    alert("Got it!");
    playerWins++;
    compPick();
    gameStart();
    document.getElementById("playerGuesses").innerHTML =
      "Guessed: " + playerGuessList;
  } else {
      playerGuessesLeft--;
      document.getElementById("playerGuessesLeft").innerHTML = "Guesses Left: " + playerGuessesLeft;
  }
  if (playerGuessesLeft === 0) {
      alert ("You lost!")
      playerLosses++
      document.getElementById(playerLosses).innerHTML = "Losses: " + playerLosses;
      playerGuessList = [];
      gameStart();
  }
}

document.getElementById("playerWins").innerHTML = "Wins: " + playerWins;
document.getElementById("playerLosses").innerHTML = "Losses: " + playerLosses;
document.getElementById("playerGuessesLeft").innerHTML = "Guesses Left: " + playerGuessesLeft;


