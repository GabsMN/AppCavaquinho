let atual, proximo;
let intervalo = null;
let contador = 1;
let tempoSelecionado = 8;

const backBtn = document.getElementById("backButton");

const acordes7 = [
  { nome: "Lá com 7ª", img: "./Imagens/acorde_La7.PNG" },
  { nome: "Si com 7ª", img: "./Imagens/acorde_Si7.PNG" },
  { nome: "Dó com 7ª", img: "./Imagens/acorde_Do7.PNG" },
  { nome: "Ré com 7ª", img: "./Imagens/acorde_Re7.PNG" },
  { nome: "Mi com 7ª", img: "./Imagens/acorde_Mi7.PNG" },
  { nome: "Fá com 7ª", img: "./Imagens/acorde_Fa7.PNG" },
  { nome: "Sol com 7ª", img: "./Imagens/acorde_Sol7.PNG" },
];

function sortearAcorde() {
  return acordes7[Math.floor(Math.random() * acordes7.length)];
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
