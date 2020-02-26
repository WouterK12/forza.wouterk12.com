var start;
var short;
var turn;

function initAudio() {
  start = new sound("/audio/f_start.mp3");
  short = new sound("/audio/f_short.mp3");
  turn = new sound("/audio/f_turn.mp3");
}

function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function() {
    this.sound.play();
  };
  this.stop = function() {
    this.sound.pause();
  };
}
