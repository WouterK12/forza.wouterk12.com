var live;
var liveT;

var now = new Date();
var nextH = new Date();
var nextT;

var liveDelay = 1000;

function initLive() {
  live = document.querySelector(".live");
  liveT = document.getElementById("live");

  UpdateText();
}

function UpdateText() {
  setTimeout(function() {
    now = new Date();
    nextH = new Date();
    nextH.setHours(nextH.getHours() + 1);
    nextH.setMinutes(0);
    nextH.setSeconds(0);

    nextT = nextH.getTime() - now.getTime();

    var minutes = Math.floor((nextT % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((nextT % (1000 * 60)) / 1000);

    if (minutes > 15) {
      liveDelay = 60000;
    } else {
      liveDelay = 1000;
    }
    if (minutes == 10 && seconds == 0) {
      live.classList.remove("hidden");
    }
    if (minutes == 0 && seconds == 0) {
      live.classList.add("hidden");
    }

    SetText(liveT, minutes, seconds);

    UpdateText();
  }, liveDelay);
}

function SetText(text, min, sec) {
  text.innerHTML = min + ":" + sec;
}
