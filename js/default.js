window.onload = init;

var curDate = new Date();
var fDate = GetNextDayOfWeek(new Date(), 4, 8);
var chDate = fDate.getTime();

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

  curDateText.innerHTML =
    dayNames[curDate.getDay() - 1] +
    ", " +
    curDate.getDate() +
    " " +
    monthNames[curDate.getMonth()] +
    " " +
    curDate.getFullYear();

  fDateText.innerHTML =
    dayNames[fDate.getDay() - 1] +
    ", " +
    fDate.getDate() +
    " " +
    monthNames[fDate.getMonth()] +
    " " +
    fDate.getFullYear();

  UpdateCount();
}

function GetNextDayOfWeek(date, dayOfWeek, hour) {
  var resultDate = new Date(date.getTime());
  resultDate.setDate(date.getDate() + ((7 + dayOfWeek - date.getDay()) % 7));
  resultDate.setHours(hour, 0, 0, 0);
  return resultDate;
}

function UpdateCount() {
  var x = setInterval(function() {
    curDate = new Date();
    fDate = GetNextDayOfWeek(new Date(), 4, 8);
    chDate = fDate.getTime();

    var distance = chDate - curDate;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    chDateText.innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s";
  }, 1000);
}
