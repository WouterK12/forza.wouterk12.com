var egg = "38384040373937396665";
var temp = "";

function initEgg() {
  document.querySelector("body").addEventListener("keydown", Checker);
}

function Checker(event) {
  var x = event.keyCode;
  temp = temp + x.toString();
  if (!egg.startsWith(temp)) {
    temp = "";
  } else if (egg == temp) {
    temp = "";
    turn.play();
  }
}
