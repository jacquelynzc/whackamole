const cells = document.querySelectorAll(".cell");
let score = 0;
let timeLeft = 20;
let gameEnd = document.querySelector(".time-up")
let button = document.querySelector(".replay")
let points = document.querySelector(".score")
let clock = document.querySelector(".time-left")
let moleC = document.querySelector('.mole')
let start = document.querySelector('.start')


// gives a random number between 0 and the length of the grid cells multiplied by 0.8 to make it more random
const getRandomCell = () => {
  const index = Math.floor(Math.random() * cells.length * 0.8);
  return cells[index];
};

// defining the mole picture elements 
let mole1 = new Image('120','100');
mole1.src = '/moles/mole14.png'
let mole2 = new Image('120','100');
mole2.src = '/moles/mole13.png'
let mole3 = new Image('120','100');
mole3.src = '/moles/mole12.png'
let mole4 = new Image('120','100');
mole4.src = '/moles/mole11.png'
let mole5 = new Image('120','100');
mole5.src = '/moles/mole10.png'
let mole6 = new Image('120','100');
mole6.src = '/moles/mole9.png'
let mole7 = new Image('120','100');
mole7.src = '/moles/mole8.png'
let mole8 = new Image('120','100');
mole8.src = '/moles/mole7.png'
let mole9 = new Image('120','100');
mole9.src = '/moles/mole6.png'
let mole10 = new Image('120','100');
mole10.src = '/moles/mole5.png'
let mole11 = new Image('120','100');
mole11.src = '/moles/mole4.png'
let mole12 = new Image('120','100');
mole12.src = '/moles/mole3.png'
let mole13 = new Image('120','100');
mole13.src = '/moles/mole2.png'
let mole14 = new Image('120','100');
mole14.src = '/moles/mole1.png'
let mole15 = new Image('120','100')
mole15.src = '/moles/conzer.png'
let mole16 = new Image('120','100');
mole16.src = '/moles/mole15.png'
let mole17 = new Image('120','100');
mole17.src = '/moles/mole16.png'
let mole18 = new Image('120','100');
mole18.src = '/moles/mole17.png'
let mole19 = new Image('120','100');
mole19.src = '/moles/mole18.png'
let mole20 = new Image('120','100');
mole20.src = '/moles/mole19.png'
let mole21 = new Image('120','100');
mole21.src = '/moles/mole20.png'
let mole22 = new Image('120','100');
mole22.src = '/moles/mole21.png'
let mole23 = new Image('120','100');
mole23.src = '/moles/mole22.png'
let mole24 = new Image('120','100');
mole24.src = '/moles/mole23.png'
let mole25 = new Image('120','100');
mole25.src = '/moles/mole24.png'
let mole26 = new Image('120','100');
mole26.src = '/moles/mole25.png'
let mole27 = new Image('120','100');
mole27.src = '/moles/mole26.png'
let mole28 = new Image('120','100');
mole28.src = '/moles/mole27.png'
let mole29 = new Image('120','100');
mole29.src = '/moles/mole28.png'
let mole30 = new Image('120','100');
mole30.src = '/moles/mole29.png'
let mole32 = new Image('120','100');
mole32.src = '/moles/mole30.png'
let mole33 = new Image('120','100');
mole33.src = '/moles/mole32.png'
let mole34 = new Image('120','100');
mole34.src = '/moles/mole34.png'
let mole36 = new Image('120','100');
mole36.src = '/moles/mole36.png'

// the mole array
let imgArr = [mole1, mole3, mole4, mole5, mole6, mole7, mole8, 
mole9, mole10, mole11, mole13, mole14, mole15, mole16, mole17, mole18, mole19,
mole20, mole21, mole23, mole24, mole25, mole26, mole27,
mole28, mole29, mole30, mole32, mole34, mole36];



// the game function
const showMole = () => {
  const cell = getRandomCell();
  // 'random number generator' to return a random mole in the array
  let rng = Math.floor(Math.random() * imgArr.length)
  button.style.display = 'none'
  gameEnd.style.display = 'none'
  cell.classList.add("mole");
  cell.style.backgroundImage = `url(${imgArr[rng].src})`
  // removes mole and resets the background image of the cell
  setTimeout(() => {
    cell.style.backgroundImage = `url("/moles/moleholefin.png")`
    cell.classList.remove("mole");
    if (timeLeft > 0) {
      showMole();
    }
    //sets the time the mole appears to ~1 second
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
  button.addEventListener("click", resetGame);
  if (timeLeft === 0) {
    gameEnd.style.display = "block";
    button.style.display = 'block'
    button.innerText = `play again?`
    gameEnd.textContent = `that was terrible`;
    if (`${score}` > 0) {
      gameEnd.textContent = `you hit ${score} moles!`;
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
  timeLeft = 20;
  showMole();
  countdown();
  gameEnd.textContent = "";
  button.style.display = 'none';
  points.textContent = score;
  clock.textContent = timeLeft;
};

function init() {
  clock.style.display = 'none'
  button.style.display = 'none'
  points.style.display = 'none'
}

start.textContent = `start!`

function startGame() {
  clock.style.display = 'flex'
  start.style.display = 'none'
  showMole();
  countdown()
}

start.addEventListener('click', startGame)

init()