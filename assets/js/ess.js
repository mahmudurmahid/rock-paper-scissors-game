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




// Game choices
const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

// Winning combinations
const winningCombos = {
    rock: ['scissors', 'lizard'],
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    lizard: ['paper', 'spock'],
    spock: ['rock', 'scissors']
};

// Get DOM elements
const buttons = document.querySelectorAll('.game-button');
const resultDisplay = document.createElement('div');
resultDisplay.id = 'result';
document.querySelector('main').appendChild(resultDisplay);

// Add click event listeners to buttons
buttons.forEach(button => {
    button.addEventListener('click', () => playRound(button.textContent.toLowerCase()));
});

function playRound(userChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const result = determineWinner(userChoice, computerChoice);
    displayResult(userChoice, computerChoice, result);
    animateChoices(userChoice, computerChoice);
}

function determineWinner(user, computer) {
    if (user === computer) return 'tie';
    return winningCombos[user].includes(computer) ? 'win' : 'lose';
}

function displayResult(user, computer, result) {
    let message;
    switch (result) {
        case 'win':
            message = "The Universe Is Saved! 🌟";
            break;
        case 'lose':
            message = "The Alien Has Conquered The Universe! 👾";
            break;
        case 'tie':
            message = "You Have Attained Cosmic Balance! ☯️";
            break;
    }
    resultDisplay.innerHTML = `
        <p>You chose ${user.toUpperCase()} 🌎</p>
        <p>The Alien chose ${computer.toUpperCase()} 👽</p>
        <h2>${message}</h2>
    `;
}

function animateChoices(user, computer) {
    buttons.forEach(button => {
        button.classList.remove('selected', 'winner', 'loser');
        if (button.textContent.toLowerCase() === user) {
            button.classList.add('selected');
        }
    });

    setTimeout(() => {
        buttons.forEach(button => {
            if (button.textContent.toLowerCase() === user) {
                button.classList.add(determineWinner(user, computer) === 'win' ? 'winner' : 'loser');
            }
            if (button.textContent.toLowerCase() === computer) {
                button.classList.add(determineWinner(computer, user) === 'win' ? 'winner' : 'loser');
            }
        });
    }, 500);
}

// Reset functionality
const resetButtons = document.querySelectorAll('.reset-btn');
resetButtons.forEach(button => {
    button.addEventListener('click', resetGame);
});

function resetGame() {
    buttons.forEach(button => {
        button.classList.remove('selected', 'winner', 'loser');
    });
    resultDisplay.innerHTML = '';
}



// Complete victory conditions with explanations
const victoryConditions = {
    rock: {
        scissors: "Rock crushes Scissors 🌑",
        lizard: "Rock crushes Lizard 🌋"
    },
    paper: {
        rock: "Paper covers Rock 📜",
        spock: "Paper disproves Spock 📄"
    },
    scissors: {
        paper: "Scissors cuts Paper ✂️",
        lizard: "Scissors decapitates Lizard 🦎"
    },
    lizard: {
        paper: "Lizard eats Paper 🦎",
        spock: "Lizard poisons Spock 🧪"
    },
    spock: {
        rock: "Spock vaporizes Rock ⚡",
        scissors: "Spock smashes Scissors 🖖"
    }
};

// Enhanced determine winner function with detailed outcome
function determineWinner(playerChoice, computerChoice) {
    // Convert choices to lowercase for consistency
    playerChoice = playerChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    
    // Check for tie
    if (playerChoice === computerChoice) {
        return {
            result: 'tie',
            message: "Cosmic forces are balanced! ☯️"
        };
    }
    
    // Check if player wins
    if (victoryConditions[playerChoice]?.[computerChoice]) {
        return {
            result: 'player',
            message: `Victory! ${victoryConditions[playerChoice][computerChoice]}`
        };
    }
    
    // Computer wins
    return {
        result: 'computer',
        message: `Defeat! ${victoryConditions[computerChoice][playerChoice]}`
    };
}

// Enhanced play round function with animations
function playRound(playerChoice) {
    if (gameState.gameOver) return;

    const computerChoice = gameState.choices[Math.floor(Math.random() * gameState.choices.length)];
    const outcome = determineWinner(playerChoice, computerChoice);
    
    // Update scores
    updateScores(outcome.result);
    gameState.tries--;
    
    // Update display with animations
    animateChoices(playerChoice, computerChoice, outcome);
    displayResult(outcome.message);
    
    // Check for game end
    if (gameState.tries === 0 || gameState.playerScore === 3 || gameState.computerScore === 3) {
        endGame();
    }
}

// Animate the choices
function animateChoices(playerChoice, computerChoice, outcome) {
    // Remove previous animations
    document.querySelectorAll('.game-button').forEach(btn => {
        btn.classList.remove('selected', 'winner', 'loser');
    });
    
    // Add new animations with delay for visual effect
    setTimeout(() => {
        document.querySelectorAll('.game-button').forEach(btn => {
            const choice = btn.textContent.toLowerCase();
            
            if (choice === playerChoice) {
                btn.classList.add('selected');
                btn.classList.add(outcome.result === 'player' ? 'winner' : 'loser');
            }
            
            if (choice === computerChoice) {
                btn.classList.add(outcome.result === 'computer' ? 'winner' : 'loser');
            }
        });
    }, 200);
}

// Display the result with space theme
function displayResult(message) {
    const resultElement = document.getElementById('result');
    if (!resultElement) return;

    // Clear previous content
    resultElement.innerHTML = '';
    
    // Create and animate new content
    const resultText = document.createElement('div');
    resultText.className = 'result-text';
    resultText.innerHTML = `
        <div class="cosmic-message">
            ${message}
        </div>
    `;
    
    resultElement.appendChild(resultText);
}