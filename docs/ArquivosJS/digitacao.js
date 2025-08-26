let duration = 10 * 60; // 10 minutos
let remaining = duration;
let interval = null;

const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("startButton");
const pauseBtn = document.getElementById("pauseButton");
const backBtn = document.getElementById("backButton");
const messagePopup = document.getElementById("messagePopup");

function updateDisplay() {
  const minutes = String(Math.floor(remaining / 60)).padStart(2, "0");
  const seconds = String(remaining % 60).padStart(2, "0");
  timerDisplay.textContent = `${minutes}:${seconds}`;
}

function showMessage(msg) {
  messagePopup.textContent = msg;
  messagePopup.classList.add("show");
  setTimeout(() => {
    messagePopup.classList.remove("show");
  }, 3000);
}

function startTimer() {
  if (interval) return;
  interval = setInterval(() => {
    if (remaining > 0) {
      remaining--;
      if (remaining % (5 * 60) === 0 && remaining !== duration) {
        showMessage("Sugestão: Troque o tipo de exercício de digitação!");
      }
      updateDisplay();
    } else {
      clearInterval(interval);
      interval = null;
      showMessage("⏰ Tempo encerrado!");
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(interval);
  interval = null;
}

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);

if (backBtn) {
  backBtn.addEventListener("click", () => {
    window.location.href = "index.html";
  });
}

updateDisplay();
