//array to store with all letters
let letters = [
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

//scores and guesses counter variables
let wins = 0;
let losses = 0;
let guessesLeft = 9;
let guessedLetters = [];
//Variables for displaying text id's
let winsText = document.getElementById("wins_text");
let lossesText = document.getElementById("losses_text");
let guessesLeftText = document.getElementById("guesses_left_text");
let guessMadeText = document.getElementById("guesses_made_text");

//makes the computer choose a random letter
let computerGuess = letters[Math.floor(Math.random() * letters.length)];

console.log(computerGuess);

// collects user input for what character is pressed
document.onkeyup = function(event) {
  let userGuess = event.key;
  console.log(userGuess);

  //check if user guess correctly add a point to wins counter. restart game when either of the above statements is true
  if (userGuess === computerGuess) {
    wins++;
    guessedLetters = [];
    guessesLeft = 9;
  }
  //check if the computer and user chose the same character. if user guess wrong all nine times add a point for losses counter
  else {
    guessesLeft--;
  }
  //checks if guesses is 0 and takes away a guess
  if (guessesLeft === 0) {
    losses++;
    guessedLetters = [];
    guessesLeft = 9;
  }

  guessMadeText.textContent = guessedLetters;
  guessesLeftText.textContent = guessesLeft;
  winsText.textContent = wins;
  lossesText.textContent = losses;
};
