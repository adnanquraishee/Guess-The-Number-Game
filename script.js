// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10; // Number of attempts allowed
let gameOver = false;

// Function to check the user's guess
function checkGuess() {
    if (gameOver) return;
    const guess = parseInt(document.getElementById('guess-input').value);
    const result = document.getElementById('result');
    if (isNaN(guess) || guess < 1 || guess > 100) {
        result.innerText = 'Please enter a valid number between 1 and 100.';
    } else {
        attempts--;
        if (guess === randomNumber) {
            result.innerText = `Congratulations! You guessed the number ${randomNumber} correctly in ${10 - attempts} attempts.`;
            gameOver = true;
        } else if (guess < randomNumber) {
            result.innerText = `Try a higher number. ${attempts} attempts left.`;
        } else {
            result.innerText = `Try a lower number. ${attempts} attempts left.`;
        }
        if (attempts === 0) {
            result.innerText = `Game over! The number was ${randomNumber}.`;
            gameOver = true;
        }
    }
}

// Event listener for check button
document.getElementById('check-btn').addEventListener('click', checkGuess);

// Event listener for restart button
document.getElementById('restart-btn').addEventListener('click', function() {
    location.reload();
});

