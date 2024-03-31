const perguntasGato = [
    {
        pergunta: "Se você pudesse viajar, para onde iria?",
        opcoes: ["Ásia", "Irã", "Estados Unidos", "Canadá", "Índia", "Reino Unido"],
        resposta: null
    },
    {
        pergunta: "Se você virasse um pet, qual seria o seu tamanho?",
        opcoes: ["Pequeno", "Médio", "Grande"],
        resposta: null
    },
    {
        pergunta: "Escolha uma das características:",
        opcoes: ["Carinhoso", "Calmo", "Amigável", "Dócil", "Afetuoso", "Ativo", "Independente", "Brincalhão"],
        resposta: null
    },
    {
        pergunta: "Adicione mais uma característica:",
        opcoes: ["Guloso", "Moderado"],
        resposta: null
    },
    {
        pergunta: "Escolha um tamanho de pelo:",
        opcoes: ["Curto", "Longo", "Sem pelo"],
        resposta: null
    },
    {
        pergunta: "Escolha uma expectativa de vida:",
        opcoes: ["12-16 anos", "10-15 anos", "10-13 anos", "12-17 anos", "8-14 anos", "10-15 anos", "12-20 anos", "12-15 anos"],
        resposta: null
    },
    {
        pergunta: "Escolha um tipo de pelo:",
        opcoes: ["Pelo curto e denso", "Pelo curto e macio", "Pelo longo e sedoso", "Pelo longo e denso", "Sem pelo"],
        resposta: null
    },
];

const perguntasCachorro = [
    {
        pergunta: "Se você pudesse viajar, para onde iria?",
        opcoes: ["África", "Brasil", "Ásia", "Inglaterra", "França", "Sibéria", "Escócia"],
        resposta: null
    },
    {
        pergunta: "Se você virasse um pet, qual seria o seu tamanho?",
        opcoes: ["Pequeno", "Médio", "Grande"],
        resposta: null
    },
    {
        pergunta: "Escolha uma das características:",
        opcoes: ["Carinhoso", "Brincalhão", "Calmo", "Teimoso", "Inteligente", "Energético", "Amigável", "Curioso"],
        resposta: null
    },
    {
        pergunta: "Adicione mais uma característica:",
        opcoes: ["Guloso", "Atencioso"],
        resposta: null
    },
    {
        pergunta: "Escolha um tamanho de pelo:",
        opcoes: ["Curto", "Longo", "Crespo", "Variado"],
        resposta: null
    },
    {
        pergunta: "Escolha uma expectativa de vida:",
        opcoes: ["12-14 anos", "12-15 anos", "9-15 anos", "8-12 anos", "10-18 anos", "12-15 anos", "10-12 anos", "12-15 anos"],
        resposta: null
    },
    {
        pergunta: "Escolha um tipo de pelo:",
        opcoes: ["Pelo curto e liso", "Pelo curto e resistente", "Pelo encaracolado e denso", "Pelo denso e duplo", "Pelo longo e dourado","Pelo longo e denso", "Pelagem densa e curta", "Varia de acordo com a mistura"],
        resposta: null
    },
];


let perguntas;
let perguntaAtual = 0;
let respostas = [];

function exibirPergunta() {
    const urlParams = new URLSearchParams(window.location.search);
    const quizType = urlParams.get('quiz');

    if (quizType === 'cachorro') {
        perguntas = perguntasCachorro;
    } else if (quizType === 'gato') {
        perguntas = perguntasGato;
    }

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
        respostas.push(perguntas[perguntaAtual].opcoes[resposta.value]);
        console.log(respostas);
        perguntaAtual++;
        if (perguntaAtual < perguntas.length) {
            exibirPergunta();
            if (perguntaAtual === perguntas.length - 1) {
                document.querySelector('.botao-enviar').style.display = 'block';
            }
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
