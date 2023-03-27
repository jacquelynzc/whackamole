const cells = document.querySelectorAll(".cell");
let score = 0;
let timeLeft = 10;
let gameEnd = document.querySelector(".time-up")
let button = document.querySelector(".time-btn")
let points = document.querySelector(".score")
let clock = document.querySelector(".time-left")

const getRandomCell = () => {
  const index = Math.floor(Math.random() * cells.length);
  return cells[index];
};



const showMole = () => {
  const cell = getRandomCell();
  button.style.display = 'none'
  gameEnd.style.display = 'none'
  cell.classList.add("mole");
  
  setTimeout(() => {
    cell.classList.remove("mole");
    if (timeLeft > 0) {
      showMole();
    }
  }, Math.random() * 100 + 1000);
};

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (cell.classList.contains("mole")) {
      cell.classList.remove("mole");
      score++;
      points.textContent = score;
    }
  });
});


const countdown = () => {
  clock.textContent = `game over`
  // button.style.display = 'flex';
  // gameEnd.style.display = 'flex'
  button.addEventListener("click", resetGame);
  if (timeLeft === 0) {
    gameEnd.style.display = "block";
    button.style.display = 'block'
    button.innerText = `play again`
    gameEnd.textContent = `Time's up! Your score is ${score}`;
    if (`${score}` === 0) {
      gameEnd.textContent = `FAIL`
      return;
    }
    else if (`${score}` > 0) {
      gameEnd.textContent = `time's up! you whacked ${score} moles!`;
    return;
    }
    document.querySelector(".play-again").addEventListener("click", resetGame);
    return;
  }
  clock.textContent = timeLeft;
  timeLeft--;
  setTimeout(countdown, 1000);
  
}

const resetGame = () => {
  score = 0;
  timeLeft = 10;
  showMole();
  countdown();
  gameEnd.textContent = "";
  button.style.display = 'none';
  points.textContent = score;
  clock.textContent = timeLeft;
};

showMole();
countdown();

