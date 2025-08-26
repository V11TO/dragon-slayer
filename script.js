const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Em um Reino muito, muito e muito distante, havia um guerreiro(Você). Certa vez, ele reccebeu uma missão para destruir uma criatura que foi avistada em uma montanha nos arredores. Você se prepara para sair do castelo ",
        alternativas: [
            {
                texto: "Aceita a ajuda do mago Halric",
                afirmacao: "Você carrega consigo runas de proteção."
            },
            {
                texto: "Parte sozinho",
                afirmacao: "Sua lâmina brilha com confiança inabalável."
            }
        ]
    },
    {
        enunciado: "Na estrada, você encontra uma bifurcação.",
        alternativas: [
            {
                texto: "Segue pelo desfiladeiro",
                afirmacao: "Você ganha tempo, mas sente os olhos de inimigos ocultos."
            },
            {
                texto: "Vai pela floresta",
                afirmacao: "Você conquista aliados que prometem lutar ao seu lado."
            }
        ]
    },
    {
        enunciado: "Ao chegar a um vilarejo destruído pelo fogo, vê sobreviventes pedindo ajuda.",
        alternativas: [
            {
                texto: "Socorre os aldeões",
                afirmacao: "Corações agradecidos confiam em você."
            },
            {
                texto: "Ignora os pedidos",
                afirmacao: "Você avança, guiado apenas pela sede de caçada."
            }
        ]
    },
    {
        enunciado: "Na montanha do dragão, a tempestade ruge.",
        alternativas: [
            {
                texto: "Espera a tormenta passar",
                afirmacao: "Sua mente se fortalece com paciência estratégica."
            },
            {
                texto: "Escala durante a tempestade",
                afirmacao: "Sua coragem o impulsiona, apesar do risco mortal."
            }
        ]
    },
    {
        enunciado: "Dentro do covil, o dragão adormece sobre tesouros.",
        alternativas: [
            {
                texto: "Tenta selá-lo com magia",
                afirmacao: "Você escolhe o caminho da sabedoria e do equilíbrio."
            },
            {
                texto: "Ataca de frente",
                afirmacao: "Você escolhe o caminho da fúria e da glória sangrenta."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Então...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();