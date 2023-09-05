var timer = 60;
var score = 0;
var hit = 0;
function IncrementScore() {
  score += 10;
  document.querySelector("#ScoreValue").textContent = score;
}

//bubble fucntion
function generateBubble() {
  var pack = "";

  for (let i = 1; i <= 133; i++) {
    var store = Math.floor(Math.random() * 10);
    pack += `<div class="bubble">${store}</div>`;
  }

  document.querySelector("#panelBottom").innerHTML = pack;
}


//timer function
function runTimer() {
  var time = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerCount").textContent = timer;
    } else {
      // this is for clearing memory of timer and stop it at 0
      clearInterval(time);
      document.querySelector("#panelBottom").innerHTML =  `<h1 class="head">GAME OVER</h1>`

    }
  }, 1000);
}

// Hit function
function getHit() {
  hit = Math.floor(Math.random() * 10);
  document.querySelector("#HitChange").textContent = hit;
}

document
  .querySelector("#panelBottom")
  .addEventListener("click", function (clicked) {
    var clickedNum = Number(clicked.target.textContent);
    if (clickedNum === hit) {
      IncrementScore();
      generateBubble();
      getHit();
    }
  });

runTimer();
generateBubble();
getHit();
