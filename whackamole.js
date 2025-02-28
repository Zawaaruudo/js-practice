const moles = document.querySelectorAll('.mole');
const startButton = document.getElementById('start-game');
const scoreDisplay = document.getElementById('score');
let score = 0;
let gameInterval;
const startGame = () => {
  score = 0;

  scoreDisplay.innerText = score;

  clearInterval(gameInterval);

  gameInterval = setInterval(() => {

    let randomIndex = Math.floor(Math.random() * moles.length);

    let mole = moles[randomIndex];

    mole.style.display = "block";

    setTimeout(() => {

      mole.style.display = "none";
    }, 700);
  }, 1000);

  setTimeout(() => {
    clearInterval(gameInterval);
    alert(`Game Over! Your score: ${score}`);
  }, 30000);
}
startButton.addEventListener("click", startGame);
moles.forEach(mole => {
  mole.addEventListener("click", () => {
    score++;
    scoreDisplay.innerText = score;
    mole.style.display = "none"; // Hide the mole after it's clicked
  });
});