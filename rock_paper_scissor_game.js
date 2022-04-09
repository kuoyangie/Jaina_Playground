let computerScore = 0;
let userScore = 0;
const userScore_Span = document.getElementById("user-score");
const computerScore_Span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
const smallUser = "user".fontsize(3).sub();
const smallComp = "computer".fontsize(2).sub();
const restart_div = document.getElementById("x");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNum = Math.floor(Math.random() * 3);

  return choices[randomNum];
}

function converToWord(letter) {
  if (letter === "r") return "ROCK";
  if (letter === "p") return "PAPER";
  return "SCISSORS";
}

function win(userChoice, computerChoice){
  userScore++;
  userScore_Span.innerHTML = userScore;
  result_p.innerHTML = `${converToWord(userChoice)}${smallUser} beats ${converToWord(computerChoice)}${smallComp}. You win.`;
}

function lose(userChoice, computerChoice){
  computerScore++;
  computerScore_Span.innerHTML = computerScore;
  result_p.innerHTML = `${converToWord(userChoice)}${smallUser} falters against ${converToWord(computerChoice)}${smallComp}. You lose.`;
}

function draw(userChoice, computerChoice){
  result_p.innerHTML = `${converToWord(userChoice)}${smallUser} vs. ${converToWord(computerChoice)}${smallComp}. DRAW!`;
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "sr":
    case "ps":
      lose(userChoice, computerChoice);
      break;
    case "pp":
    case "rr":
    case "ss":
      draw(userChoice, computerChoice);
    break;
  }
}

function reset() {
  userScore = 0;
  userScore_Span.innerHTML = userScore;
  computerScore = 0;
  computerScore_Span.innerHTML = computerScore;
}

function main() {
  rock_div.addEventListener('click', function() {
    game("r");
  })

  scissor_div.addEventListener('click', function() {
    game("s");
  })

  paper_div.addEventListener('click', function() {
    game("p");
  })

  restart_div.addEventListener('click', function() {
    reset();
  })
}

main();
