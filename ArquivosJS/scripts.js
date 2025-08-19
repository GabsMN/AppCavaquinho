let duration = 15 * 60; // duração inicial em segundos
let remaining = duration;
let interval = null;
const digitacaoBtn = document.getElementById("btnDigitacao");
const backBtn = document.getElementById("backButton");

const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("startButton");
const pauseBtn = document.getElementById("pauseButton");

function updateDisplay() {
  const minutes = String(Math.floor(remaining / 60)).padStart(2, "0");
  const seconds = String(remaining % 60).padStart(2, "0");
  timerDisplay.textContent = `${minutes}:${seconds}`;
}

if (digitacaoBtn) {
  digitacaoBtn.addEventListener("click", () => {
    window.location.href = "digitacao.html";
  });
}

if (backBtn) {
  backBtn.addEventListener("click", () => {
    window.location.href = "index.html";
  });
}

function showMessage(msg) {
  messagePopup.textContent = msg;
  messagePopup.classList.add("show");
  setTimeout(() => {
    messagePopup.classList.remove("show");
  }, 3000); // aparece por 3 segundos
}

function startTimer() {
  if (interval) return; // evita múltiplos timers
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

updateDisplay(); // mostra o tempo inicial
