let guessedNumberList = [];
let highscore = Infinity;
let score = 0;
let randomNumber = 4 //Math.floor(Math.random() * 10) + 1;

function guessTheNumber() {
    let guessedNumber = Number(document.getElementById("guessedNumber").value);// Get the guessed number from the input field
    let clue;
    score++;//****count the first attempt as well******
    document.getElementById("score").innerHTML = score;
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
    }
    else {
        clue = "lower";
        document.getElementById("clue").innerHTML = clue;
    }

}
function again() {
    randomNumber = 4//Math.floor(Math.random() * 10) + 1;//generate new random number
    guessedNumberList = [];
    document.getElementById("guessedNumbers").innerHTML = "";
    score = 0;
    document.getElementById("score").innerHTML = score;
    document.getElementById("clue").innerHTML = "";
    highscore = highscore;//highscore should not be reset
    document.getElementById("highscore").innerHTML = highscore;
    guessedNumber.value = "";//clear the input field
}