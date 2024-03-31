const perguntas = [
    {
        pergunta: "Qual é a sua origem de cachorro?",
        opcoes: ["Asiática", "Inglaterra", "Exemplo"],
        resposta: null
    },
    {
        pergunta: "Qual é o tamanho ideal para você?",
        opcoes: ["Pequeno", "Médio", "Grande"],
        resposta: null
    },
];

let perguntaAtual = 0;

function exibirPergunta() {
    const perguntaElement = document.getElementById("pergunta");
    const opcoesElement = document.getElementById("opcoes");

    perguntaElement.textContent = perguntas[perguntaAtual].pergunta;
    opcoesElement.innerHTML = "";

    perguntas[perguntaAtual].opcoes.forEach((opcao, index) => {
        const label = document.createElement("label");
        label.innerHTML = `
            <input type="radio" name="resposta" value="${index}" required>
            ${opcao}
        `;
        opcoesElement.appendChild(label);
    });
}

function proximaPergunta() {
    const resposta = document.querySelector('input[name="resposta"]:checked');

    if (resposta) {
        perguntas[perguntaAtual].resposta = resposta.value;
        perguntaAtual++;
        if (perguntaAtual < perguntas.length) {
            exibirPergunta();
        } else {
            alert("Quiz finalizado!");
        }
    } else {
        alert("Selecione uma opção antes de avançar.");
    }
}

function verificarRespostas() {
}

exibirPergunta();
