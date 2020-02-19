window.onload = init;

var curDate = new Date();
var fDate = new Date();
var chDate;

const se = ["winter", "spring", "summer", "autumn"];
const origin = new Date(Date.UTC(2018, 10, 8, 14, 30, 00));
var curSe;
var chSe;

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

  SetDate(curDateText, curDate);
  SetDate(fDateText, fDate);

  var seGone = Math.floor(
    Math.abs((curDate - origin) / (7 * 24 * 60 * 60 * 1000))
  );

  chSe = se[(seGone + 1) % 4];
  curSe = se[seGone % 4];

  fDate = new Date(origin);
  fDate.setDate(fDate.getDate() + (seGone + 1) * 7);

  chSeText.innerHTML = chSe;
  curSeText.innerHTML = curSe;
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

function UpdateCount() {
  var x = setInterval(function() {
    curDate = new Date();
    chDate = fDate - curDate;

    var days = Math.floor(chDate / (1000 * 60 * 60 * 24));
    var hours = Math.floor((chDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((chDate % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((chDate % (1000 * 60)) / 1000);

    chDateText.innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s";
  }, 1000);
}
