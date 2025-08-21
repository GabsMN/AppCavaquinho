let atual, proximo;
let intervalo = null;
let contador = 1;
let tempoSelecionado = 8;

const backBtn = document.getElementById("backButton");

const acordesMaiores = [
  { nome: "Lá", img: "./Imagens/acorde_La.JPG" },
  { nome: "Si", img: "./Imagens/acorde_Si.JPG" },
  { nome: "Dó", img: "./Imagens/acorde_Do.JPG" },
  { nome: "Ré", img: "./Imagens/acorde_Re.JPG" },
  { nome: "Mi", img: "./Imagens/acorde_Mi.JPG" },
  { nome: "Fá", img: "./Imagens/acorde_Fa.JPG" },
  { nome: "Sol", img: "./Imagens/acorde_Sol.JPG" },
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
