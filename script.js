const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você é Kael Drakar, um guerreiro de passado sombrio, conhecido por caçar as criaturas mais perigosas dos céus. Um dragão ancestral conhecido como Vharzagul, o Devorador de Céus, despertou nas Montanhas Escaldantes. O rei implora sua ajuda.Nas muralhas do castelo, o velho mago Halric se aproxima de você.oferecendo encantos antigos.",
        alternativas: [
            "Aceitar os feitiços de proteção, mesmo que isso signifique dever um favor ao mago.",
            "Recusar a ajuda, acreditando que apenas sua espada e coragem são suficientes.",
        ]
    },
    {
        enunciado: "Você cavalga pelas terras selvagens. Ao cair da tarde, chega a uma encruzilhada. À esquerda, o Desfiladeiro dos Ecos, onde muitos guerreiros desapareceram. À direita, a Floresta dos Cantos, lar de elfos caçadores.",
        alternativas: [
            "Arriscar o desfiladeiro, para chegar mais rápido à montanha.",
            "Seguir pela floresta, talvez encontrando aliados... ou armadilhas.",
        ]
    },
    {
        enunciado: "Em meio às colinas, você encontra Telmere em ruínas — homens queimados, crianças chorando. O dragão passou por ali. Um grupo de sobreviventes te suplica por ajuda.",
        alternativas: [
            "Proteger os sobreviventes e levá-los a um abrigo.",
            "Ignorar os pedidos e seguir o rastro quente do dragão.",
        ]
    },
    {
        enunciado: "Você alcança a base da Montanha Escaldante. A trilha está coberta por cinzas e rochas instáveis. Ruge o trovão — ou seria o dragão?",
        alternativas: [
            "Esperar a neblina baixar e recuperar energia.",
            "Subir durante a tormenta, aproveitando que o dragão pode estar distraído.",
        ]
    },
    {
        enunciado: "Você entra em uma câmara colossal esculpida por fogo e lava. Vharzagul dorme sobre uma pilha de ossos e ouro antigo. Ele está vulnerável… mas há runas seladoras gravadas em pilares ao redor.",
        alternativas: [
           "Usar as runas e magia para selar o dragão eternamente.",
            "Despertar a fera e enfrentá-la em um combate direto e mortal.",
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();
