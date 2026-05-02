let guessedNumberList = [];
let highscore = 20;
let score = 0;
let randomNumber = Math.floor(Math.random() * 100) + 1;
let starInterval = null;
let winaudio = new Audio("resource/mixkit-instant-win-2021.wav");
let wrongaudio = new Audio("resource/mixkit-game-show-wrong-answer-buzz-950.wav");
let gameOverAudio = new Audio("resource/alphix-game-over-417465.mp3");

function guessTheNumber() {
    let guessedNumber = Number(document.getElementById("guessedNumber").value);// Get the guessed number from the input field
    let clue;

    document.getElementById("numberOfGuesses").innerHTML = score;

    if (score >= 20) {
        clue = "you are out of guesses, Try Again"
        gameOverAudio.play();
        document.getElementById("clue").innerHTML = clue;
        return;
    }

    score++; // Only increment if less than 20//****count the first attempt as well******
    guessedNumberList.push(guessedNumber);
    document.getElementById("guessedNumbers").innerHTML = guessedNumberList.join(" , ");

    if (guessedNumber === randomNumber) {
        clue = "Congratulations! You guessed the number!";
        document.getElementById("clue").innerHTML = clue;
        winaudio.play();
        if (score < highscore) {
            highscore = score;
            document.getElementById("highscore").innerHTML = highscore;
            document.getElementById("badge").style.display = "block";
            document.getElementById("clue").style.color = "rgb(150, 133, 91)";
            if (!starInterval) {
                starInterval = setInterval(createStar, 200);
            }

        }
        return;//stopping user to guess after winning the game
    }
    else if (guessedNumber < randomNumber) {
        clue = "higher";
        document.getElementById("clue").innerHTML = clue;
        document.getElementById("guessedNumber").value = "";
        document.getElementById("clue").style.color = "rgb(148, 84, 84)";
        wrongaudio.play();
    }
    else {
        clue = "lower";
        document.getElementById("clue").innerHTML = clue;
        document.getElementById("guessedNumber").value = "";
        document.getElementById("clue").style.color = "rgb(76, 168, 95)";
        wrongaudio.play();
    }


}
function again() {
    randomNumber = Math.floor(Math.random() * 100) + 1;//generate new random number
    guessedNumberList = [];
    ocument.getElementById("badge").style.display = "none";
    document.getElementById("guessedNumbers").innerHTML = "";
    score = 0;
    document.getElementById("numberOfGuesses").innerHTML = score;
    document.getElementById("clue").innerHTML = "";
    highscore = highscore;//highscore should not be reset
    document.getElementById("highscore").innerHTML = highscore;
    document.getElementById("guessedNumber").value = "";//clear the input field
    document.getElementById("clue").style.color = "black";
    // STOP animation
    clearInterval(starInterval);
    starInterval = null;

    // remove existing stars from screen
    document.querySelector(".stars").innerHTML = "";
}
function createStar() {
    const star = document.createElement("div");
    star.classList.add("star");

    const img = document.createElement("img");
    img.src = "resource/star.png";

    star.appendChild(img);

    star.style.left = Math.random() * 100 + "vw";
    star.style.animationDuration = (Math.random() * 3 + 2) + "s";

    document.querySelector(".stars").appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 5000);
}