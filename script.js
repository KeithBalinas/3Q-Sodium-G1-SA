let array = ["BRICK", "JUMPS", "FLOWN", "TABLE", "PARTY", "SHOCK", "GUILD", "BRAND", 
            "SWIFT", "CHAMP", "DIETS", "BLURT", "COVER", "MIXED", "GRAPH", "FUNKY", 
            "WHILE", "LOADS", "EMPTY", "PLAYS", "QUART", "BISON", "PAUSE", "YANKS", 
            "FROTH", "CHIMP", "BOXER", "STUDY", "GLINT", "HAVOC", "DREAM", "PLUCK", 
            "ZESTY", "DROWN", "FABLE", "VOUCH", "GRIME", "HATCH", "JOLTS", "SPLIT", 
            "STICK", "SMASH", "MOVES", "BLADE", "DAISY", "LOVER", "SPIKY", "MONTH", 
            "RHYME", "BUDGE"];
let word = array[Math.floor(Math.random() * array.length)];
let inputLetter;
let guessedLetters = ["","","","",""];
let lives = 5;
let score = 0;

function setUpGame(){
    document.getElementById('lives').innerText = lives;
}

function checkLetter() {
    inputLetter = prompt("Enter a letter:").toUpperCase();;

    if (inputLetter === null) {
        alert('Input canceled.');
        return;
    }
    if (inputLetter.length !== 1 || !inputLetter.match(/[A-Z]/)) {
        alert('Please enter ONLY ONE letter.');
        return;
    }

    var letterFound = false;

    if (inputLetter === word[0]) {
        guessedLetters[0] = inputLetter;
        letterFound = true;
        document.getElementById('s1').innerText = guessedLetters[0];
        score++;
    }
    if (inputLetter === word[1]) {
        guessedLetters[1] = inputLetter;
        letterFound = true;
        document.getElementById('s2').innerText = guessedLetters[1];
        score++;
    }
    if (inputLetter === word[2]) {
        guessedLetters[2] = inputLetter;
        letterFound = true;
        document.getElementById('s3').innerText = guessedLetters[2];
        score++;
    }
    if (inputLetter === word[3]) {
        guessedLetters[3] = inputLetter;
        letterFound = true;
        document.getElementById('s4').innerText = guessedLetters[3];
        score++;
    }
    if (inputLetter === word[4]) {
        guessedLetters[4] = inputLetter;
        letterFound = true;
        document.getElementById('s5').innerText = guessedLetters[4];
        score++;
    }

    if (!letterFound){
        if (lives >= 0) {
            lives--;
            document.getElementById('lives').innerText = lives;
            revealHangman(lives);
            alert('The letter is not in the word. You have ' + lives + ' attempts left.');
        }
        if (lives === 0) {
            document.getElementById('lives').innerText = lives;
            revealHangman(lives);
            alert(`Game Over! The word was: ${word}. Please reload the webpage if you want to play again.`);
            return;
        }
    }

    if (score === 5) {
        document.getElementById('lives').innerText = lives;
        revealHangman(lives);
        alert('Congratulations! You guessed the word! Please reload the webpage if you want to play again.');
        return;
    }
}

function revealHangman() {
    if (lives === 4) {
        document.getElementById('head').style.display = "block";
        document.getElementById('torso').style.display = "block";
        document.getElementById('lives').innerText = lives;
    }
    if (lives === 3) {
        document.getElementById('arm-1').style.display = "block";
        document.getElementById('lives').innerText = lives;
    }
    if (lives === 2) {
        document.getElementById('arm-2').style.display = "block";
        document.getElementById('lives').innerText = lives;
    }
    if (lives === 1) {
        document.getElementById('foot-1').style.display = "block";
        document.getElementById('lives').innerText = lives;
    }
    if (lives === 0){
        document.getElementById('foot-2').style.display = "block";
        document.getElementById('lives').innerText = lives;
    } 
}

window.onload = setUpGame;
