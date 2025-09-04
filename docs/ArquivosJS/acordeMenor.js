let atual, proximo;
let intervalo = null;
let contador = 1;
let tempoSelecionado = 8;

const backBtn = document.getElementById("backButton");

const acordesMenores = [
  { nome: "Lá Menor", img: "./Imagens/laMenor.png" },
  { nome: "Si Menor", img: "./Imagens/siMenor.png" },
  { nome: "Dó Menor", img: "./Imagens/doMenor.png" },
  { nome: "Ré Menor", img: "./Imagens/reMenor.png" },
  { nome: "Mi Menor", img: "./Imagens/miMenor.png" },
  { nome: "Fá Menor", img: "./Imagens/faMenor.png" },
  { nome: "Sol Menor", img: "./Imagens/solMenor.png" },
];

function sortearAcorde() {
  return acordesMenores[Math.floor(Math.random() * acordesMenores.length)];
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
    img.style.display = "none";
    divProx.textContent = "Próximo: ?";
  }
}

function iniciar() {
  const nivel = document.getElementById("nivel").value;
  tempoSelecionado = parseInt(document.getElementById("tempo").value);

  clearInterval(intervalo);
  contador = 1;

  atual = sortearAcorde();
  proximo = sortearAcorde();
  mostrarAcorde(nivel, atual, proximo);

  document.getElementById("timer-acorde").textContent = `Tempo: ${contador}`;

  intervalo = setInterval(() => {
    contador++;

    if (contador > tempoSelecionado) {
      contador = 1;
      atual = proximo;
      proximo = sortearAcorde();
      mostrarAcorde(nivel, atual, proximo);
    }

    document.getElementById("timer-acorde").textContent = `Tempo: ${contador}`;
  }, 1000);
}

if (backBtn) {
  backBtn.addEventListener("click", () => {
    window.location.href = "index.html";
  });
}
