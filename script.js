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

/*
const words = [
    "WORLD", "CRAZY", "PLANE", "BRAIN", "QUICK", "JUMPS", "FROST", "GLIDE",
    "CHAMP", "BLINK", "SHORE", "GHOST", "TRICK", "BRAVE", "DANCE", "MIGHT",
    "FLOCK", "BRINK", "SPORE", "THUMB", "WIDEN", "YOUTH", "MERCY", "COVER",
    "JOKER", "SMILE", "FRUIT", "LARGE", "NOBLE", "WRECK", "DRINK", "FLICK",
    "PRIDE", "WALTZ", "FJORD", "PIXEL", "RHYME", "BASIC", "LEMON", "SWORD",
    "WORLD", "CRAZY", "PLANE", "BRAIN", "QUICK", "JUMPS", "FROST", "GLIDE",
    "CHAMP", "BLINK", "SHORE", "GHOST", "TRICK", "BRAVE", "DANCE", "MIGHT",
    "FLOCK", "BRINK", "SPORE", "THUMB", "WIDEN", "YOUTH", "MERCY", "COVER",
    "JOKER", "SMILE", "FRUIT", "LARGE", "NOBLE", "WRECK", "DRINK", "FLICK",
    "PRIDE", "WALTZ", "FJORD", "PIXEL", "RHYME", "BASIC", "LEMON", "SWORD",
    "CLAMP", "GRIND", "FLECK", "BUDGE", "STORM", "QUARK", "GRAZE", "SWIFT",
    "CLOUT", "DOZEN"
];

let currentWord = "";
let health = 5;
let score = 0;
let guessedLetters = [];

function initGame() {
    health = 5;
    score = 0;
    guessedLetters = [];
    currentWord = getRandomWord();
    setBlanks(0);
    updateHangman(health);
    document.getElementById("lives").textContent = health;
}

function isHeterogram(word, i = 0, j = 1) {
    if (i >= word.length) return true;
    if (j >= word.length) return isHeterogram(word, i + 1, i + 2);
    if (word[i] === word[j]) return false;
    return isHeterogram(word, i, j + 1);
}

function getValidWords(i = 0, valid = []) {
    if (i >= words.length) return valid;
    const w = words[i];
    if (w.length === 5 && isHeterogram(w)) valid.push(w);
    return getValidWords(i + 1, valid);
}

function getRandomWord() {
    const validWords = getValidWords();
    if (validWords.length === 0) {
        throw new Error("No valid 5-letter heterogram words available.");
    }
    const randomIndex = Math.floor(Math.random() * validWords.length);
    return validWords[randomIndex];
}

function updateHangman(currentHealth) {
    document.getElementById("head").style.display = currentHealth < 5 ? "block" : "none";
    document.getElementById("arm-1").style.display = currentHealth < 4 ? "block" : "none";
    document.getElementById("torso").style.display = currentHealth < 4 ? "block" : "none";
    document.getElementById("arm-2").style.display = currentHealth < 3 ? "block" : "none";
    document.getElementById("foot-1").style.display = currentHealth < 2 ? "block" : "none";
    document.getElementById("foot-2").style.display = currentHealth < 1 ? "block" : "none";
}

function setBlanks(index) {
    if (index >= currentWord.length) return;
    const letterElement = document.getElementById(s-${index});
    if (letterElement) {
        letterElement.textContent = "_";
    }
    setBlanks(index + 1);
}

function revealLetters(index, letter) {
    if (index >= currentWord.length) return;
    if (currentWord[index] === letter) {
        const letterElement = document.getElementById(s-${index});
        if (letterElement && letterElement.textContent === "_") {
            letterElement.textContent = letter;
            score++;
        }
    }
    revealLetters(index + 1, letter);
}

function isInArray(array, value, i = 0) {
    if (i >= array.length) return false;
    if (array[i] === value) return true;
    return isInArray(array, value, i + 1);
}

function isInWord(word, letter, i = 0) {
    if (i >= word.length) return false;
    if (word[i] === letter) return true;
    return isInWord(word, letter, i + 1);
}

function guessLetter() {
    const userGuess = prompt("Enter a letter:").toUpperCase();
    if (!userGuess || userGuess.length !== 1 || !userGuess.match(/[A-Z]/)) {
        alert("Please enter a single letter (A-Z).");
        return;
    }
    if (isInArray(guessedLetters, userGuess)) {
        alert("You already guessed that letter!");
        return;
    }
    guessedLetters.push(userGuess);
    if (isInWord(currentWord, userGuess)) {
        revealLetters(0, userGuess);
        if (score === currentWord.length) {
            setTimeout(() => {
                alert("Congratulations, you won!");
                initGame();
            }, 100);
        }
    } else {
        health--;
        updateHangman(health);
        document.getElementById("lives").textContent = health;
        if (health === 0) {
            setTimeout(() => {
                alert(Game Over! The word was: ${currentWord});
                initGame();
            }, 100);
        }
    }
}

window.onload = initGame;
*/