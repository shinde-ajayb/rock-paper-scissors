//function to randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.

function computerPlay() {
  let randomNumber = Math.random();
  if (randomNumber <= 0.3) {
    return "Rock";
  } else if (randomNumber <= 0.7) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

//take user input

function playerPlay() {
  let playerSelection = prompt("Enter Your Choice").toLowerCase();
  if (
    playerSelection !== "rock" &&
    playerSelection !== "paper" &&
    playerSelection !== "scissors"
  ) {
    alert("Invalid Input.");
  } else {
    return playerSelection;
  }
}

//play single round of game

function singleRound(playerSelection, computerSelection) {
  let playerWin = false;
  let tie = false;
  computerSelection = computerSelection.toLowerCase();
  if (playerSelection == computerSelection) {
    tie = true;
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    playerWin = true;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerWin = true;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerWin = true;
  }
  if (playerWin && tie == false) {
    playerScore++;
  } else if (tie != true) {
    computerScore++;
  }
  return makeResultString(playerWin, tie, playerSelection, computerSelection);
}
function makeResultString(playerWin, tie, playerSelection, computerSelection) {
  let result = "";
  if (tie) {
    result = `tie`;
    return result;
  } else if (playerWin) {
    result = `you Win! ${playerSelection} beats ${computerSelection}.`;
    return result;
  } else {
    result = `You Lose! ${computerSelection} beats ${playerSelection}`;
    return result;
  }
}

let playerScore = 0;
let computerScore = 0;
let playerScoreNode = document.querySelector("#user-score");
let computerScoreNode = document.querySelector("#computer-score");
let computerChoiceNode = document.querySelector("#computer-choice");
function game(e) {
  let playerSelection = e.target.value;
  let computerSelection = computerPlay();
  computerChoiceNode.textContent = `Computer Choice => ${computerSelection}`;
  displayRoundResult(singleRound(playerSelection, computerSelection));
  updateScoreScreen();
  checkForWinner();
}

let roundResultNode = document.querySelector("#round-result");
function displayRoundResult(singleRoundResult) {
  roundResultNode.textContent = singleRoundResult;
}

function updateScoreScreen() {
  computerScoreNode.textContent = computerScore;
  playerScoreNode.textContent = playerScore;
}
let finalResultNode = document.querySelector("#final-result");
function checkForWinner() {
  if (playerScore == 5) {
    finalResultNode.textContent = `You Rock!, You Won!`;
    btnGroup.forEach((btn) => btn.removeEventListener("click", game));
  } else if (computerScore == 5) {
    finalResultNode.textContent = `You Lost The Game.`;
    btnGroup.forEach((btn) => btn.removeEventListener("click", game));
  }
}
function reportGameResult() {
  if (playerScore > computerScore) {
    console.log("Well played,You won the game!.");
  } else if (playerScore < computerScore) {
    console.log("You lost the game, Better luck next time!.");
  } else {
    console.log("Game Tied");
  }
  console.log(
    `Final Score: \n You = ${playerScore}, \nComputerScore = ${computerScore}`
  );
}

//event listener on button
let playerSelection = "";
let btnGroup = document.querySelectorAll(".btn");
btnGroup = Array.from(btnGroup);
btnGroup.forEach((btn) => btn.addEventListener("click", game));
