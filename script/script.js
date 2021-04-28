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

//play 5 rounds
let playerScore = 0;
let computerScore = 0;
function game() {
  let loopCounter = 0;
  while (loopCounter < 5) {
    let playerSelection = playerPlay();
    if (playerSelection) {
      let computerSelection = computerPlay();
      console.log(singleRound(playerSelection, computerSelection));
      loopCounter++;
    }
  }
  reportGameResult();
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

