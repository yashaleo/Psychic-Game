var playerWins = 0;
var playerLosses = 0;
var playerGuessesLeft = 0;
var playerGuesses = 0;
var compPick = 0;

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var playerGuessList = [];

var gameStart = function () {
document.getElementById("playerWins").innerHTML = "Wins: " + playerWins;
document.getElementById("playerLosses").innerHTML = "Losses: " + playerLosses;
document.getElementById("playerGuessesLeft").innerHTML = "Guesses Left: " + playerGuessesLeft;
document.getElementById("playerGuesses").innerHTML = "Your Guesses So Far: " + playerGuesses;
}

var compPick = function() {
compChoice = letters[Math.floor(Math.random() * letters.length)];
}

document.onkeyup = function (event) {
    playerGuesses = String.fromCharCode(event.keyCode)
    .toLocaleLowerCase();
    letterChecker();
    playerGuessList.push(playerGuesses);
    document.getElementById("playerGuesses").innerHTML = "You guessed:" + playerGuessList;
}

var letterChecker = function () {
if (playerGuesses === compChoice) {
    alert ("Got it!");
    playerWins++;
    compPick();
    gameStart();
    document.getElementById("playerGuesses").innerHTML = "Guessed: " + playerGuessList;
}
else {

}

}
