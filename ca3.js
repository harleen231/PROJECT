function suggestActivities() {
    const mood = document.getElementById('moodSelect').value;
    const suggestionList = document.getElementById('suggestionList');
    suggestionList.innerHTML = '';

    const suggestions = {
        happy: ['Keep a gratitude journal.', 'Share your joy with friends.'],
        sad: ['Watch a funny movie.', 'Take a short walk outside.'],
        anxious: ['Practice deep breathing.', 'Try meditation or yoga.'],
        stressed: ['Listen to calming music.', 'Do some stretches.'],
        neutral: ['Read a good book.', 'Explore a new hobby.']
    };

    if (mood && suggestions[mood]) {
        suggestions[mood].forEach(suggestion => {
            const li = document.createElement('li');
            li.textContent = suggestion;
            suggestionList.appendChild(li);
        });
        document.getElementById('suggestions').classList.remove('hidden');
    } else {
        alert('Please select a mood.');
    }
}

function startGame(game) {
    const gameOutput = document.getElementById('gameOutput');
    gameOutput.innerHTML = '';
    document.getElementById('gameArea').classList.remove('hidden');

    if (game === 'guessing') {
        guessingGame();
    } else if (game === 'word') {
        wordScrambleGame();
    }
}

function guessingGame() {
    const numberToGuess = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    const askGuess = () => {
        const userGuess = prompt('Guess a number between 1 and 100:');
        if (userGuess) {
            attempts++;
            if (userGuess == numberToGuess) {
                alert(`Congratulations! You guessed the number in ${attempts} attempts.`);
                endGame();
            } else if (userGuess < numberToGuess) {
                gameOutput.innerHTML += '<p>Higher!</p>';
                askGuess();
            } else {
                gameOutput.innerHTML += '<p>Lower!</p>';
                askGuess();
            }
        }
    };

    askGuess();
}

function wordScrambleGame() {
    const words = ['javascript', 'html', 'css', 'react', 'node'];
    const wordToScramble = words[Math.floor(Math.random() * words.length)];
    const scrambledWord = wordToScramble.split('').sort(() => Math.random() - 0.5).join('');

    const userGuess = prompt(`Unscramble this word: ${scrambledWord}`);
    if (userGuess.toLowerCase() === wordToScramble) {
        alert('Well done! You unscrambled the word!');
    } else {
        alert(`Oops! The correct word was ${wordToScramble}.`);
    }
    endGame();
}

function endGame() {
    document.getElementById('gameArea').classList.add('hidden');
}
