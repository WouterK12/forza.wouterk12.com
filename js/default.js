window.onload = function() {
  this.initTog();
  this.init();
  this.initLive();
  this.initAudio();
  this.initTime();
};

var curDate = new Date();
var fDate = new Date();
var chDate;

const se = ["winter", "spring", "summer", "autumn"];
const origin = new Date(Date.UTC(2018, 10, 8, 14, 30, 00));
var curSe;
var chSe;

var delay = 0;

var no = localStorage.getItem("no");

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const dayNames = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday"
];

function init() {
  chDateText = document.getElementById("chDate");
  curDateText = document.getElementById("curDate");
  fDateText = document.getElementById("fDate");
  chSeText = document.getElementById("chSe");
  curSeText = document.getElementById("curSe");

  UpdateCount();
  UpdateSeason();

  if (
    typeof window.orientation !== "undefined" ||
    navigator.userAgent.indexOf("IEMobile") !== -1
  ) {
    togN.style.display = "none";
  }
}

function SetDate(text, date) {
  text.innerHTML =
    dayNames[date.getDay() - 1] +
    ", " +
    date.getDate() +
    " " +
    monthNames[date.getMonth()] +
    " " +
    date.getFullYear();
}

function UpdateSeason() {
  curDate = new Date();
  var seGone = Math.floor(
    Math.abs((curDate - origin) / (7 * 24 * 60 * 60 * 1000))
  );

  chSe = se[(seGone + 1) % 4];
  curSe = se[seGone % 4];

  fDate = new Date(origin);
  fDate.setDate(fDate.getDate() + (seGone + 1) * 7);

  SetDate(curDateText, curDate);
  SetDate(fDateText, fDate);
  chSeText.innerHTML = chSe;
  curSeText.innerHTML = curSe;
}

function UpdateCount() {
  setTimeout(function() {
    curDate = new Date();
    chDate = fDate - curDate;

    var days = Math.floor(chDate / (1000 * 60 * 60 * 24));
    var hours = Math.floor((chDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((chDate % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((chDate % (1000 * 60)) / 1000);

    if (
      (days == 0 && hours == 0 && minutes == 0 && seconds == 0) ||
      (minutes.toString().startsWith("0-") &&
        seconds.toString().startsWith("0-"))
    ) {
      delay = 60000;
      setTimeout(function() {
        UpdateSeason();
        if (no == "true") {
          ShowNotification(curSe.toUpperCase() + " is here! Check it out!");
        }
      }, 1000);
    }

    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (days < 1 && hours < 1) {
      delay = 1000;
      chDateText.innerHTML = minutes + "m " + seconds + "s ";
      if (minutes == 0) {
        chDateText.innerHTML = seconds + "s ";
        if (seconds < 1) {
          chDateText.innerHTML = "0s ";
        }
      }
    } else if (days < 1) {
      delay = 60000;
      chDateText.innerHTML = hours + "h " + minutes + "m ";
      if (minutes == 0) {
        chDateText.innerHTML = hours + "h ";
      }
    } else {
      delay = 60000;
      chDateText.innerHTML = days + "d " + hours + "h ";
      if (hours == 0) {
        chDateText.innerHTML = days + "d ";
      }
    }
    UpdateCount();
  }, delay);
}
