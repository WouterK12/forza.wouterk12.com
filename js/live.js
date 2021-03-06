var live;
var liveT;

var now = new Date();
var nextH = new Date();
var nextT;

var liveDelay = 0;

function initLive() {
  live = document.querySelector(".live");
  liveT = document.getElementById("live");

  UpdateText();
}

function UpdateText() {
  setTimeout(function () {
    now = new Date();
    nextH = new Date();
    nextH.setHours(nextH.getHours() + 1);
    nextH.setMinutes(0);
    nextH.setSeconds(0);

    nextT = nextH - now;

    var minutes = Math.floor((nextT % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((nextT % (1000 * 60)) / 1000);

    if (minutes > 15) {
      liveDelay = 60000;
    } else {
      liveDelay = 1000;
    }
    if (minutes > 10 && !live.classList.contains("hidden")) {
      live.classList.add("hidden");
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
      if (live.classList.contains("hidden")) {
        live.classList.remove("hidden");
      }
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (minutes == 10 && seconds == 0) {
      if (allowed) short.play();
      if (no == "true") {
        ShowNotification("#FORZATHON LIVE starting in 10 minutes!");
      }
    }
    if (minutes == 5 && seconds == 0) {
      if (no == "true") {
        ShowNotification("#FORZATHON LIVE starting in 5 minutes!");
      }
    }
    if (minutes == 1 && seconds == 0) {
      if (no == "true") {
        ShowNotification("#FORZATHON LIVE starting in 1 minute!");
      }
    }
    if (minutes < 1 && seconds == 7) {
      if (allowed) start.play();
      if (no == "true") {
        ShowNotification("#FORZATHON LIVE starting now!");
      }
    }

    SetText(liveT, minutes, seconds);

    UpdateText();
  }, liveDelay);
}

function SetText(text, min, sec) {
  text.innerHTML = min + ":" + sec;
}
