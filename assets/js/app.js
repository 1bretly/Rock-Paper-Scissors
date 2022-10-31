// let for the possible choices of rock, paper, or scissors
let choices = ["Rock", "Paper", "Scissors"]

// empty let for user that we will log a value for
let userChoice

// const/let for keeping track of score
let wins = 0
let losses = 0
let ties = 0

// let for the play button with aEL to call startGame function
let playBtn = document.getElementById("play-btn")
playBtn.addEventListener("click", startGame)

// startGame function to hide the play button and create new buttons for each choice: Rock, Paper, or Scissors
// also assign the buttons a class and individual id's
function startGame() {
  playBtn.style.display = "none"

  for (let i = 0; i < choices.length; i++) {
    let rpsButtons = document.createElement("button")
    rpsButtons.innerHTML = choices[i]
    rpsButtons.className = "rpsButtons"
    rpsButtons.id = choices[i]
    document.body.appendChild(rpsButtons)
    rpsButtons.addEventListener("click", function (e) {
      if (rpsButtons.id === "Rock") {
        userChoice = "Rock"
        cpuInput()
      }
      if (rpsButtons.id === "Paper") {
        userChoice = "Paper"
        cpuInput()
      }
      if (rpsButtons.id === "Scissors") {
        userChoice = "Scissors"
        cpuInput()
      }
      console.log(userChoice)
    })
  }
}

function cpuInput() {
  let cpuChoice = choices[Math.floor(Math.random() * choices.length)]
  console.log(cpuChoice)
  if (cpuChoice === userChoice) {
    ties++
    displayScore()
  }
  if (cpuChoice === "Rock" && userChoice === "Paper") {
    wins++
    displayScore()
  }
  if (cpuChoice === "Rock" && userChoice === "Scissors") {
    losses++
    displayScore()
  }
  if (cpuChoice === "Paper" && userChoice === "Rock") {
    losses++
    displayScore()
  }
  if (cpuChoice === "Paper" && userChoice === "Scissors") {
    wins++
    displayScore()
  }
  if (cpuChoice === "Scissors" && userChoice === "Rock") {
    wins++
    displayScore()
  }
  if (cpuChoice === "Scissors" && userChoice === "Paper") {
    losses++
    displayScore()
  }
}

function displayScore() {
  let score = document.createElement("div")
  score.id = "score"
  score.innerHTML = wins + " -" + losses + " -" + ties
}
