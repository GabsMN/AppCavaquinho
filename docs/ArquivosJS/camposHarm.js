// Navegação entre páginas
const cmpDo = document.getElementById("cmpDo");
const cmpRe = document.getElementById("cmpRe");
const cmpMi = document.getElementById("cmpMi");
const cmpFa = document.getElementById("cmpFa");
const cmpSol = document.getElementById("cmpSol");
const cmpLa = document.getElementById("cmpLa");
const cmpSi = document.getElementById("cmpSi");
const backBtn = document.getElementById("backButton");

if (cmpDo) {
  cmpDo.addEventListener("click", () => {
    window.location.href = "campoDo.html";
  });
}

if (cmpRe) {
  cmpRe.addEventListener("click", () => {
    window.location.href = "campoRe.html";
  });
}

if (cmpMi) {
  cmpMi.addEventListener("click", () => {
    window.location.href = "campoMi.html";
  });
}

if (cmpFa) {
  cmpFa.addEventListener("click", () => {
    window.location.href = "campoFa.html";
  });
}

if (cmpSol) {
  cmpSol.addEventListener("click", () => {
    window.location.href = "campoSol.html";
  });
}

if (cmpLa) {
  cmpLa.addEventListener("click", () => {
    window.location.href = "campoLa.html";
  });
}

if (cmpSi) {
  cmpSi.addEventListener("click", () => {
    window.location.href = "campoSi.html";
  });
}

if (backBtn) {
  backBtn.addEventListener("click", () => {
    window.location.href = "index.html";
  });
}
