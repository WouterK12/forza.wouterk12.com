function initDark() {
  const tog = document.querySelector(".toggle");
  const body = document.querySelector("body");

  tog.addEventListener("click", function() {
    if (tog.classList.contains("on")) {
      tog.classList.remove("on");
      body.classList.remove("dark");
    } else {
      tog.classList.add("on");
      body.classList.add("dark");
    }
  });
}
