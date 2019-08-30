// var letterChoices = ['a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

// //score
// var wins = 0;
// var losses = 0;
// var guesses = 9;
// var guessesLeft = 9;
// var guessedLetters = [];
// var letterToGuess = null;

// //computer randomly chooses a letter

// var computerGuess = letterChoices [Math.floor(Math.random()*letterChoices.length)];

// //guesses left function

// var updateGuessesLeft = function() {
//     document.querySelector('#guessLeft').innerHTML = "Guesses Left: " + guessesLeft;
// };

// //letter to guess function

// var updateletterToGuess = function(){
//     this.letterToGuess = this.letterChoices[Math.floor(Math.random() * this.letterChoices.length)];
// };

// var updateGuessesSoFar = function(){
//     document.querySelector('#let').innerHTML = "Your guesses so far: " + guessedLetters.join(', ');
// };

// //reset

// var reset = function(){
//     totalGuesses = 9;
//     guessesLeft = 9;
//     guessedLetters = [];

//     updateletterToGuess();
//     updateGuessesSoFar();
//     updateGuessesLeft();

// };

// updateGuessesLeft();
// updateletterToGuess();

// //user input key

// document.onkeyup = function(event) {
//     guessesLeft--;
//     var userGuess;
//     console.log(userGuess)

//     guessedLetters.push(userGuess);
//     updateGuessesLeft();
//     updateGuessesSoFar();

//         if (guessesLeft > 0){
//             if (userGuess === letterToGuess){
//                 wins++;
//                 document.querySelector('#wins').innerHTML = 'Wins: ' + wins;
//                 alert("How did you know!?!");
//                 reset();
//             }
//         } else if (guessesLeft == 0){
//             losses++;
//             document.querySelector('#losses').innerHTML = 'Losses: ' + losses;
//             alert("Sorry, you're not a psychic!");

//             reset();
//         }
// }











//array to store with all letters
let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//scores and guesses counter variables
let wins = 0;
let losses = 0;
let guessesLeft = 9;
let guessedLetters = [];
//Variables for displaying text id's
let winsText = document.getElementById("wins_text");
let lossesText = document.getElementById("losses_text");
let guessesLeftText = document.getElementById("guesses_left_text");
let guessMadeText = document.getElementById("guess_made_text");

//makes the computer choose a random letter
let computerGuess = letters[Math.floor(Math.random() * letters.length)];

console.log(computerGuess)

// collects user input for what character is pressed
document.onkeyup = function (event) {
    var userGuess = event.key;
    console.log(userGuess)

    //check if user guess correctly add a point to wins counter. restart game when either of the above statements is true
    if (userGuess === computerGuess) {
        wins++;
        guessedLetters = []
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

    //guessMadeText.textContent = guessedLetters;
    guessesLeft.textContent = guessesLeftText;
    winsText.textContent = wins;
    lossesText.texContent = losses;
}