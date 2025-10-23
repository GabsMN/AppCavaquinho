// Variáveis globais para controlar o estado do treino
let acordesAtuais = null; // Vai armazenar o array de Maiores ou Menores
let indiceAtual = 0; // Vai controlar a posição atual nos arrays

// Seletores dos botões
const backBtn = document.getElementById("backButton");
const comecarBtn = document.getElementById("comecarButton"); // Adicionado ID no HTML
const proximoBtn = document.getElementById("proximoButton"); // Adicionado ID no HTML

// --- Seus Arrays de Acordes (Corretos) ---
const acordesMenores = [
  { nome: "Lá Menor", img: "./Imagens/laMenor.png" },
  { nome: "Si Menor", img: "./Imagens/siMenor.png" },
  { nome: "Dó Menor", img: "./Imagens/doMenor.png" },
  { nome: "Ré Menor", img: "./Imagens/reMenor.png" },
  { nome: "Mi Menor", img: "./Imagens/miMenor.png" },
  { nome: "Fá Menor", img: "./Imagens/faMenor.png" },
  { nome: "Sol Menor", img: "./Imagens/solMenor.png" },
];

const acordesMaiores = [
  { nome: "Lá", img: "./Imagens/laMaior.png" },
  { nome: "Si", img: "./Imagens/siMaior.png" },
  { nome: "Dó", img: "./Imagens/doMaior.png" },
  { nome: "Ré", img: "./Imagens/reMaior.png" },
  { nome: "Mi", img: "./Imagens/miMaior.png" },
  { nome: "Fá", img: "./Imagens/faMaior.png" },
  { nome: "Sol", img: "./Imagens/solMaior.png" },
];

const acordesPrep = [
  { nome: "Mi com 7ª", img: "./Imagens/mi7.png" },
  { nome: "Fá sustenido com 7ª", img: "./Imagens/fa7.png" },
  { nome: "Sol com 7ª", img: "./Imagens/sol7.png" },
  { nome: "Lá com 7ª", img: "./Imagens/la7.png" },
  { nome: "Si com 7ª", img: "./Imagens/si7.png" },
  { nome: "Dó com 7ª", img: "./Imagens/do7.png" },
  { nome: "Ré com 7ª", img: "./Imagens/re7.png" },
];
// --- Fim dos Arrays ---

/**
 * Função principal para mostrar os acordes na tela.
 * Mostra o acorde principal (Maior/Menor) e seu preparatório (com 7ª)
 * usando o mesmo 'indiceAtual'.
 */
function atualizarDisplay() {
  if (!acordesAtuais) return; // Segurança, não faz nada se não 'iniciou'

  // 1. Pega o acorde PRINCIPAL (Maior ou Menor)
  const acordePrincipal = acordesAtuais[indiceAtual];

  // 2. Pega o acorde PREPARATÓRIO (sempre de acordesPrep)
  // A mágica está aqui: usamos o *mesmo índice*
  const acordePreparatorio = acordesPrep[indiceAtual];

  // 3. Calcula o índice do *próximo* par (para os rótulos "Próximo:")
  const proximoIndice = (indiceAtual + 1) % acordesAtuais.length;
  const proximoPrincipal = acordesAtuais[proximoIndice];
  const proximoPreparatorio = acordesPrep[proximoIndice];

  // --- Atualiza os elementos do Acorde Principal (Esquerda) ---
  document.getElementById("acordeAtual").textContent = acordePrincipal.nome;
  const imgPrincipal = document.getElementById("imagemAcorde");
  imgPrincipal.src = acordePrincipal.img;
  imgPrincipal.style.display = "block";
  document.getElementById("proximoAcorde").textContent =
    "Próximo: " + proximoPrincipal.nome;

  // --- Atualiza os elementos do Acorde Preparatório (Direita) ---
  document.getElementById("acordeAtual7").textContent = acordePreparatorio.nome;
  const imgPrep = document.getElementById("imagemAcorde7");
  imgPrep.src = acordePreparatorio.img;
  imgPrep.style.display = "block";
  document.getElementById("proximoAcorde7").textContent =
    "Próximo: " + proximoPreparatorio.nome;
}

/**
 * Função chamada pelo botão "Começar".
 * Define qual conjunto de acordes usar e mostra o primeiro par.
 */
function iniciar() {
  const tom = document.getElementById("tom").value;
  indiceAtual = 0; // Sempre começa do primeiro acorde

  // Verifica o valor do <select>
  if (tom === "maior") {
    acordesAtuais = acordesMaiores;
  } else {
    // "menor"
    acordesAtuais = acordesMenores;
  }

  // Habilita o botão "Próximo"
  if (proximoBtn) {
    proximoBtn.disabled = false;
  }

  // Mostra o primeiro par de acordes
  atualizarDisplay();
}

/**
 * Função chamada pelo botão "Próximo".
 * Avança o índice e atualiza o display com o próximo par.
 */
function proximoAcorde() {
  if (!acordesAtuais) return; // Segurança

  // Avança o índice e usa o módulo (%) para "dar a volta"
  indiceAtual = (indiceAtual + 1) % acordesAtuais.length;

  // Mostra o novo par de acordes
  atualizarDisplay();
}

// --- Configuração dos Botões ---

// Botão "Começar"
if (comecarBtn) {
  comecarBtn.addEventListener("click", iniciar);
}

// Botão "Próximo"
if (proximoBtn) {
  proximoBtn.addEventListener("click", proximoAcorde);
  proximoBtn.disabled = true; // Começa desabilitado
}

// Botão "Voltar"
if (backBtn) {
  backBtn.addEventListener("click", () => {
    window.location.href = "index.html";
  });
}
