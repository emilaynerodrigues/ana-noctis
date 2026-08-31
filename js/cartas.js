const cartas = [
  /*
  {
    titulo: "Carta 1 - Sou eu",
    texto: `Ana,

"Até que todas as estrelas se apaguem. Até que o tempo pare. Eu sou seu."

Tudo continua sendo sobre -você-. Você ainda tem -tudo- de mim.

Meu desejo ainda é: "Ela, ela e ela".

Como é fácil pra você? Estou enlouquecendo de tanta saudades de você.

Será que tudo isso já pode acabar? Já não foi o suficiente?

Eu amo você.

Sinto sua falta.`,
  },

  {
    titulo: "Carta 2 - É a Aelin",
    texto: `Ana, Aelin realmente disse isso?

    "Eu te amo. Além das estrelas, além do tempo, além da própria vida. Eu pertenço a você, e você pertence a mim. Não ha nada neste mundo, ou em qualquer outro, que possa mudar isso."

    Me indentifico um pouco com ela, porque tudo em mim é seu.

    Que mundo louco, não é?

    Saudades.`,
  },

  {
    titulo: "Carta 3 - É o Rowan",
    texto: `Ana, o Rowan é um maluco!

    "Eu a reivindico. Aelin Galathynius. Como minha parceira, minha rainha e minha igual. Se eu tiver que quebrar o mundo para mantê-la a meu lado, eu o farei. Não há vida para mim sem você."

    A paixão tem esse poder de deixar tudo mais intenso. Por isso, minha vida está do avesso sem você.      

    Saudades!`,
  },

  {
    titulo: "Carta 4 - Sou eu",
    texto: `Ana, agora sou eu:

      Os dias são tão lentos sem você. Parece que ando acumulando histórias sem sentido...
  
      Todos os dias sinto sua falta e espero que tudo seja diferente no fim de cada um deles.
  
      Que mundo louco, não é?
  
     A verdade é que estou enlouquecendo de saudades.
  
    Seu cheiro, seu beijo, sua voz...`,
  },

  {
    titulo: "Carta 5 - É a Aelin",
    texto: `Ana, a Aelin tem seus momentos, não é? Agora consigo entender...
  
    "Eu te encontrei. No escuro, na tempestade, na dor mais profunda... Eu te encontrei e você me encontrou. Eu sou sua, Rowan. Sempre fui, desde o momento em que nossas almas se reconheceram."
  
      Será loucura pensar que estavámos destinadas a se achar em meio ao caos da vida?
  
     Acredito que não. Eu já sonhava com você e seus olhos.
  
     Tudo mudou, mas por que não ficar? 
  
     Sinto sua falta.`,
  },

  {
    titulo: "Carta 6 - É a Yrene",
    texto: `Ana, você nunca me falou sobre a Yrene, mas ela falou algo que me chamou atenção:
  
    "Onde você for, meu coração vai junto. Não há distância ou guerra que possa diminuir o que sinto por você."
  
     Você realmente anda por aí carregando algo meu.
  
    Saudades.`,
  },

  {
    titulo: "Carta 7 - Elide",
    texto: `Ana, é um tanto quanto:
  
    "Eu não me importo com o seu passado ou com o que os outros dizem. Eu amo você, Lorcan, exatamente como voce é. E vou escolher você todas as vezes."
  
    Adorava ouvir você falar e rir das suas histórias passadas. E sinto ódio por cada um que te machucou.
  
     As vezes fico pensando...
  
     Eu continuo te escolhendo e não quero ser só uma passagem.
  
      Estou com saudades.`,
  },

  {
    titulo: "Carta 8 - É a Celaena",
    texto: `Ana, ainda é:
  
  "Eu sempre vou escolher você. Mesmo quando o mundo inteiro estiver rindo ou tentando nos separar meu coração é seu."
  
  Eu escolho você.
  
  Mesmo quando a distância pesa.
  Mesmo quando seria mais fácil simplesmente deixar você ir, eu não consigo...
  
  Meu coração ainda chama você.
  
  Sinto sua falta.`,
  },

  {
    titulo: "Carta 9 - É a Lysandra",
    texto: `Ana, sempre foi:
  
  "Eu mudo de pele todos os dias e posso ser quem eu quiser, mas com você, Aedion... com você eu finalmente posso ser apenas eu mesma. E essa versão de mim te ama."

  Talvez seja isso que eu mais gostava quando estava com você.

  Eu não precisava ser nada além de mim.

  E espero que, em algum lugar, você ainda se lembre dessa versão minha.

  Saudades.`,
  },

  {
    titulo: "Carta 10 - É o Dorian",
    texto: `Ana,

  "Você não é um monstro, Bruxa. E mesmo se fosse.. eu ainda assim não conseguiria afastar meus olhos de você. Você é a tempestade mais bonita que já vi."

  Eu nunca enxerguei você pelas coisas que deram errado.

  Eu enxerguei você. Eu sinto você.

  E, mesmo no meio de toda a confusão, você é uma das coisas mais bonitas que encontrei.

  Saudades.`,
  },

  {
    titulo: "Carta 11 - É o Chaol",
    texto: `Ana,

  "Eu passei tanto tempo me odiando, Yrene, odiando o que me tornei. Mas quando olho para você, só consigo ver esperança. Você é a minha luz no meio da escuridão."

  Você também foi isso para mim.

  Uma luz em uma época em que eu nem sabia direito que estava no escuro.

  Talvez seja por isso seja tão difícil...

  Eu não vou te esquecer e preciso de você perto.

  Você é meu segundo girassol, lembra? 🌻

  ~~ clique no girassol ~~ `,

    linkGirassol: "https://emilaynerodrigues.github.io/girassois-para-ana/",
  },

  {
    titulo: "Carta 12 - É o Lorcan",
    texto: `Ana,

  "Eu vivi por séculos no escuro, servindo a obrigações e guerras que não eram minhas Mas por você, Elide... por você eu queimaria ○ mundo inteiro só para garantir que estivesse a salvo."

  Eu entendo um pouco.

  Porque, quando se trata de você, eu vou onde for preciso.

  Saudades.`,
  },

  {
    titulo: "Carta 13 - Sou eu",
    texto: `Ana, Vênus é sobre você!

     "I thought I'd never find you
      I convinced myself that I would never find you
     When suddendly I saw you"

  No meio de tanta gente, tantos caminhos e tantas coisas que poderiam ter acontecido, eu encontrei você.

  Talvez seja isso o mais louco disso tudo.

  O universo é enorme. A vida é enorme. Existem milhares de caminhos que poderiam ter nos levado para lugares completamente diferentes.

  Mas, por algum motivo, nossos caminhos se encontraram.

  Tem sido difícil fingir que você não me atravessou.

  Sinto sua falta.`,
  },

  {
    titulo: "Carta X - Estou com dor",
    texto: `Ana, sinto que escrevo cartas a um ser divino.

Tudo em mim mudou desde que você disse que estava tão apaixonada por mim como eu por você. 

Isso me fez lembrar de você sussurrando atrás de mim sobre alianças depois do boliche (eu ouvi).

Eu realmente sou exagerada e já tinha escolhido qual seria. 

Você vive nos meus pensamentos e me recuso a pensar que você não lembre de nada.

Continua sendo você. 

Saudades,`,
  },
  */
  {
    titulo: "Carta D - Despedida",
    texto: `Ana, 

Somente eu e você sabemos o que foi dito, compartilhado e sentido.

Não me resumo ao que foi dito e você sabe.

Espero que fique bem e seja feliz em suas escolhas.

Você sempre terá pra onde voltar.

Existe uma lógica para a distribuição das cartas, espero que essa chegue a você.`,
  },
];
