// Generate shooting stars dynamically
function generateStars() {
  const STAR_COUNT = 150;
  const container = document.querySelector(".star");

  for (let i = 0; i < STAR_COUNT; i++) {
    const star = document.createElement("div");
    star.classList.add("shooting-star");

    // Random positions
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;

    // Random animation duration and delay
    star.style.animationDuration = `${Math.random() * 10 + 5}s`; // 5 to 15 seconds
    star.style.animationDelay = `${Math.random() * 5}s`; // Up to 5 seconds delay

    container.appendChild(star);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  generateStars();
});

// Game Card Components
document.addEventListener("DOMContentLoaded", () => {
  // Select all game cards and add click event listeners
  const gameCards = document.querySelectorAll(".game-card-hover");
  gameCards.forEach((card) => {
    card.addEventListener("click", handleImageClick);
  });
});

function handleImageClick(event) {
  event.preventDefault(); // Prevent default behavior, if any
  const userChoice =
    event.currentTarget.querySelector(".card-title").textContent;
  console.log("User choice:", userChoice);
  // BUG FIX: previous onclick did not work on deployed site
}

//Score variables
let wins = 0;
let losses = 0;
let ties = 0;

// Game choices
const choices = ["ROCK", "PAPER", "SCISSORS", "LIZARD", "SPOCK"];

// Game rules defining what beats what
const rules = {
  ROCK: ["SCISSORS", "LIZARD"],
  PAPER: ["ROCK", "SPOCK"],
  SCISSORS: ["PAPER", "LIZARD"],
  LIZARD: ["PAPER", "SPOCK"],
  SPOCK: ["ROCK", "SCISSORS"],
};

// Get computer choice
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Determine winner
function determineWinner(userChoice, computerChoice) {
  console.log("Rules:", rules);
  console.log("User Choice:", userChoice);
  console.log("Computer Choice:", computerChoice);

  if (userChoice === computerChoice) {
    return "TIE";
  }
  return rules[userChoice].includes(computerChoice) ? "WIN" : "LOSE";
}

// Get result message
function getResultMessage(result, userChoice, computerChoice) {
  const messages = {
    WIN: `You Have Saved The Universe! ${userChoice} beats ${computerChoice}!`,
    LOSE: `A Dark Alien Force Has Prevailed! ${computerChoice} beats ${userChoice}!`,
    TIE: `You Have achieved Cosmic Balance! Both chose ${userChoice}!`,
  };
  return messages[result];
}
// Handle game card click
function handleImageClick(event) {
  event.preventDefault();
  const userChoice =
    event.currentTarget.querySelector(".card-title").textContent;
  const computerChoice = getComputerChoice();

  // Get result and message
  const result = determineWinner(userChoice, computerChoice);
  const message = getResultMessage(result, userChoice, computerChoice);

  // Show choices and result with animation
  displayResult(userChoice, computerChoice, message, result);

  //Update the scoreboard after each round
  updateScoreboard();
}

// Display result with animation
function displayResult(userChoice, computerChoice, message, result) {
  // Create or get result container
  let resultContainer = document.getElementById("game-result");
  if (!resultContainer) {
    resultContainer = document.createElement("div");
    resultContainer.id = "game-result";
    resultContainer.className = "text-center mt-4";
    document.querySelector(".game-cards").after(resultContainer);
  }

  // Update result content with animation
  resultContainer.innerHTML = `
        <div class="choices-container d-flex justify-content-center gap-5 mb-3">
            <div class="player-choice">
                <h3>You chose:</h3>
                <img src="assets/images/${userChoice.toLowerCase()}.webp" 
                     alt="${userChoice}" 
                     class="choice-image animate__animated animate__bounceIn"
                     style="width: 100px;">
            </div>
            <div class="computer-choice">
                <h3>Computer chose:</h3>
                <img src="assets/images/${computerChoice.toLowerCase()}.webp" 
                     alt="${computerChoice}" 
                     class="choice-image animate__animated animate__bounceIn"
                     style="width: 100px;">
            </div>
        </div>
        <div class="result-message ${result.toLowerCase()} animate__animated animate__fadeIn">
            <h2>${message}</h2>
        </div>
    `;
}

