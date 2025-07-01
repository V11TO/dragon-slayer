const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas= document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas =[
    {
        enunciado: Você é Kael Drakar, um guerreiro de passado sombrio, conhecido por caçar as criaturas mais perigosas dos céus. Um dragão ancestral conhecido como Vharzagul, o Devorador de Céus, despertou nas Montanhas Escaldantes. O rei implora sua ajuda — mas esta jornada exigirá mais do que força: exigirá decisões.Nas muralhas do castelo, o velho mago Halric se aproxima de você. Ele lhe oferece feitiços de proteção.
alternativas:[
     "Aceitar os feitiços de proteção, mesmo que isso signifique dever um favor ao mago.",
     "Recusar a ajuda, acreditando que apenas sua espada e coragem são suficientes.",
             ]
    },
    {
        enunciado: Na vila de Eldoria, um velho mensageiro chega ofegante ao portão principal. Ele traz notícias terríveis: um dragão vermelho foi visto nos céus das Montanhas Cinzentas, e aldeias vizinhas estão sendo destruídas. O conselho escolhe você, Thalor, um renomado caçador de dragões, para a missão.
Você parte ao amanhecer, com sua armadura e lança encantada.
alternativas:[
     "Seguir pela estrada principal, mais rápida, mas exposta a emboscadas.",
     "Cortar caminho pela floresta escura, mais lenta, mas mais segura.",

    }
]