const cartas = [
  /*{
    titulo: "Carta 1 - Estrelas",
    texto: `Ana,

"Até que todas as estrelas se apaguem. Até que o tempo pare. Eu sou seu."

Tudo continua sendo sobre -você-. Você ainda tem -tudo- de mim.

Meu desejo ainda é: "Ela, ela e ela".

Sinto sua falta.`,
  },

  {
    titulo: "Carta 2 - É a Aelin",
    texto: `Ana,

    "Eu te amo. Além das estrelas, além do tempo, além da própria vida. Eu pertenço a você, e você pertence a mim. Não há nada neste mundo, ou em qualquer outro, que possa mudar isso."

    Me identifico um pouco com ela, porque tudo em mim é seu.

    Que mundo louco, não é?

    Saudades.`,
  },

  {
    titulo: "Carta 3 - É o Rowan",
    texto: `Ana, o Rowan é maluco.

    "Eu a reivindico. Aelin Galathynius. Como minha parceira, minha rainha e minha igual. Se eu tiver que quebrar o mundo para mantê-la a meu lado, eu o farei. Não há vida para mim sem você."

    A paixão tem esse poder de deixar tudo mais intenso. Por isso, minha vida está do avesso sem você.      

    Saudades!`,
  },

  {
    titulo: "Carta 4 - É a Aelin",
    texto: `Ana,
  
    "Eu te encontrei. No escuro, na tempestade, na dor mais profunda... Eu te encontrei e você me encontrou. Eu sou sua, Rowan. Sempre fui, desde o momento em que nossas almas se reconheceram."
  
      Será loucura pensar que estávamos destinadas a nos encontrar em meio ao caos da vida?
  
      Acredito que não. Eu já sonhava com você.

      Você é meu sonho, lembra?
  
      Sinto sua falta.`,
  },

  {
    titulo: "Carta 5 - É a Yrene",
    texto: `Ana,
  
    "Onde você for, meu coração vai junto. Não há distância ou guerra que possa diminuir o que sinto por você."
  
    Você realmente anda por aí carregando algo meu.
  
    Saudades.`,
  },

  {
    titulo: "Carta 6 - É a Celaena",
    texto: `Ana, ainda é:
  
  "Eu sempre vou escolher você. Mesmo quando o mundo inteiro estiver rindo ou tentando nos separar, meu coração é seu."
  
  Eu ainda escolho você.
  
  Sinto sua falta.`,
  },

  {
    titulo: "Carta 7 - É o Chaol e o Girassol",
    texto: `Ana,

  "Eu passei tanto tempo me odiando, Yrene, odiando o que me tornei. Mas quando olho para você, só consigo ver esperança. Você é a minha luz no meio da escuridão."

  Você foi a luz em uma época em que eu nem sabia direito que estava no escuro.

  Talvez seja por isso que seja tão difícil...

  Eu não vou te esquecer e preciso de você perto.

  Você é meu segundo girassol, lembra? 🌻

  ~~ clique no girassol ~~ `,

    linkGirassol:
      "https://emilaynerodrigues.github.io/girassois-para-ana/?origem=carta11",
  },

  {
    titulo: "Carta 8 - Vênus",
    texto: `Ana, Vênus é sobre você.

     "I thought I'd never find you
      I convinced myself that I would never find you
      When suddenly I saw you"

  No meio de tanta gente, eu encontrei você.

  O universo é enorme. A vida é enorme. Poderíamos ter ido para lugares completamente diferentes.

  Mas, por algum motivo, nos encontramos.

  Tem sido difícil fingir que você não me atravessou.
  
  Sinto sua falta.`,
  },

  {
    titulo: "Carta 9 - Ana Noctis",
    texto: `Ana,

Ana Noctis significa “A Noite de Ana”.

Eu fiz esse site porque não sabia mais onde colocar tudo isso que sinto. Então coloquei aqui.

Cada estrela, cada carta e cada detalhe foi feito pensando em você. Algumas coisas são lembranças, grande parte são referências, mas nada está aqui por acaso.

É sobre você e pra você.

É a sua noite. 🌙

    `,
  },

  {
    titulo: "Carta 10 - Ponte e luz",
    texto: `Ana,

"Seja ponte, seja luz. Quando o ferro derreter, quando as flores brotarem de campos de sangue... Que a terra seja testemunha e volte para casa."

Que um dia tudo encontre seu lugar.

Estivemos aqui aprendendo ser.
`,
  },

  {
    titulo: "Carta 11 - Você",
    texto: `Ana,

"Você também me faz querer viver, Aelin Galathynius. Não existir, viver.

Passei séculos perambulando o mundo de impérios a reinos e desertos, nunca me estabeleci, jamais parei... nem por um momento.

Estava sempre olhando para o horizonte, sempre imaginando o que esperava do outro lado do oceano seguinte, sobre a montanha seguinte.

Mas acho que o tempo todo, durante todos aqueles séculos, só estava procurando por você."`,
  },

  {
    titulo: "Carta 12 - Rowan",
    texto: `Ana,

"Eu amo você. Não há limite para o que posso dar, não preciso de tempo. Mesmo quando este mundo for um sussurro de terra esquecido em meio às estrelas, amarei você."

É isso. 

Não existe nada além disso.`,
  },

  {
    titulo: "Carta 13 - É o Rowan",
    texto: `Ana,

"Fiquei pensando em como você poderia jamais saber que eu senti sua falta com apenas um oceano entre nós. Mas se fosse a morte nos separando... Eu encontraria você. Não me importa quantas regras quebraria. Ainda que eu mesmo precisasse conseguir as três chaves para então abrir um portão, eu a encontraria de novo. Sempre."

Não importa o que aconteça, eu ainda tento te encontrar.

`,
  },

  {
    titulo: "Carta 14 - Aelin e as estrelas",
    texto: `Ana,

"Ainda que a noite seja escura, as estrelas continuam lá."

Apesar da distância, algumas coisas não mudam. Você continua lá, e eu continuo lembrando de você.

Saudades.`,
  },

  {
    titulo: "Carta 15 - É a Elena",
    texto: `Ana,

"Possa o seu coração ser o seu guia e a sua coragem a sua força."

Nossas conversas me mostraram que você sempre soube ser forte e seguir o seu próprio caminho.

Parte da admiração que sinto por você vem disso.

Sinto sua falta.`,
  },

  {
    titulo: "Carta 16 - É o Rowan",
    texto: `Ana,

"Eu lhe dei meu coração. Não sobrou nada para entregar a mais ninguém."

É exatamente assim. Você ficou com tudo.

Saudades.`,
  },

  {
    titulo: "Carta 17 - É o Cassian",
    texto: `Ana,

"Não tenho nenhum arrependimento neste mundo. Mas se eu tivesse... seria não ter tido tempo suficiente com você."

Sinto sua falta.`,
  },

  {
    titulo: "Carta 18 - É o Rhysand",
    texto: `Ana,

"Então, descobri o seu nome. Ouvir você pronunciá-lo foi como a resposta para uma pergunta que eu fazia havia quinhentos anos. Foi como se o próprio mundo tido sido reajustado por causa disso. Como se eu não tivesse passado os últimos quinhentos anos vivendo, mas simplesmente esperando."

Não foram quinhetos anos, foram duas semanas.

Uma semana pra descobrir seu nome e outra pra criar coragem pra falar com você (e se atropelar nas palavras).

Me deram a oportunidade perfeita.
`,
  },

  {
    titulo: "O segredo do céu",
    texto: `Ana,

Existe um segredo escondido no céu.

~~ Dica: clique em uma estrela! ~~`,
  },*/
{
    titulo: "",
    texto: `Ana,

Obrigada.`,
  },
  
];
