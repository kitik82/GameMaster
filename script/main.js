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
    gameLaunchGuessing();
  } else if (games === "guessing") {
    gameLaunchGuessing();
  } else if (games === "counting") {
    gameLaunchCounting();
  } else if (games === "clicking") {
    gameLaunchClicking();
  } else if (games === "2") {
    gameLaunchCounting();
  } else if (games === "3") {
    gameLaunchClicking();
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
function gameLaunchGuessing() {
  alert("Game launching...");
  alert("Game 'Guessing'");
  alert(`I will randomly choose number from 1 to 100.
Your task is to guess it in the minimum number of attempts.
After eache your enter I will say you bigger or fewer your number from guess number.
let's start?
`);
  guessingGame();
}
function guessingGame() {
  let ugadNum = prompt("Enter number");
  let zagadNum = randomNum(0, 100);
  let numTry = 0;
  provNum();
  function provNum() {
    if (ugadNum > zagadNum) {
      alert("Fewer");
      numTry++;
      ugadNum = prompt("Enter number");
      provNum();
    } else if (ugadNum < zagadNum) {
      alert("Bigger");
      numTry++;
      ugadNum = prompt("Enter number");
      provNum();
    } else {
      alert("Congratulations");
      alert(`You made it for ${numTry} attemption`);
      chooseGame();
    }
  }
}
function gameLaunchCounting() {
  alert("Game launching...");
  alert("Game 'Counting'");
  alert(`I will randomly give you task for math.
Your goal are solve 5 tasks correctly.
Let's start?
`);
  countingGame();
}
function countingGame() {
  let countCorrect = 0;
  let signPrimera;
  let otvetPrimera;
  for (i = 0; i < 5; i++) {
    let firstSlog = randomNum(0, 20);
    let secondSlog = randomNum(0, 20);
    let signChoose = randomNum(1, 3);
    if (signChoose === 1) {
      signPrimera = "+";
      otvetPrimera = firstSlog + secondSlog;
    } else if (signChoose === 2) {
      signPrimera = "-";
      otvetPrimera = firstSlog - secondSlog;
    } else if (signChoose === 3) {
      signPrimera = "*";
      otvetPrimera = firstSlog * secondSlog;
    }
    let enterOtvetPrimera = prompt(
      `${firstSlog} ${signPrimera} ${secondSlog} `
    );
    if (Number(enterOtvetPrimera) === Number(otvetPrimera)) {
      countCorrect++;
    }
  }
  alert(`Correct answers: ${countCorrect} from 5 `);
  chooseGame();
}
function gameLaunchClicking() {
  alert("Game launching...");
  alert("Game 'Clicking'");
  alert(`I will randomly show 10 system windows.
Your task that how could faster clicking all.
In window 'confirm' you need click 'No'.
Let's start?`);
  clickingGame();
}
function clickingGame() {
  let clickNo;
  let noCount = 0;
  for (let i = 0; i < 10; i++) {
    let windowChoose = randomNum(1, 2);
    if (windowChoose === 1) {
      clickNo = confirm("Click 'No'");
      if (clickNo === false) {
        noCount++;
      }
    } else if (windowChoose === 2) {
      alert("Just click 'Close'");
      noCount++;
    }
  }
  alert(`Mistakes: ${10 - noCount}`);
  chooseGame();
}