// Add click event listeners to all game cards
document.addEventListener("DOMContentLoaded", () => {
  const gameCards = document.querySelectorAll(".game-card-hover");
  gameCards.forEach((card) => {
    card.addEventListener("click", handleImageClick);
  });
});

// Function to update the scoreboard
function updateScoreboard() {
  document.getElementById("wins").textContent = wins;
  document.getElementById("losses").textContent = losses;
  document.getElementById("ties").textContent = ties;
}

// Function to reset the game and scores
function resetGame() {
  wins = 0;
  losses = 0;
  ties = 0;
  updateScoreboard();
}

// Add required styles
const styles = `
    .choice-image {
        transition: transform 0.3s ease;
    }
    .result-message {
        padding: 1rem;
        border-radius: 8px;
        margin-top: 1rem;
    }
    .result-message.win {
        background: rgba(40, 167, 69, 0.2);
    }
    .result-message.lose {
        background: rgba(220, 53, 69, 0.2);
    }
    .result-message.tie {
        background: rgba(255, 193, 7, 0.2);
    }
    .animate__animated {
        animation-duration: 0.75s;
    }
    .animate__bounceIn {
        animation-name: bounceIn;
    }
    .animate__fadeIn {
        animation-name: fadeIn;
    }
    @keyframes bounceIn {
        0% { transform: scale(0); }
        50% { transform: scale(1.2); }
        100% { transform: scale(1); }
    }
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;

// Add styles to document
const styleSheet = document.createElement("style");
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

// Add these variables at the beginning of your script
let triesLeft = 5;
const maxTries = 5;

// Modify the handleImageClick function
function handleImageClick(event) {
  event.preventDefault();

  // Check if there are tries left
  if (triesLeft <= 0) {
    displayEndGameMessage();
    return;
  }

  const userChoice =
    event.currentTarget.querySelector(".card-title").textContent;
  const computerChoice = getComputerChoice();

  // Get result and message
  const result = determineWinner(userChoice, computerChoice);
  const message = getResultMessage(result, userChoice, computerChoice);

  // Show choices and result with animation
  displayResult(userChoice, computerChoice, message, result);

  // Decrease tries and update counter
  triesLeft--;
  updateTriesCounter();

  // Check if it's the last try
  if (triesLeft === 0) {
    setTimeout(displayEndGameMessage, 2000); // Display end game message after 2 seconds
  }
}

// Add these new functions
function updateTriesCounter() {
  const triesLeftElement = document.getElementById("tries-left");
  triesLeftElement.textContent = triesLeft;
}

function displayEndGameMessage() {
  let resultContainer = document.getElementById("game-result");
  if (!resultContainer) {
    resultContainer = document.createElement("div");
    resultContainer.id = "game-result";
    resultContainer.className = "text-center mt-4";
    document.querySelector(".game-cards").after(resultContainer);
  }

  resultContainer.innerHTML = `
        <div class="end-game-message animate__animated animate__fadeIn">
            <h2>Celestial Dance Is Finalized!</h2>
            <h4> Thank you For Illuminating The Void!</h4>
        
         </div>
    `;

  // Add event listener to restart button
  document
    .getElementById("restart-game")
    .addEventListener("click", restartGame);
}

function restartGame() {
  triesLeft = maxTries;
  updateTriesCounter();
  const resultContainer = document.getElementById("game-result");
  if (resultContainer) {
    resultContainer.innerHTML = "";
  }
}

// Modify the DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", () => {
  const gameCards = document.querySelectorAll(".game-card-hover");
  gameCards.forEach((card) => {
    card.addEventListener("click", handleImageClick);
  });

  updateTriesCounter(); // Initialize the tries counter
});

// Play Again Button
document.addEventListener("DOMContentLoaded", () => {
  const playAgainButton = document.getElementById("play-again-btn");
  if (playAgainButton) {
    playAgainButton.addEventListener("click", () => {
      restartGame(); // Restart the game using the existing function
      const resultContainer = document.getElementById("game-result");
      if (resultContainer) {
        resultContainer.innerHTML = ""; // Clear the result section
      }
      triesLeft = maxTries;
      updateTriesCounter();
      updateScoreboard();
    });
  } else {
    console.error("Play Again button not found in the DOM!");
  }
});
