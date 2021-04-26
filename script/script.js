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
