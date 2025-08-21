let atualIndex = 0;
let intervalo = null;
let contador = 1;
let tempoSelecionado = 8;

const backBtn = document.getElementById("backButton");

const sequencia1 = [
  { nome: "Dó", img: "./Imagens/acorde_Do.JPG" },
  { nome: "Dó com 7ª", img: "./Imagens/acorde_Do7.PNG" },
  { nome: "Fá", img: "./Imagens/acorde_Fa.JPG" },
  { nome: "Fá Menor", img: "./Imagens/acorde_FaM.PNG" },
];

const sequencia2 = [
  { nome: "Ré", img: "./Imagens/acorde_Re.JPG" },
  { nome: "Si menor", img: "./Imagens/acorde_SiM.PNG" },
  { nome: "Mi menor", img: "./Imagens/acorde_MiM_P.PNG" },
  { nome: "Lá com 7ª", img: "./Imagens/acorde_La7_P.JPG" },
];

const sequencia3 = [
  { nome: "Fá", img: "./Imagens/acorde_Fa.JPG" },
  { nome: "Ré com 7ª", img: "./Imagens/acorde_Re7_P.JPG" },
  { nome: "Sol menor", img: "./Imagens/acorde_SolM.PNG" },
  { nome: "Dó com 7ª", img: "./Imagens/acorde_Do7_P.JPG" },
];

const sequencia4 = [
  { nome: "Lá", img: "./Imagens/acorde_La.JPG" },
  { nome: "Lá com 7ª", img: "./Imagens/acorde_La7.PNG" },
  { nome: "Ré", img: "./Imagens/acorde_Re.JPG" },
  { nome: "Mi com 7ª", img: "./Imagens/acorde_Mi7_P.png" },
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
