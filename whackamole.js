const moles = document.querySelectorAll('.mole');
const startButton = document.getElementById('start-game');
const scoreDisplay = document.getElementById('score');
let score = 0;
let gameInterval;

const showMole = (mole) => {
  mole.style.bottom = "0px"; // Move mole up
  mole.style.display = "block";

  setTimeout(() => {
    mole.style.bottom = "-10px"; // Move mole down
    mole.style.display = "none";
  }, 700);
}


const startGame = () => {
  score = 0;

  scoreDisplay.innerText = score;

  clearInterval(gameInterval);

  gameInterval = setInterval(() => {

    let randomIndex = Math.floor(Math.random() * moles.length);

    let mole = moles[randomIndex];

    mole.style.bottom = "0px";

    mole.style.display = showMole(mole);

    setTimeout(() => {

      mole.style.bottom = "-70px";
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
    mole.style.bottom = "-70px";
  });
});