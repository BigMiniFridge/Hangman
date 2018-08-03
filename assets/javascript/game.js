

var words = ["sessionnine", "evildead", "halloween"];
var guessedLetters = [];
var guessedWord = [];
var wordIndex;
var start = false;
var end = false;
var wins = 0;
const tries = 5;
guesses = 0;

document.onkeyup = function (event) {
   
    if (end) {
        newGame();
        end = false;
    }

    else {
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            guess(event.key.toLowerCase());

        }
    }

};

function newGame() {

    document.getElementById("#session9") = "display: none";
    document.getElementById("#evildead") = "display: none";
    document.getElementById("#halloween") = "display: none";
    document.getElementById("#tryagain") = "display: none";
    document.getElementById("#loser") = "display: none";

    for (var i = 0; i < words[word].length; i++) {
        guessedWord.push('_');
    }

   guesses = tries;
    start = false;
   
    wordIndex = Math.floor(Math.random() * (words.length));
    guessedLetters = [];
    guessedWord = [];

    gameCounter();

};

function gameCounter() {
    document.getElementById("#winnumber").innerText = wins;
    document.getElementById("#word").innerText = "";
   for (var i = 0; i<guessedWord.length; i++) {
    document.getElementById("#word").innerText += guessedWord[i];
   } 
    document.getElementById("#guesses").innerText = guesses;
    document.getElementById("#guessedLetter").innerText = guessedLetters;
   if(guesses <=0) { 
       document.getElementById("#loser") = "display: block";
    // document.getElementById("tryagain")

};



function guess(letter) {

    if (guesses > 0) {
        if (!start) {
            start = true;
        }
        if (guessedLetters.indexOf(letter) === -1) {
            guessedLetters.push(letter);
            matchLetters(letter);
        }
    }

   gameCounter();
   win();

};

function matchLetters(letter) {
    
    var position = [];
    for (var i = 0; i < words[wordIndex].length; i++) {
        if (words[wordIndex][i] === letter) {
            position.push(i);
        }
    }
    if (position.length <= 0) {
        guesses--;
    }
    else {
        for (var i = 0; i < position.length; i++) {
            guessedWord[position[i]] = letter;
        }
    }
};

function win() {
    if (guessedWord.indexOf("_") === -1) {

    }
};

