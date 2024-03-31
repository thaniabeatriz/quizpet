// Definição das perguntas para cada tipo de quiz
const perguntasCachorro = [
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

const perguntasGato = [
    {
        pergunta: "Qual é a sua origem de gato?",
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
let quizSelecionado = null;

function exibirPergunta() {
    const perguntaElement = document.getElementById("pergunta");
    const opcoesElement = document.getElementById("opcoes");

    let perguntas;
    if (quizSelecionado === 'gato') {
        perguntas = perguntasGato;
    } else if (quizSelecionado === 'cachorro') {
        perguntas = perguntasCachorro;
    }

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
        const perguntas = quizSelecionado === 'gato' ? perguntasGato : perguntasCachorro;
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

// Função para selecionar o quiz
function selecionarQuiz(tipo) {
    quizSelecionado = tipo;
    perguntaAtual = 0;
    exibirPergunta();
}

document.addEventListener('DOMContentLoaded', function() {
    // Adicionar eventos de clique nos cards para selecionar o quiz
    document.getElementById('quiz-gato').addEventListener('click', function() {
        selecionarQuiz('gato');
    });

    document.getElementById('quiz-cachorro').addEventListener('click', function() {
        selecionarQuiz('cachorro');
    });
});
