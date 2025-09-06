let atual, proximo;
let intervalo = null;
let contador = 1;
let tempoSelecionado = 8;
let indice = 0;

const backBtn = document.getElementById("backButton");

const acordes7 = [
  { nome: "Dó", img: "./Imagens/doMaior.png" },
  { nome: "Lá com 7ª", img: "./Imagens/la7.png" },
  { nome: "Ré Menor", img: "./Imagens/reMenor.png" },
  { nome: "Sol com 7ª", img: "./Imagens/sol7.png" },
  { nome: "Sol Menor", img: "./Imagens/solMenor.png" },
  { nome: "Dó com 7", img: "./Imagens/do7Padrao.png" },
  { nome: "Fá Sustenido Meio Diminuto", img: "./Imagens/faSusMeioDim.png" },
  { nome: "Fá Menor com 6ª", img: "./Imagens/faMenor6.png" },
  { nome: "Mi Menor", img: "./Imagens/miMenorPadrao.png" },
  { nome: "Lá com 7ª", img: "./Imagens/la7.png" },
  { nome: "Ré com 7ª", img: "./Imagens/re7Campo.png" },
  { nome: "Sol de 7ª com 4ª suspensa", img: "./Imagens/sol74.png" },
  { nome: "Sol com 7ª", img: "./Imagens/sol7.png" },
];

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
    img.style.display = "none";
    divProx.textContent = "Próximo: ?";
  }
}

function iniciar() {
  const nivel = document.getElementById("nivel").value;
  tempoSelecionado = parseInt(document.getElementById("tempo").value);

  clearInterval(intervalo);
  contador = 1;
  indice = 0;

  atual = acordes7[indice];
  proximo = acordes7[(indice + 1) % acordes7.length];
  mostrarAcorde(nivel, atual, proximo);

  document.getElementById("timer-acorde").textContent = `Tempo: ${contador}`;

  intervalo = setInterval(() => {
    contador++;

    if (contador > tempoSelecionado) {
      contador = 1;
      indice = (indice + 1) % acordes7.length;
      atual = acordes7[indice];
      proximo = acordes7[(indice + 1) % acordes7.length];
      mostrarAcorde(nivel, atual, proximo);
    }

    document.getElementById("timer-acorde").textContent = `Tempo: ${contador}`;
  }, 1000);
}

if (backBtn) {
  backBtn.addEventListener("click", () => {
    window.location.href = "camposHarm.html";
  });
}
