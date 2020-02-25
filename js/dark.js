function initDark() {
  const tog = document.querySelector(".toggle");
  const body = document.querySelector("body");

  if (localStorage.getItem("dark") == true) {
    tog.classList.add("on");
    body.classList.add("dark");
  }

  tog.addEventListener("click", function() {
    if (tog.classList.contains("on")) {
      tog.classList.remove("on");
      body.classList.remove("dark");
      localStorage.setItem("dark", false);
    } else {
      tog.classList.add("on");
      body.classList.add("dark");
      localStorage.setItem("dark", true);
    }
  });
}
