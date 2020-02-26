function initTog() {
  const togD = document.querySelector(".toggle.dark");
  const body = document.querySelector("body");

  if (localStorage.getItem("dark") == "true") {
    togD.classList.add("on");
    body.classList.add("dark");
  }

  togD.addEventListener("click", function() {
    if (togD.classList.contains("on")) {
      togD.classList.remove("on");
      body.classList.remove("dark");
      localStorage.setItem("dark", "false");
    } else {
      togD.classList.add("on");
      body.classList.add("dark");
      localStorage.setItem("dark", "true");
    }
  });
}
