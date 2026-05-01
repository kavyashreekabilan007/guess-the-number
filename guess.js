let guessedNumberList = [];
let highscore = Infinity;
let score = 0;
let randomNumber = Math.floor(Math.random() * 100) + 1;

function guessTheNumber() {
    let guessedNumber = Number(document.getElementById("guessedNumber").value);// Get the guessed number from the input field
    let clue;

    document.getElementById("numberOfGuesses").innerHTML = score;

    if (score >= 20) {
        clue = "you are out of guesses, Try Again"
        document.getElementById("clue").innerHTML = clue;
        return;
    }

    score++; // Only increment if less than 20//****count the first attempt as well******
    guessedNumberList.push(guessedNumber);
    document.getElementById("guessedNumbers").innerHTML = guessedNumberList.join(" , ");

    if (guessedNumber === randomNumber) {
        clue = "Congratulations! You guessed the number!";
        document.getElementById("clue").innerHTML = clue;
        if (score < highscore) {
            highscore = score;
            document.getElementById("highscore").innerHTML = highscore;

        }
        return;//stopping user to guess after winning the game
    }
    else if (guessedNumber < randomNumber) {
        clue = "higher";
        document.getElementById("clue").innerHTML = clue;
        document.getElementById("guessedNumber").value = "";
    }
    else {
        clue = "lower";
        document.getElementById("clue").innerHTML = clue;
        document.getElementById("guessedNumber").value = "";
    }


}
function again() {
    randomNumber = Math.floor(Math.random() * 100) + 1;//generate new random number
    guessedNumberList = [];
    document.getElementById("guessedNumbers").innerHTML = "";
    score = 0;
    document.getElementById("numberOfGuesses").innerHTML = score;
    document.getElementById("clue").innerHTML = "";
    highscore = highscore;//highscore should not be reset
    document.getElementById("highscore").innerHTML = highscore;
    guessedNumber.value = "";//clear the input field
}