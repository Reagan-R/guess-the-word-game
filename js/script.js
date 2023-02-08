const guessedLettersElement = document.querySelector(".guessed-letters");
const guessLetterButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";
const guessedLetters = [];

//add placeholder symbol
const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
};
placeholder(word);


//add event listener
guessLetterButton.addEventListener ("click", function (e) {
    e.preventDefault();
    //empty text of message element
    message.innerText = "";
    const guess = letterInput.value;
    console.log(guess);
    const Guess = letterInput.value;
    const goodGuess = playerInput(guess);

    if (goodGuess) {
        makeGuess(guess);
    }
    letterInput.value = "";
});



const playerInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
        //Is the input empty?
        message.innerText = "Please enter a letter.";
    } else if (input.length > 1) {
        //Has player entered more than one letter?
        message.innerText = "Please eneter a single letter.";
    } else if (!input.match(acceptedLetter)) {
       // Did you enter something other than a letter?
       message.innerText = "Please enter a letter from A-Z.";
    } else {
        //Single letter entered.;
        return input;
    }
};

const makeGuess = function (guess) {
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
        message.innerText = "You already guessed that letter. Try again.";
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
    }
};