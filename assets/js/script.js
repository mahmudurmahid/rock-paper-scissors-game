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
function handleImageClick() {
  alert("Image button clicked!");
  // Add your desired action here, such as navigation
}
