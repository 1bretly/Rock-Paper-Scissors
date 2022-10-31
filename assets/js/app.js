// let for the possible choices of rock, paper, or scissors
let choices = ["Rock", "Paper", "Scissors"]

// let for the play button with aEL to call startGame function
let playBtn = document.getElementById("play-btn")
playBtn.addEventListener("click", startGame)

function startGame() {
  playBtn.style.display = "none"
  for (let i = 0; i < choices.length; i++) {
    let rpsButtons = document.createElement("button")
    rpsButtons.innerHTML = choices[i]
    rpsButtons.id = "rpsButtons"
    document.body.appendChild(rpsButtons)
  }
}
