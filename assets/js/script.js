// Globals
let wins = 0;
let losses = 0;
let ties = 0;
let triesLeft = 5;

// Choices and Rules
const choices = ["ROCK", "PAPER", "SCISSORS", "LIZARD", "SPOCK"];
const rules = {
  ROCK: ["SCISSORS", "LIZARD"],
  PAPER: ["ROCK", "SPOCK"],
  SCISSORS: ["PAPER", "LIZARD"],
  LIZARD: ["PAPER", "SPOCK"],
  SPOCK: ["ROCK", "SCISSORS"],
};

// Generate Shooting Stars
function generateStars() {
  const container = document.querySelector(".star");
  for (let i = 0; i < 150; i++) {
    const star = document.createElement("div");
    star.className = "shooting-star";
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
    star.style.animationDuration = `${Math.random() * 10 + 5}s`;
    container.appendChild(star);
  }
}

// Determine Winner
function determineWinner(user, computer) {
  if (user === computer) return "TIE";
  return rules[user].includes(computer) ? "WIN" : "LOSE";
}

// Display Result
function displayResult(userChoice, computerChoice, result) {
  const resultMessage = {
    WIN: `Victory! ${userChoice} beats ${computerChoice}!`,
    LOSE: `A Dark Alien Force Has Prevailed! ${computerChoice} beats ${userChoice}!`,
    TIE: `You achieved Cosmic Balance! Both chose ${userChoice}.`,
  };

  const colors = {
    WIN: "rgba(40, 167, 69, 0.2)",
    LOSE: "rgba(220, 53, 69, 0.2)",
    TIE: "rgba(255, 193, 7, 0.2)",
  };

  const resultHTML = `
    <div class="choices-container d-flex justify-content-center gap-5 mb-3">
      <div>
        <h3>You chose:</h3>
        <img src="assets/images/${userChoice.toLowerCase()}.webp" alt="${userChoice}" style="width: 100px;">
      </div>
      <div>
        <h3>Computer chose:</h3>
        <img src="assets/images/${computerChoice.toLowerCase()}.webp" alt="${computerChoice}" style="width: 100px;">
      </div>
    </div>
    <div style="background-color: ${
      colors[result]
    }; padding: 10px; border-radius: 10px;">
      <h2>${resultMessage[result]}</h2>
    </div>
  `;
  document.getElementById("game-result").innerHTML = resultHTML;
}

// Update Scoreboard
function updateScoreboard() {
  document.getElementById("wins").textContent = wins;
  document.getElementById("losses").textContent = losses;
  document.getElementById("ties").textContent = ties;
  document.getElementById("tries-left").textContent = triesLeft;
}

// Reset Game
function resetGame() {
  wins = 0;
  losses = 0;
  ties = 0;
  triesLeft = 5;
  updateScoreboard();
  document.getElementById("game-result").innerHTML = "";
}

// Handle Card Click
function handleCardClick(event) {
  if (triesLeft === 0) return;

  const userChoice =
    event.currentTarget.querySelector(".card-title").textContent;
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  const result = determineWinner(userChoice, computerChoice);

  if (result === "WIN") wins++;
  if (result === "LOSE") losses++;
  if (result === "TIE") ties++;

  triesLeft--;
  displayResult(userChoice, computerChoice, result);
  updateScoreboard();

  if (triesLeft === 0) alert("Game Over!");
}

// Show End Game Modal
function showEndGameModal() {
  const endGameMessage = `
    Galactic Opportunities Exhausted! Here's your final score:
    Wins: ${wins}, Losses: ${losses}, Ties: ${ties}.
  `;
  document.getElementById("end-game-message").textContent = endGameMessage;

  const endGameModal = new bootstrap.Modal(
    document.getElementById("endGameModal")
  );
  endGameModal.show();
}

function handleCardClick(event) {
  if (triesLeft === 0) return;

  const userChoice =
    event.currentTarget.querySelector(".card-title").textContent;
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  const result = determineWinner(userChoice, computerChoice);

  if (result === "WIN") wins++;
  if (result === "LOSE") losses++;
  if (result === "TIE") ties++;

  triesLeft--;
  displayResult(userChoice, computerChoice, result);
  updateScoreboard();

  if (triesLeft === 0) showEndGameModal(); // Trigger modal when triesLeft is 0
}

// Play Again Button in Modal
document
  .getElementById("play-again-modal-btn")
  .addEventListener("click", resetGame);

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  generateStars();
  document.querySelectorAll(".game-card-hover").forEach((card) => {
    card.addEventListener("click", handleCardClick);
  });
  document
    .getElementById("play-again-btn")
    .addEventListener("click", resetGame);
});
