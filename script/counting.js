alert("Game 'Counting'");
alert(`I will randomly give you task for math.
Your task are solve 5 tasks correctly.
Let's start?
`);
let countCorrect = 0;
let signPrimera = "";
let otvetPrimera = 0;
for (i = 1; i < 5; i++) {
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
  let enterOtvetPrimera = prompt(`${firstSlog} ${signPrimera} ${secondSlog} `);
  if (enterOtvetPrimera == otvetPrimera) {
    countCorrect++;
  }
}
alert(`Correct answers: ${countCorrect} from 5 `);
chooseGame();
//LOOK ITS REPEAT
function randomNum(a = 0, b) {
  return Math.floor(a + Math.random() * (b + 1 - a));
}
