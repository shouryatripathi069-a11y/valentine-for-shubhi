function nextScreen(number) {
  document.getElementById("screen1").classList.add("hidden");
  document.getElementById("screen2").classList.add("hidden");
  document.getElementById("screen3").classList.add("hidden");

  document.getElementById("screen" + number).classList.remove("hidden");
}

document.addEventListener("DOMContentLoaded", function () {
  const noBtn = document.querySelector(".no");

  if (noBtn) {
    noBtn.addEventListener("click", () => {
      alert("Aww 😅 take your time… but I hope it’s a YES ❤️");
    });
  }

  const yesBtn = document.querySelector(".yes");

  if (yesBtn) {
    yesBtn.addEventListener("click", () => {
      alert("YAYYYY 💖 This just made my day 😍");
    });
  }
});
