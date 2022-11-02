// let for the possible choices of rock, paper, or scissors
let choices = ["Rock", "Paper", "Scissors"]

// empty let for user that we will log a value for
let userChoice

// const/let for keeping track of score
let wins = 0
let losses = 0
let ties = 0

// divs for score, results, buttons
let result = document.getElementById("result")
let score = document.getElementById("score")
let buttons = document.getElementById("buttons")

// let for the play button with aEL to call startGame function
let playButton = document.getElementById("play-button")
playButton.addEventListener("click", startGame)

// startGame function to hide the play button and create new buttons for each choice: Rock, Paper, or Scissors
// also assign the buttons a class and individual id's
function startGame() {
  playButton.style.display = "none"

  for (let i = 0; i < choices.length; i++) {
    let rpsButtons = document.createElement("button")
    rpsButtons.innerHTML = choices[i]
    rpsButtons.className = "rpsButtons"
    rpsButtons.id = choices[i]
    buttons.appendChild(rpsButtons)
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

// function to generate a choice for the cpu
function cpuInput() {
  let cpuChoice = choices[Math.floor(Math.random() * choices.length)]

  if (cpuChoice === userChoice) {
    result.innerHTML =
      "The computer also went " +
      cpuChoice.toLowerCase() +
      ".<br />" +
      "It's a tie!"
    ties++
  }
  if (cpuChoice === "Rock" && userChoice === "Paper") {
    result.innerHTML = "The computer went rock. <br /> You win!"
    wins++
  }
  if (cpuChoice === "Rock" && userChoice === "Scissors") {
    result.innerHTML = "The computer went rock. <br /> You lose!"
    losses++
  }
  if (cpuChoice === "Paper" && userChoice === "Rock") {
    result.innerHTML = "The computer went paper. <br /> You lose!"
    losses++
  }
  if (cpuChoice === "Paper" && userChoice === "Scissors") {
    result.innerHTML = "The computer went paper. <br /> You win!"
    wins++
  }
  if (cpuChoice === "Scissors" && userChoice === "Rock") {
    result.innerHTML = "The computer went scissors. <br /> You win!"
    wins++
  }
  if (cpuChoice === "Scissors" && userChoice === "Paper") {
    result.innerHTML = "The computer went scissors. <br /> You lose!"
    losses++
  }
  displayScore()
}

// function to display the score
function displayScore() {
  score.style.display = "block"
  result.style.display = "block"
  score.innerHTML = wins + " -" + losses + " -" + ties
}
