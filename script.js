document.addEventListener("DOMContentLoaded", () => {
  //FUNÇÃO PARA ESCREVER FRASE

  const frases = ["Até que a escuridão nos reivindique!"];

  const texto = document.getElementById("texto");

  let frase = 0;
  let letra = 0;
  let textoAtual = "";
  let escrevendo = false;

  function escrever() {
    // Impede que a função seja iniciada duas vezes
    if (escrevendo) return;

    escrevendo = true;

    function digitar() {
      if (letra < frases[frase].length) {
        textoAtual += frases[frase][letra];
        texto.textContent = textoAtual;

        letra++;

        setTimeout(digitar, 70);
      } else {
        // Se chegou na última frase, para aqui
        if (frase === frases.length - 1) {
          escrevendo = false;
          return;
        }

        setTimeout(() => {
          textoAtual = "";
          texto.textContent = "";

          frase++;
          letra = 0;

          digitar();
        }, 3000);
      }
    }

    digitar();
  }
  // =====================================================
  // DESENHAR UM PATH
  // =====================================================

  function desenharPath(elemento, duracao = 1000) {
    return new Promise((resolve) => {
      if (!elemento) {
        resolve();
        return;
      }

      const comprimento = elemento.getTotalLength();

      elemento.style.strokeDasharray = comprimento;
      elemento.style.strokeDashoffset = comprimento;
      elemento.style.opacity = "0";

      elemento.getBoundingClientRect();

      elemento.style.transition = `stroke-dashoffset ${duracao}ms ease`;

      elemento.style.opacity = "1";

      elemento.getBoundingClientRect();

      elemento.style.strokeDashoffset = "0";

      setTimeout(resolve, duracao);
    });
  }

  // =====================================================
  // DESENHAR GRUPO
  // UM PATH POR VEZ
  // =====================================================

  async function desenharGrupo(id, duracao = 800) {
    const grupo = document.getElementById(id);

    if (!grupo) {
      console.warn(`Grupo não encontrado: ${id}`);
      return;
    }

    const paths = grupo.querySelectorAll("path");

    for (const path of paths) {
      await desenharPath(path, duracao);
    }
  }

  // =====================================================
  // DESENHAR GRUPO INTEIRO JUNTO
  // =====================================================

  async function desenharGrupoJunto(id, duracao = 800) {
    const grupo = document.getElementById(id);

    if (!grupo) {
      console.warn(`Grupo não encontrado: ${id}`);
      return;
    }

    const paths = [...grupo.querySelectorAll("path")];

    await Promise.all(paths.map((path) => desenharPath(path, duracao)));
  }

  // =====================================================
  // CASTELO
  // =====================================================

  async function desenharCastelo() {
    const estrutura = document.getElementById("estrutura-principal");

    const janelas = [
      "janela1",
      "janela2",
      "janela3",
      "janela4",
      "janela5",
      "janela6",
      "janela7",
      "janela8",
      "janela9",
      "janela10",
      "janela11",
      "janela12",
      "janela13",
      "janela14",
      "janela15",
      "janela16",
    ];

    // =================================================
    // DURAÇÕES
    // =================================================

    const duracaoEstrutura = 15000;
    const duracaoJanelas = 1200;

    // =================================================
    // PREPARAR ESTRUTURA
    // =================================================

    if (estrutura) {
      const comprimento = estrutura.getTotalLength();

      estrutura.style.strokeDasharray = comprimento;

      estrutura.style.strokeDashoffset = comprimento;

      estrutura.style.opacity = "1";
    }

    // =================================================
    // PREPARAR JANELAS
    // =================================================

    const elementosJanelas = [];

    for (const id of janelas) {
      const janela = document.getElementById(id);

      if (!janela) continue;

      const comprimento = janela.getTotalLength();

      janela.style.strokeDasharray = comprimento;

      janela.style.strokeDashoffset = comprimento;

      janela.style.opacity = "1";

      elementosJanelas.push(janela);
    }

    // =================================================
    // FORÇAR ESTADO INICIAL
    // =================================================

    if (estrutura) {
      estrutura.getBoundingClientRect();
    }

    elementosJanelas.forEach((janela) => {
      janela.getBoundingClientRect();
    });

    // =================================================
    // COMEÇAR ESTRUTURA
    // =================================================

    if (estrutura) {
      estrutura.style.transition = `stroke-dashoffset ${duracaoEstrutura}ms linear`;

      estrutura.style.strokeDashoffset = "0";
    }

    // =================================================
    // COMEÇAR JANELAS
    // =================================================

    elementosJanelas.forEach((janela) => {
      janela.style.transition = `stroke-dashoffset ${duracaoJanelas}ms linear`;

      janela.style.strokeDashoffset = "0";
    });

    // =================================================
    // ESPERAR ESTRUTURA
    // =================================================

    await new Promise((resolve) => {
      setTimeout(resolve, duracaoEstrutura);
    });
  }

  // =====================================================
  // ESPADA
  // =====================================================

  async function desenharEspada() {
    const partes = [
      document.getElementById("parte-preta"),

      document.getElementById("pedra-vermelha"),

      document.getElementById("parte-dourada"),

      ...document.querySelectorAll("#lamina path"),
    ].filter(Boolean);

    await Promise.all(partes.map((parte) => desenharPath(parte, 2500)));
  }

  // =====================================================
  // REDESENHAR UM PATH EM BRANCO
  // =====================================================

  function redesenharPathEmBranco(path, duracao = 800) {
    return new Promise((resolve) => {
      const comprimento = path.getTotalLength();

      // guarda a cor original
      const strokeOriginal = getComputedStyle(path).stroke;

      // cria uma cópia exatamente por cima
      const clone = path.cloneNode(true);

      clone.removeAttribute("id");

      clone.style.stroke = "#FFFFFF";
      clone.style.fill = "none";
      clone.style.opacity = "1";

      clone.style.strokeDasharray = comprimento;
      clone.style.strokeDashoffset = comprimento;

      path.parentNode.appendChild(clone);

      clone.getBoundingClientRect();

      clone.style.transition = `
            stroke-dashoffset ${duracao}ms linear
        `;

      path.style.transition = `
            stroke ${duracao}ms linear
        `;

      requestAnimationFrame(() => {
        clone.style.strokeDashoffset = "0";
        path.style.stroke = "rgba(255,255,255,0)";
      });

      setTimeout(() => {
        // congela o estado final antes de remover o clone
        path.style.transition = "none";
        path.style.stroke = "#FFFFFF";

        clone.remove();

        resolve();
      }, duracao);
    });
  }

  // =====================================================
  // REDESENHAR ESPADA NA COR AZUL ESCURA
  // =====================================================

  async function desenharEspadaNoturna() {
    const espada = document.getElementById("espada");

    const partes = [
      document.getElementById("parte-preta"),
      document.getElementById("pedra-vermelha"),
      document.getElementById("parte-dourada"),
      ...espada.querySelectorAll("#lamina path"),
    ].filter(Boolean);

    // deixa só a espada invisível
    espada.style.opacity = "1";

    partes.forEach((parte) => {
      const comprimento = parte.getTotalLength();

      parte.style.opacity = "1";
      parte.style.stroke = "#FFFFFF";
      parte.style.fill = "none";

      parte.style.transition = "none";
      parte.style.strokeDasharray = "";
      parte.style.strokeDashoffset = "";

      parte.getBoundingClientRect();

      parte.style.strokeDasharray = comprimento;
      parte.style.strokeDashoffset = comprimento;
    });

    espada.getBoundingClientRect();

    partes.forEach((parte) => {
      parte.style.transition = "stroke-dashoffset 7000ms ease";
      parte.style.strokeDashoffset = "0";
    });

    await new Promise((r) => setTimeout(r, 7000));

    // preenche sem redesenhar novamente
    partes.forEach((parte) => {
      parte.style.transition = "fill 2500ms ease";
      parte.style.fill = "#1E2C4F";
      parte.style.stroke = "#FFFFFF";
    });
  }
  // =====================================================
  // REDESENHAR TODO O CENÁRIO EM BRANCO
  // EXCETO A ESPADA
  // =====================================================

  async function redesenharTudoEmBranco() {
    const paths = [...document.querySelectorAll("#art path")].filter(
      (path) => !path.closest("#espada"),
    );

    await Promise.all(paths.map((path) => redesenharPathEmBranco(path, 1800)));
  }
  // =====================================================
  // PREPARAR ESTRELAS PARA A NOITE
  // =====================================================

  function prepararModoNoturno() {
    // douradas continuam douradas
    document.querySelectorAll("#estrela-dourada path").forEach((e) => {
      e.style.stroke = "#DBAF50";
      e.style.fill = "none";
    });

    // pretas continuam pretas.
    // Elas só ficarão brancas durante o redesenho.
    document.querySelectorAll("#estrela-preta path").forEach((e) => {
      e.style.stroke = "#010101";
      e.style.fill = "none";
    });
  }

  // =====================================================
  // ANOITECER
  //
  // O FUNDO SURGE POR TRÁS DO DESENHO
  // =====================================================
  function iniciarAnoitecer() {
    return new Promise((resolve) => {
      const fundo = document.getElementById("night-background");
      const background = document.getElementById("background");

      // começa já com um pequeno halo
      fundo.style.opacity = "0";
      fundo.style.clipPath = "circle(10% at 50% 50%)";

      fundo.getBoundingClientRect();

      fundo.style.transition = `
      opacity 180ms linear,
      clip-path 700ms cubic-bezier(.05,.85,.25,1)
    `;

      requestAnimationFrame(() => {
        fundo.style.opacity = "1";
        fundo.style.clipPath = "circle(170% at 50% 50%)";
      });

      setTimeout(() => {
        background.style.fill = "transparent";
        resolve();
      }, 700);
    });
  }
  // =====================================================
  // BRILHO SUAVE DA ESPADA
  // =====================================================

  function criarBrilhoEspada() {
    const espada = document.getElementById("espada");

    if (!espada) return;

    espada.style.filter = "drop-shadow(0 0 0px rgba(255, 215, 100, 0))";

    espada.getBoundingClientRect();

    espada.style.transition = "filter 2500ms ease";

    espada.style.filter = `
      drop-shadow(0 0 18px rgba(255, 215, 100, 0.45))
      drop-shadow(0 0 30px rgba(255, 215, 100, 0.25))
      `;
  }

  // =====================================================
  // ATIVAR EFEITOS DA NOITE
  // =====================================================

  function ativarEfeitosDaNoite() {
    const art = document.getElementById("art");

    if (!art) return;

    // Ativa todos os efeitos definidos no CSS
    art.classList.add("night-mode");
  }

  // =====================================================
  // PREENCHER LUA
  // =====================================================

  function preencherLua() {
    const lua = document.querySelector("#lua path");

    if (!lua) return;

    lua.style.transition = `
      fill 1800ms ease,
      stroke 1800ms ease,
      filter 1800ms ease
    `;

    lua.style.fill = "#F7EEDB";
    lua.style.stroke = "#FFFFFF";

    lua.style.filter = `
      drop-shadow(0 0 4px rgba(255,255,255,0.35))
      drop-shadow(0 0 10px rgba(255,255,255,0.18))
    `;
  }

  // =====================================================
  // PREENCHER JANELAS
  // =====================================================

  function preencherJanelas() {
    const janelas = document.querySelectorAll("#castelo-janelas path");

    janelas.forEach((janela, index) => {
      setTimeout(() => {
        janela.style.transition = `
          fill 800ms ease,
          stroke 800ms ease,
          filter 800ms ease
        `;

        janela.style.fill = "#DBAF50";
        janela.style.stroke = "#DBAF50";

        janela.style.filter = `
          drop-shadow(0 0 3px rgba(219,175,80,0.45))
          drop-shadow(0 0 8px rgba(219,175,80,0.25))
        `;
      }, index * 70);
    });
  }

  // =====================================================
  // PREENCHER ESTRELAS DOURADAS
  // =====================================================

  function preencherEstrelasDouradas() {
    const estrelas = document.querySelectorAll("#estrela-dourada path");

    estrelas.forEach((estrela) => {
      estrela.style.fill = "#DBAF50";
      estrela.style.stroke = "#DBAF50";

      estrela.style.filter = `
        drop-shadow(0 0 3px rgba(219,175,80,0.55))
        drop-shadow(0 0 8px rgba(219,175,80,0.30))
      `;
    });
  }

  // =====================================================
  // BRILHO MAIS FORTE NA BASE DA ESPADA
  // =====================================================

  function aumentarBrilhoBaseEspada() {
    const espada = document.getElementById("espada");

    if (!espada) return;

    espada.style.transition = "filter 3000ms ease";

    espada.style.filter = `
      drop-shadow(0 0 12px rgba(255,215,100,0.45))
      drop-shadow(0 0 25px rgba(255,215,100,0.32))
      drop-shadow(0 0 45px rgba(255,215,100,0.20))
      drop-shadow(0 8px 35px rgba(255,215,100,0.18))
    `;
  }

  //CARTAAAAAAAA
  // =====================================================

  let notificacaoEnviada = false;

  function abrirCarta() {
    const overlay = document.getElementById("letter-overlay");
    const textoCarta = document.getElementById("letter-text");
    const assinatura = document.getElementById("letter-signature");

    if (!overlay || !textoCarta || !assinatura) return;

    // =====================================================
    // ENVIAR NOTIFICAÇÃO APENAS UMA VEZ
    // =====================================================

    if (!notificacaoEnviada) {
      notificacaoEnviada = true;

      emailjs
        .send("service_04hrmhh", "template_gd1y7po", {
          name: "Ana",
          email: "",
          message: "A Ana acessou o site e abriu a carta.",
        })
        .then(() => {
          console.log("📨 Notificação enviada!");
        })
        .catch((error) => {
          console.error("❌ Erro ao enviar notificação:", error);

          // Permite tentar novamente se o envio realmente falhar
          notificacaoEnviada = false;
        });
    }

    // =====================================================
    // ABRIR CARTA
    // =====================================================

    overlay.classList.add("open");

    textoCarta.textContent = "";

    assinatura.classList.remove("show");

    const carta = `Ana, agora sou eu:

Eu amo você.

Sou completamente apaixonada por você e soube disso desde a primeira que te beijei, mas você não permitiu que fosse dito em outra circunstância e mais uma vez resolveu me bloquear.

É o que é, é o que sinto. 

Desde o início, sinto algo em mim gritando por você e eu já tive tantos avisos. Como você espera que eu não te ame? Se até mesmo longe o sentimento não para de crescer. 

Tudo que você tem escolhido ser agora não te resume, mas até nesses momentos eu te escolho.

E tem sido horrível não ter você e saber que você não me escolhe. 

Por que te custa acreditar? Você está me apagando.

Eu entendo, eu sei o que acontece, mas por que você não se permite ser amada?

Você não é pouco, você não é nada. Você continua sendo meu sonho. Tudo o que eu disse foi verdadeiro e eu sei que você ainda sente algo.

O que eu posso fazer? Não é impossível. 

Não posso desistir de você.

Por favor, permita que a gente aconteça, no amanhã, aos poucos, devagar, no simples, no pouco, no tudo.

Eu amo você.`;

    let letra = 0;
    let textoAtual = "";

    function escreverCarta() {
      if (letra < carta.length) {
        textoAtual += carta[letra];
        textoCarta.textContent = textoAtual;

        letra++;

        setTimeout(escreverCarta, 35);
      } else {
        setTimeout(() => {
          assinatura.classList.add("show");
        }, 600);
      }
    }

    escreverCarta();
  }

  function fecharCarta() {
    const overlay = document.getElementById("letter-overlay");

    if (!overlay) return;

    overlay.classList.remove("open");
  }
  const botaoCarta = document.getElementById("open-letter");
  const botaoFecharCarta = document.getElementById("close-letter");
  const overlayCarta = document.getElementById("letter-overlay");

  if (botaoCarta) {
    botaoCarta.addEventListener("click", abrirCarta);
  }

  if (botaoFecharCarta) {
    botaoFecharCarta.addEventListener("click", fecharCarta);
  }

  if (overlayCarta) {
    overlayCarta.addEventListener("click", (event) => {
      if (event.target === overlayCarta) {
        fecharCarta();
      }
    });
  }

  // =====================================================
  // MÚSICA
  // =====================================================

  function iniciarMusica() {
    const musica = document.getElementById("musica-site");

    if (!musica) return;

    musica.volume = 0.5;

    musica.play().catch((erro) => {
      console.log("🔇 Não foi possível iniciar a música:", erro);
    });
  }

  // =====================================================
  // INÍCIO
  // =====================================================

  async function iniciar() {
    // =================================================
    // PONTINHOS
    // =================================================

    await desenharGrupoJunto("pontinhos", 400);

    // =================================================
    // ESTRELAS DOURADAS
    // =================================================

    await desenharGrupoJunto("estrela-dourada", 700);

    // =================================================
    // ESTRELAS PRETAS
    // =================================================

    await desenharGrupoJunto("estrela-preta", 500);

    // =================================================
    // LUA
    // =================================================

    const lua = document.querySelector("#lua path");

    if (lua) {
      await desenharPath(lua, 1000);
    }

    // =================================================
    // CHÃO PRINCIPAL
    // =================================================

    const chaoPrincipal = document.getElementById("chao-principal");

    if (chaoPrincipal) {
      await desenharPath(chaoPrincipal, 2000);
    }

    // =================================================
    // PEDRAS
    // =================================================

    const pedras = ["pedra1", "pedra2", "pedra3", "pedra4"];

    for (const id of pedras) {
      const pedra = document.getElementById(id);

      if (pedra) {
        await desenharPath(pedra, 400);
      }
    }

    // =================================================
    // MONTANHA PRINCIPAL
    // =================================================

    const montanhaPrincipal = document.getElementById("montanha-principal");

    if (montanhaPrincipal) {
      await desenharPath(montanhaPrincipal, 2500);
    }

    // =================================================
    // MONTANHA DE FUNDO
    // =================================================

    const montanhaFundo = document.getElementById("montanha-fundo");

    if (!montanhaFundo) {
      console.error("❌ Não encontrei #montanha-fundo");
    } else {
      console.log("🏔️ Desenhando montanha de fundo...");

      await desenharPath(montanhaFundo, 2500);
    }

    // =================================================
    // DETALHES DAS MONTANHAS
    // =================================================

    const detalhes = [
      "montanha-detalhe4",
      "montanha-detalhe6",
      "montanha-detalhe5",
      "montanha-detalhe1",
      "montanha-detalhe2",
      "montanha-detalhe3",
    ];

    for (const id of detalhes) {
      const detalhe = document.getElementById(id);

      if (detalhe) {
        await desenharPath(detalhe, 400);
      }
    }

    // =================================================
    // CASTELO
    // =================================================

    const animacaoCastelo = desenharCastelo();

    // =================================================
    // ESPERA PARA O BURACO DA ESPADA
    // =================================================

    await new Promise((resolve) => {
      setTimeout(resolve, 2500);
    });

    // =================================================
    // BURACO DA ESPADA
    // =================================================

    const buraco = document.getElementById("chao-buraco-espada");

    if (buraco) {
      await desenharPath(buraco, 3000);
    }

    // =================================================
    // FLORES
    // =================================================

    const florEsquerda = document.getElementById("flor-esquerda");

    const florDireita = document.getElementById("flor-direita");

    const ramosEsquerda = florEsquerda
      ? [...florEsquerda.querySelectorAll("path")]
      : [];

    const ramosDireita = florDireita
      ? [...florDireita.querySelectorAll("path")]
      : [];

    const quantidade = Math.max(ramosEsquerda.length, ramosDireita.length);

    for (let i = 0; i < quantidade; i++) {
      const animacoes = [];

      if (ramosEsquerda[i]) {
        animacoes.push(desenharPath(ramosEsquerda[i], 500));
      }

      if (ramosDireita[i]) {
        animacoes.push(desenharPath(ramosDireita[i], 500));
      }

      await Promise.all(animacoes);
    }

    // =================================================
    // ANOITECER
    // =================================================

    console.log("🌌 Iniciando anoitecer...");

    // 🌌 noite chegaF
    await iniciarAnoitecer(100);

    // =================================================
    // REDESENHAR TODO O CENÁRIO EM BRANCO
    // =================================================

    await redesenharTudoEmBranco();

    // =================================================
    // ESPADA
    // =================================================

    await desenharEspadaNoturna();

    // =================================================
    // ESPERAR O CASTELO
    // =================================================

    await animacaoCastelo;

    // =================================================
    // ATIVAR EFEITOS DA NOITE
    // =================================================

    ativarEfeitosDaNoite();

    // =================================================
    // LUA
    // =================================================

    preencherLua();

    // =================================================
    // JANELAS
    // =================================================

    preencherJanelas();

    // =================================================
    // ESTRELAS DOURADAS
    // =================================================

    preencherEstrelasDouradas();

    // =================================================
    // BRILHO DA ESPADA
    // =================================================

    criarBrilhoEspada();

    aumentarBrilhoBaseEspada();

    console.log("🌙 Noite concluída.");

    const contentPage = document.querySelector(".content-page");

    if (contentPage) {
      contentPage.classList.add("visible");

      setTimeout(() => {
        escrever();
      }, 1800);
    }
  }

  // =====================================================
  // TELA INICIAL
  // =====================================================

  const introScreen = document.getElementById("intro-screen");
  const startExperience = document.getElementById("start-experience");

  if (startExperience) {
    startExperience.addEventListener("click", () => {
      // =================================================
      // COMEÇA A MÚSICA
      // =================================================

      iniciarMusica();

      // =================================================
      // ESCONDE A TELA INICIAL
      // =================================================

      introScreen.classList.add("hidden");

      // =================================================
      // COMEÇA A ANIMAÇÃO
      // =================================================

      iniciar();
    });
  }
});
