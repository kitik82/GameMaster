alert("Game 'Guesing'");
alert(`I will randomly choose number from 1 to 100.
Your task is to guess it in the minimum number of attempts.
After eache your enter I will say you bigger or fewer your number from guess number.
let's start?
`);
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
//LOOK ITS REPEAT
function randomNum(a = 0, b) {
  return Math.floor(a + Math.random() * (b + 1 - a));
}
