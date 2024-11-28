// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get button elements
    const mainResetBtn = document.getElementById('mainResetBtn');
    const modalResetBtn = document.getElementById('modalResetBtn');

    // Add click listeners to both buttons
    [mainResetBtn, modalResetBtn].forEach(btn => {
        if (btn) {
            btn.addEventListener('click', handleReset);
        }
    });
});

// Handle reset button click
function handleReset(event) {
    event.preventDefault();
    resetGame();
}

// Main reset function
function resetGame() {
    try {
        // Reset game variables
        playerScore = 0;
        computerScore = 0;
        tries = 5;
        gameOver = false;

        // Update display elements
        updateGameDisplay();

        // Handle modal
        handleModalClose();

        // Enable game buttons if they were disabled
        enableGameButtons();

    } catch (error) {
        console.error('Error during game reset:', error);
        handleResetError();
    }
}

// Update all game display elements
function updateGameDisplay() {
    const elements = {
        playerScore: document.getElementById('playerScore'),
        computerScore: document.getElementById('computerScore'),
        tries: document.getElementById('tries'),
        result: document.getElementById('result')
    };

    // Update each element if it exists
    if (elements.playerScore) elements.playerScore.textContent = playerScore;
    if (elements.computerScore) elements.computerScore.textContent = computerScore;
    if (elements.tries) elements.tries.textContent = tries;
    if (elements.result) {
        elements.result.innerHTML = 'Choose your weapon, Space Warrior! 🛸';
    }
}

// Handle modal closing
function handleModalClose() {
    const modalElement = document.getElementById('gameOverModal');
    if (modalElement && typeof bootstrap !== 'undefined') {
        const modal = bootstrap.Modal.getInstance(modalElement);
        if (modal) {
            modal.hide();
        }
    }
}

// Enable game buttons
function enableGameButtons() {
    const buttons = document.querySelectorAll('.choice-btn');
    buttons.forEach(button => {
        button.disabled = false;
    });
}

// Handle reset errors
function handleResetError() {
    // Show error message to user
    const resultElement = document.getElementById('result');
    if (resultElement) {
        resultElement.innerHTML = '⚠️ Error resetting game. Please refresh the page.';
    }
    
    // Add refresh button
    const refreshButton = document.createElement('button');
    refreshButton.className = 'reset-btn mt-3';
    refreshButton.textContent = '🔄 Refresh Page';
    refreshButton.onclick = () => location.reload();
    
    if (resultElement) {
        resultElement.appendChild(refreshButton);
    }
}


// Game variables
let playerScore = 0;
let computerScore = 0;
let tries = 5;
let gameOver = false;

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get button elements
    const mainResetBtn = document.getElementById('mainResetBtn');
    const modalResetBtn = document.getElementById('modalResetBtn');
    const gameButtons = document.querySelectorAll('.game-button');

    // Add click listeners to reset buttons
    [mainResetBtn, modalResetBtn].forEach(btn => {
        if (btn) {
            btn.addEventListener('click', handleReset);
        }
    });

    // Add click listeners to game buttons
    gameButtons.forEach(btn => {
        btn.addEventListener('click', () => playRound(btn.textContent.toLowerCase()));
    });

    // Initial display update
    updateGameDisplay();
});

// Play a round of the game
function playRound(playerChoice) {
    if (gameOver) return;

    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    
    const result = determineWinner(playerChoice, computerChoice);
    updateScores(result);
    tries--;

    updateGameDisplay();
    updateButtonStates(playerChoice, computerChoice, result);

    if (tries === 0 || playerScore === 3 || computerScore === 3) {
        endGame();
    }
}

// Determine the winner of a round
function determineWinner(player, computer) {
    if (player === computer) return 'tie';
    if ((player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')) {
        return 'player';
    }
    return 'computer';
}

// Update scores based on round result
function updateScores(result) {
    if (result === 'player') playerScore++;
    if (result === 'computer') computerScore++;
}

// Update game display
function updateGameDisplay() {
    const elements = {
        playerScore: document.getElementById('playerScore'),
        computerScore: document.getElementById('computerScore'),
        tries: document.getElementById('tries'),
        result: document.getElementById('result')
    };

    if (elements.playerScore) elements.playerScore.textContent = playerScore;
    if (elements.computerScore) elements.computerScore.textContent = computerScore;
    if (elements.tries) elements.tries.textContent = tries;
    if (elements.result) {
        elements.result.innerHTML = gameOver ? getEndGameMessage() : 'Choose your cosmic weapon, Space Warrior! 🛸';
    }
}

// Update button states after a round
function updateButtonStates(playerChoice, computerChoice, result) {
    document.querySelectorAll('.game-button').forEach(btn => {
        btn.classList.remove('selected', 'winner', 'loser');
        if (btn.textContent.toLowerCase() === playerChoice) {
            btn.classList.add('selected');
            btn.classList.add(result === 'player' ? 'winner' : 'loser');
        }
        if (btn.textContent.toLowerCase() === computerChoice) {
            btn.classList.add(result === 'computer' ? 'winner' : 'loser');
        }
    });
}

// End the game
function endGame() {
    gameOver = true;
    document.querySelectorAll('.game-button').forEach(btn => btn.disabled = true);
    showGameOverModal();
}

// Get end game message
function getEndGameMessage() {
    let message = "Your cosmic mission has taken off! 🚀<br>";
    if (playerScore > computerScore) {
        message += "You've conquered the galaxy!";
    } else if (playerScore < computerScore) {
        message += "The aliens have prevailed this time.";
    } else {
        message += "It's a cosmic draw!";
    }
    return message;
}

// Show game over modal
function showGameOverModal() {
    const modalElement = document.getElementById('gameOverModal');
    if (modalElement && typeof bootstrap !== 'undefined') {
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
    }
}

// Handle reset button click
function handleReset(event) {
    event.preventDefault();
    resetGame();
}

// Main reset function
function resetGame() {
    try {
        playerScore = 0;
        computerScore = 0;
        tries = 5;
        gameOver = false;

        updateGameDisplay();
        handleModalClose();
        enableGameButtons();

    } catch (error) {
        console.error('Error during game reset:', error);
        handleResetError();
    }
}

// Handle modal closing
function handleModalClose() {
    const modalElement = document.getElementById('gameOverModal');
    if (modalElement && typeof bootstrap !== 'undefined') {
        const modal = bootstrap.Modal.getInstance(modalElement);
        if (modal) {
            modal.hide();
        }
    }
}

// Enable game buttons
function enableGameButtons() {
    document.querySelectorAll('.game-button').forEach(button => {
        button.disabled = false;
        button.classList.remove('selected', 'winner', 'loser');
    });
}

// Handle reset errors
function handleResetError() {
    const resultElement = document.getElementById('result');
    if (resultElement) {
        resultElement.innerHTML = '⚠️ Error resetting game. Please refresh the page.';
    }
    
    const refreshButton = document.createElement('button');
    refreshButton.className = 'reset-btn mt-3';
    refreshButton.textContent = '🔄 Refresh Page';
    refreshButton.onclick = () => location.reload();
    
    if (resultElement) {
        resultElement.appendChild(refreshButton);
    }
}