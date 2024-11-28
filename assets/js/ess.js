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