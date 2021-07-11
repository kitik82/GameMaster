alert("Game 'Clicking'");
alert(`I will randomly show 10 system windows.
Your task that how could faster clicking all.
In window 'confirm' you need click 'No'.
Let's start?`);
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
//LOOK ITS REPEAT
function randomNum(a = 0, b) {
  return Math.floor(a + Math.random() * (b + 1 - a));
}
