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

let mole1 = new Image('120','100');
mole1.src = 'https://i.ibb.co/SxgyCw3/raimbowmole.png'
let mole2 = new Image('120','100');
mole2.src = 'https://i.ibb.co/NTvFtMH/yellowglimole.png'
let mole3 = new Image('120','100');
mole3.src = 'https://i.ibb.co/6X0BJH0/glossbowmole.png'
let mole4 = new Image('120','100');
mole4.src = 'https://i.ibb.co/jRzzhdz/pinkmole.png'
let mole5 = new Image('120','100');
mole5.src = 'https://i.ibb.co/XkVSL8T/rainbowglitz.png'
let mole6 = new Image('120','100');
mole6.src = 'https://i.ibb.co/mJjcrPC/yellowglow.png'
let mole7 = new Image('120','100');
mole7.src = 'https://i.ibb.co/5c6PQZL/purpglitz.png'
let mole8 = new Image('120','100');
mole8.src = 'https://i.ibb.co/hR2Hrvw/glowymole.png'
let mole9 = new Image('120','100');
mole9.src = 'https://i.ibb.co/dL7WVxF/pinkpurpmole.png'
let mole10 = new Image('120','100');
mole10.src = 'https://i.ibb.co/cr6WCmv/foammole.png'
let mole11 = new Image('120','100');
mole11.src = 'https://i.ibb.co/Jj1zZt5/leopardmole.png'
let mole12 = new Image('120','100');
mole12.src = 'https://i.ibb.co/9qbwTgW/moleblue.png'
let mole13 = new Image('120','100');
mole13.src = 'https://i.ibb.co/vVtqq7w/purpglittermole.png'
let mole14 = new Image('120','100');
mole14.src = 'https://i.ibb.co/B4MyphJ/molefinglossrainbow.png'


let imgArr = [];
imgArr.push(mole1)
imgArr.push(mole2)
imgArr.push(mole3)
imgArr.push(mole4)
imgArr.push(mole5)
imgArr.push(mole6)
imgArr.push(mole7)
imgArr.push(mole8)
imgArr.push(mole9)
imgArr.push(mole10)
imgArr.push(mole11)
imgArr.push(mole12)
imgArr.push(mole13)
imgArr.push(mole14)

console.log(imgArr)



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
    button.addEventListener("click", resetGame);
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

