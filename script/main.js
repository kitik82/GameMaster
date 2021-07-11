alert("Hello! Welcome to 'GameMaster' version 0.1 ");
chooseGame();

function chooseGame() {
  let games = prompt(`Choose the game:
        1 - guessing
        2 - counting
        3 - clicking
        For exit enter 'exit'
        `);
  if (games === "1") {
    gameLaunch();
  } else if (games === "2") {
    gameLaunch();
  } else if (games === "3") {
    gameLaunch();
  } else if (games === "exit") {
    alert("Bye, bye");
  } else {
    alert("Invalid input, try again :(");
    chooseGame();
  }
}

function randomNum(a = 0, b) {
  return Math.floor(a + Math.random() * (b + 1 - a));
}
function gameLaunch() {
  alert("Game launching...");
}
