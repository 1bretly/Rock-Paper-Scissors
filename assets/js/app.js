// let for the possible choices of rock, paper, or scissors
let choices = ["Rock", "Paper", "Scissors"]

// empty let for user/cpuChoice
let userChoice
let cpuChoice

// let for the play button with aEL to call startGame function
let playBtn = document.getElementById("play-btn")
playBtn.addEventListener("click", startGame)

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
      }
      if (rpsButtons.id === "Paper") {
        userChoice = "Paper"
      }
      if (rpsButtons.id === "Scissors") {
        userChoice = "Scissors"
      }
      console.log(userChoice)
    })
    // cpuInput()
  }
}

// function cpuInput() {
//   const randomNum = Math.floor(Math.random() * 3) + 1
//   if (randomNum === 1) {
//     cpuChoice = "rock"
//   }
//   if (randomNum === 2) {
//     cpuChoice = "paper"
//   }
//   if (randomNum === 3) {
//     cpuChoice = "scissors"
//   }
//   console.log(cpuChoice)
//   console.log("hi")
// }
