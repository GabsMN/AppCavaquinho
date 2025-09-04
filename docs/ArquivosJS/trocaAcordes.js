let atualIndex = 0;
let intervalo = null;
let contador = 1;
let tempoSelecionado = 8;

const backBtn = document.getElementById("backButton");

const sequencia1 = [
  { nome: "Dó", img: "./Imagens/doMaior.png" },
  { nome: "Dó com 7ª", img: "./Imagens/do7.png" },
  { nome: "Fá", img: "./Imagens/faMaior.png" },
  { nome: "Fá Menor", img: "./Imagens/faMenor.png" },
];

const sequencia2 = [
  { nome: "Ré", img: "./Imagens/reMaior.png" },
  { nome: "Si menor", img: "./Imagens/siMenor.png" },
  { nome: "Mi menor", img: "./Imagens/miMenorPadrao.png" },
  { nome: "Lá com 7ª", img: "./Imagens/la7Padrao.png" },
];

const sequencia3 = [
  { nome: "Fá", img: "./Imagens/faMaior.png" },
  { nome: "Ré com 7ª", img: "./Imagens/re7Padrao.png" },
  { nome: "Sol menor", img: "./Imagens/solMenor.png" },
  { nome: "Dó com 7ª", img: "./Imagens/do7Padrao.png" },
];

const sequencia4 = [
  { nome: "Lá", img: "./Imagens/laMaior.png" },
  { nome: "Lá com 7ª", img: "./Imagens/la7.png" },
  { nome: "Ré", img: "./Imagens/reMaior.png" },
  { nome: "Mi com 7ª", img: "./Imagens/mi7Padrao.png" },
];

// Função auxiliar que retorna a sequência escolhida
function pegarSequencia(padrao) {
  switch (padrao) {
    case "1":
      return sequencia1;
    case "2":
      return sequencia2;
    case "3":
      return sequencia3;
    case "4":
      return sequencia4;
    default:
      return sequencia1;
  }
}

function mostrarAcorde(acorde, proximo) {
  const divAtual = document.getElementById("acordeAtual");
  const divProx = document.getElementById("proximoAcorde");
  const img = document.getElementById("imagemAcorde");

  divAtual.textContent = acorde.nome;
  img.src = acorde.img;
  img.style.display = "block";
  divProx.textContent = "Próximo: " + proximo.nome;
}

function iniciar() {
  const padrao = document.getElementById("padrao").value;
  tempoSelecionado = parseInt(document.getElementById("tempo").value);

  const sequencia = pegarSequencia(padrao);

  clearInterval(intervalo);
  contador = 1;
  atualIndex = 0;

  let atual = sequencia[atualIndex];
  let proximo = sequencia[(atualIndex + 1) % sequencia.length];
  mostrarAcorde(atual, proximo);

  document.getElementById("timer-acorde").textContent = `Tempo: ${contador}`;

  intervalo = setInterval(() => {
    contador++;

    if (contador > tempoSelecionado) {
      contador = 1;
      atualIndex = (atualIndex + 1) % sequencia.length;

      atual = sequencia[atualIndex];
      proximo = sequencia[(atualIndex + 1) % sequencia.length];
      mostrarAcorde(atual, proximo);
    }

    document.getElementById("timer-acorde").textContent = `Tempo: ${contador}`;
  }, 1000);
}

if (backBtn) {
  backBtn.addEventListener("click", () => {
    window.location.href = "index.html";
  });
}
