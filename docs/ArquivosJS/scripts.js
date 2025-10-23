// Navegação entre páginas
const digitacaoBtn = document.getElementById("btnDigitacao");
const campoHarm = document.getElementById("campoHarm");
const maiorBtn = document.getElementById("btnAcordeMaior");
const menorBtn = document.getElementById("btnAcordeMenor");
const acorde7Btn = document.getElementById("btnAcorde7");
const trocaBtn = document.getElementById("btnTrocaAcorde");
const prepBtn = document.getElementById("btnAcordePrep");

if (digitacaoBtn) {
  digitacaoBtn.addEventListener("click", () => {
    window.location.href = "digitacao.html";
  });
}

if (campoHarm) {
  campoHarm.addEventListener("click", () => {
    window.location.href = "camposHarm.html";
  });
}

if (maiorBtn) {
  maiorBtn.addEventListener("click", () => {
    window.location.href = "acordeMaior.html";
  });
}

if (menorBtn) {
  menorBtn.addEventListener("click", () => {
    window.location.href = "acordeMenor.html";
  });
}

if (acorde7Btn) {
  acorde7Btn.addEventListener("click", () => {
    window.location.href = "acorde7.html";
  });
}

if (trocaBtn) {
  trocaBtn.addEventListener("click", () => {
    window.location.href = "trocaAcordes.html";
  });
}

if (prepBtn) {
  prepBtn.addEventListener("click", () => {
    window.location.href = "acordePrep.html";
  });
}
