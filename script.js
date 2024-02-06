const buttons = document.querySelectorAll(".btn");
var score = document.getElementById("score");
const options = ["rock", "paper", "scissors", "lizard", "spock"];
const playButtons = document.querySelector(".play-buttons");
const result = document.querySelector(".result");
const resultText = document.querySelector(".result-text");

const rulesModal = document.querySelector(".rules-modal");
const rulesBtn = document.querySelector(".rules");
const closeBtn = document.querySelector(".close-btn");

var playerScore;
if (localStorage.getItem("score")) {
  playerScore = localStorage.getItem("score");
  score.innerText = playerScore;
} else {
  playerScore = 0;
  localStorage.setItem("score", playerScore);
}

const setScore = (win) => {
    document.querySelector(".final").style.display = "flex";
  if (win === true) {
    playerScore++;
    resultText.innerText = "YOU WIN!";
    document.querySelector(".bg-shadow-player").classList.add("pulse");
  } else if (win === "draw") {
    resultText.innerText = "DRAW!";
  } else {
    if (playerScore > 0) {
      playerScore--;
      resultText.innerText = "YOU Lost!";
    } else {
      playerScore = 0;
    }
    document.querySelector(".bg-shadow-system").classList.add("pulse");
  }
  localStorage.setItem("score", playerScore);
  score.innerText = playerScore;
};

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

buttons.forEach((button) => {
  button.addEventListener("click", async () => {
    let playerButton = button.getAttribute("name");
    let index = Math.floor(Math.random() * 5);
    let systemButton = options[index];
    console.log(playerButton, systemButton);
    switchDisplay(result, playButtons);

    let p1 = button.cloneNode(true);
    document.querySelector("#player-btn").appendChild(p1);

    await delay(2000);
    viewResult(systemButton);
    checkResult(playerButton, systemButton);
  });
});
const switchDisplay = (page1, page2) => {
  if (page2.style.display !== "none") {
    page2.style.display = "none";
    if (window.innerWidth <= 400) {
      page1.style.display = "grid";
    } else {
      page1.style.display = "flex";
    }
    document
      .querySelector(".play-again")
      .addEventListener("click", playAgainFunc);
  } else {
    page1.style.display = "none";
    page2.style.display = "block";
  }
};

const viewResult = (systemBtn) => {
  let p2 = document.querySelector(`.${systemBtn}`).cloneNode(true);
  document.querySelector("#system-btn").appendChild(p2);
};

const checkResult = (p, s) => {
  if (p === "scissors" && s === "rock") {
    setScore(false);
  } else if (p === "scissors" && s === "paper") {
    setScore(true);
  } else if (p === "paper" && s === "scissors") {
    setScore(false);
  } else if (p === "rock" && s === "scissors") {
    setScore(true);
  } else if (p === "paper" && s === "rock") {
    setScore(true);
  } else if (p === "rock" && s === "paper") {
    setScore(false);
  } else if (p === "lizard" && s === "rock") {
    setScore(false);
  } else if (p === "rock" && s === "lizard") {
    setScore(true);
  } else if (p === "spock" && s === "lizard") {
    setScore(false);
  } else if (p === "lizard" && s === "spock") {
    setScore(true);
  } else if (p === "spock" && s === "scissors") {
    setScore(true);
  } else if (p === "scissors" && s === "spock") {
    setScore(false);
  } else if (p === "spock" && s === "paper") {
    setScore(false);
  } else if (p === "paper" && s === "spock") {
    setScore(true);
  } else if (p === "lizard" && s === "scissors") {
    setScore(false);
  } else if (p === "scissors" && s === "lizard") {
    setScore(true);
  } else if (p === "lizard" && s === "paper") {
    setScore(true);
  } else if (p === "paper" && s === "lizard") {
    setScore(false);
  } else if (p === "spock" && s === "rock") {
    setScore(true);
  } else if (p === "rock" && s === "spock") {
    setScore(false);
  } else if (p === s) {
    setScore("draw");
  }
};

const playAgainFunc = () => {
  location.reload();
};

const toggleView = () => {
  rulesModal.classList.add("show");
};
closeBtn.addEventListener("click", () => rulesModal.classList.remove("show"));
rulesBtn.addEventListener("click", toggleView);
