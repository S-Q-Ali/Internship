'use strict';

let dice_num_Display = document.querySelector('.dice');
let roll_button = document.querySelector('.btn--roll');
let current_score_0 = document.querySelector('#current--0');
let current_score_1 = document.querySelector('#current--1');
const reset_game = document.querySelector('.btn--new');
let score_element_0 = document.querySelector('#score--0');
let score_element_1 = document.querySelector('#score--1');
const hold_button = document.querySelector('.btn--hold');

let activePlayer = 0;  // 0 is Player 1, 1 is Player 2
let currentScore_0 = 0;  // Current score for Player 1
let currentScore_1 = 0;  // Current score for Player 2
let totalScore_0 = 0;    // Total score for Player 1
let totalScore_1 = 0;    // Total score for Player 2

// Roll button functionality
roll_button.addEventListener('click', function () {
    let random = Math.floor(Math.random() * 6) + 1;
    console.log(random);
    dice_num_Display.src = `dice-${random}.png`;

    if (activePlayer === 0) {
        if (random !== 1) {
            currentScore_0 += random;
            current_score_0.textContent = currentScore_0;
        } else {
            // Player 1 rolled a 1, switch player
            current_score_0.textContent = 0;
            currentScore_0 = 0;
            activePlayer = 1;
        }
    } else {
        if (random !== 1) {
            currentScore_1 += random;
            current_score_1.textContent = currentScore_1;
        } else {
            // Player 2 rolled a 1, switch player
            current_score_1.textContent = 0;
            currentScore_1 = 0;
            activePlayer = 0;
        }
    }
});

// Hold button functionality
hold_button.addEventListener('click', function () {
    if (activePlayer === 0) {
        totalScore_0 += currentScore_0;
        score_element_0.textContent = totalScore_0;
        currentScore_0 = 0;  // Reset current score for Player 1
        current_score_0.textContent = 0;
        if (totalScore_0 >= 100) {
            alert('Player 1 Wins!');
            resetGame();
        } else {
            activePlayer = 1;  // Switch to Player 2
        }
    } else {
        totalScore_1 += currentScore_1;
        score_element_1.textContent = totalScore_1;
        currentScore_1 = 0;  // Reset current score for Player 2
        current_score_1.textContent = 0;
        if (totalScore_1 >= 100) {
            alert('Player 2 Wins!');
            resetGame();
        } else {
            activePlayer = 0;  // Switch to Player 1
        }
    }
});

// Reset game functionality
reset_game.addEventListener('click', resetGame);

function resetGame() {
    // Reset all scores and UI elements
    currentScore_0 = 0;
    currentScore_1 = 0;
    totalScore_0 = 0;
    totalScore_1 = 0;
    current_score_0.textContent = 0;
    current_score_1.textContent = 0;
    score_element_0.textContent = 0;
    score_element_1.textContent = 0;
    dice_num_Display.src = `dice-1.png`;
    activePlayer = 0;  // Set Player 1 as active
}