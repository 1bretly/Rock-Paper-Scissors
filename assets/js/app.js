// let for the possible choices of rock, paper, or scissors
let choices = ["Rock", "Paper", "Scissors"]

// empty let for user that we will log a value for
let userChoice

// const/let for keeping track of score
let wins = 0
let losses = 0
let ties = 0

// div for score
let score = document.getElementById("score")

// let for the play button with aEL to call startGame function
let playBtn = document.getElementById("play-btn")
playBtn.addEventListener("click", startGame)

// startGame function to hide the play button and create new buttons for each choice: Rock, Paper, or Scissors
// also assign the buttons a class and individual id's
function startGame() {
  playBtn.style.display = "none"
  score.style.display = "block"

  for (let i = 0; i < choices.length; i++) {
    let rpsButtons = document.createElement("button")
    rpsButtons.innerHTML = choices[i]
    rpsButtons.className = "rpsButtons"
    rpsButtons.id = choices[i]
    document.body.appendChild(rpsButtons)
    rpsButtons.addEventListener("click", function (e) {
      if (rpsButtons.id === "Rock") {
        userChoice = "Rock"
      }
      if (rpsButtons.id === "Paper") {
        userChoice = "Paper"
      }
      if (rpsButtons.id === "Scissors") {
        userChoice = "Scissors"
      }
      cpuInput()
    })
  }
}

function cpuInput() {
  let cpuChoice = choices[Math.floor(Math.random() * choices.length)]
  console.log(cpuChoice)
  if (cpuChoice === userChoice) {
    ties++
  }
  if (cpuChoice === "Rock" && userChoice === "Paper") {
    wins++
  }
  if (cpuChoice === "Rock" && userChoice === "Scissors") {
    losses++
  }
  if (cpuChoice === "Paper" && userChoice === "Rock") {
    losses++
  }
  if (cpuChoice === "Paper" && userChoice === "Scissors") {
    wins++
  }
  if (cpuChoice === "Scissors" && userChoice === "Rock") {
    wins++
  }
  if (cpuChoice === "Scissors" && userChoice === "Paper") {
    losses++
  }
  displayScore()
}

function displayScore() {
  score.innerText = wins + " -" + losses + " -" + ties
  document.body.appendChild(score)
}
