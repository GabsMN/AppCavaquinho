let duration = 15 * 60; // duração inicial em segundos
let remaining = duration;
let interval = null;
let atual, proximo;
let intervalo = null;
let contador = 1;
let tempoSelecionado = 8;
let timerInterval = null;
let tempoDecorrido = 0;
const digitacaoBtn = document.getElementById("btnDigitacao");
const backBtn = document.getElementById("backButton");
const maiorBtn = document.getElementById("btnAcordeMaior");

const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("startButton");
const pauseBtn = document.getElementById("pauseButton");

const acordesMaiores = [
  { nome: "Lá", img: "../Imagens/acorde_La.JPG" },
  { nome: "Si", img: "../Imagens/acorde_Si.JPG" },
  { nome: "Dó", img: "../Imagens/acorde_Do.JPG" },
  { nome: "Ré", img: "../Imagens/acorde_Re.JPG" },
  { nome: "Mi", img: "../Imagens/acorde_Mi.JPG" },
  { nome: "Fá", img: "../Imagens/acorde_Fa.JPG" },
  { nome: "Sol", img: "../Imagens/acorde_Sol.JPG" },
];

function sortearAcorde() {
  return acordesMaiores[Math.floor(Math.random() * acordesMaiores.length)];
}

function mostrarAcorde(nivel, acorde, proximo) {
  const divAtual = document.getElementById("acordeAtual");
  const divProx = document.getElementById("proximoAcorde");
  const img = document.getElementById("imagemAcorde");

  divAtual.textContent = acorde.nome;

  if (nivel === "facil") {
    img.src = acorde.img;
    img.style.display = "block";
    divProx.textContent = "Próximo: " + proximo.nome;
  } else if (nivel === "medio") {
    img.style.display = "none";
    divProx.textContent = "Próximo: " + proximo.nome;
  } else {
    // difícil
    img.style.display = "none";
    divProx.textContent = "Próximo: ?";
  }
}

function iniciar() {
  const nivel = document.getElementById("nivel").value;
  tempoSelecionado = parseInt(document.getElementById("tempo").value); // valor em segundos

  clearInterval(intervalo);
  contador = 1;

  atual = sortearAcorde();
  proximo = sortearAcorde();
  mostrarAcorde(nivel, atual, proximo);

  // Mostra o 1 logo no início
  document.getElementById("timer-acorde").textContent = `Tempo: ${contador}`;

  intervalo = setInterval(() => {
    contador++;

    if (contador > tempoSelecionado) {
      // reinicia ciclo e troca acorde
      contador = 1;
      atual = proximo;
      proximo = sortearAcorde();
      mostrarAcorde(nivel, atual, proximo);
    }

    document.getElementById("timer-acorde").textContent = `Tempo: ${contador}`;
  }, 1000);
}

function pararTreino() {
  clearInterval(intervalo);
}

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

if (maiorBtn) {
  maiorBtn.addEventListener("click", () => {
    window.location.href = "acordeMaior.html";
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
