var time = "38384040373937396665";
var temp = "";

function initTime() {
  document.querySelector("body").addEventListener("keydown", Checker);
}

function Checker(event) {
  var x = event.keyCode;
  temp = temp + x.toString();
  if (!time.startsWith(temp)) {
    temp = "";
    temp = temp + x.toString();
  } else if (time == temp) {
    temp = "";
    turn.play();
  }
}
