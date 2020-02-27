function initTog() {
  const togD = document.querySelector(".toggle.dark");
  const togN = document.querySelector(".toggle.no");
  const body = document.querySelector("body");

  if (localStorage.getItem("dark") == "true") {
    togD.classList.add("on");
    body.classList.add("dark");
  }
  if (localStorage.getItem("no") == "true") {
    togN.classList.add("on");
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
  togN.addEventListener("click", function() {
    if (togN.classList.contains("on")) {
      togN.classList.remove("on");
      localStorage.setItem("no", "false");
    } else {
      togN.classList.add("on");
      localStorage.setItem("no", "true");
    }
  });
}
