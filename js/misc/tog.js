var togN;

function initTog() {
  const togD = document.querySelector(".toggle.dark");
  togN = document.querySelector(".toggle.no");
  const body = document.querySelector("body");
  const noText = document.querySelector(".no-warn");

  if (localStorage.getItem("dark") == "true") {
    togD.classList.add("on");
    body.classList.add("dark");
  }
  if (
    localStorage.getItem("no") == "true" &&
    Notification.permission === "granted"
  ) {
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
      DisableNo();
    } else {
      if (
        Notification.permission === "default" ||
        Notification.permission === "denied"
      ) {
        Notification.requestPermission().then(function(permission) {
          if (permission === "granted") {
            EnableNo();
          } else {
            DisableNo();
          }
        });
      }
      if (Notification.permission === "granted") {
        EnableNo();
      } else if (Notification.permission === "denied") {
        noText.classList.add("no");
      }
    }
  });
}

function EnableNo() {
  togN.classList.add("on");
  no = "true";
  localStorage.setItem("no", "true");
  ShowNotification("Notifications enabled");
}
function DisableNo() {
  togN.classList.remove("on");
  no = "false";
  localStorage.setItem("no", "false");
}
