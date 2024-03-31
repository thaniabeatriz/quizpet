const urlParams = new URLSearchParams(window.location.search);
const quizType = urlParams.get("quiz");
if (quizType === "cachorro") {
  document.getElementById("subtitulo_header").textContent =
    "Você escolheu o Quiz de Cachorro!";
  document.getElementById("pergunta-titulo").textContent =
    "Vamos descobrir qual cachorro você é";
} else if (quizType === "gato") {
  document.getElementById("subtitulo_header").textContent =
    "Você escolheu o Quiz de Gato!";
  document.getElementById("pergunta-titulo").textContent =
    "Vamos descobrir qual gato você é";
}
