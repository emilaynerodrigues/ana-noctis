document.addEventListener("DOMContentLoaded", () => {
  // =====================================================
  // CARTA DO ACESSO ATUAL
  // =====================================================

  let cartaDoAcesso = null;

  function sortearCarta() {
    const indice = Math.floor(Math.random() * cartas.length);
    cartaDoAcesso = cartas[indice];

    console.log("📜 Carta escolhida:", cartaDoAcesso.titulo);
  }
  // =====================================================
  // FRASE
  // =====================================================

  const frases = ["Até que a escuridão nos reivindique!"];
  const texto = document.getElementById("texto");

  let frase = 0;
  let letra = 0;
  let textoAtual = "";
  let escrevendo = false;

  function escrever() {
    if (escrevendo || !texto) return;

    escrevendo = true;

    function digitar() {
      if (letra < frases[frase].length) {
        textoAtual += frases[frase][letra];
        texto.textContent = textoAtual;
        letra++;

        setTimeout(digitar, 70);
        return;
      }

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

    digitar();
  }

  // =====================================================
  // DESENHAR PATH
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

      requestAnimationFrame(() => {
        elemento.style.strokeDashoffset = "0";
      });

      setTimeout(resolve, duracao);
    });
  }

  // =====================================================
  // DESENHAR GRUPO INTEIRO JUNTO
  // =====================================================

  async function desenharGrupoJunto(id, duracao = 800) {
    const grupo = document.getElementById(id);

    if (!grupo) return;

    const paths = [...grupo.querySelectorAll("path")];

    await Promise.all(paths.map((path) => desenharPath(path, duracao)));
  }

  // =====================================================
  // CONSTELAÇÕES
  // =====================================================

  function obterEstrelasConstelacoes() {
    return [...document.querySelectorAll("#estrelas-constelacoes path")].filter(
      (path) => !path.closest(".constelacao-linha"),
    );
  }

  function obterLinhasConstelacoes() {
    return [
      ...document.querySelectorAll(
        "#estrelas-constelacoes .constelacao-linha path",
      ),
    ];
  }

  // =====================================================
  // ESTRELAS DO DIA
  // =====================================================

  async function desenharEstrelasDoDia() {
    const estrelas = [
      ...document.querySelectorAll("#estrelas-brancas path"),
      ...obterEstrelasConstelacoes(),
    ];

    estrelas.forEach((estrela) => {
      estrela.style.stroke = "#010101";
      estrela.style.fill = "none";
      estrela.style.opacity = "0";

      const comprimento = estrela.getTotalLength();

      estrela.style.strokeDasharray = comprimento;
      estrela.style.strokeDashoffset = comprimento;
    });

    document.body.getBoundingClientRect();

    await Promise.all(
      estrelas.map((estrela) => {
        return new Promise((resolve) => {
          const atraso = Math.random() * 80;
          const duracao = 500 + Math.random() * 350;

          setTimeout(() => {
            estrela.style.transition = "opacity 180ms ease";
            estrela.style.opacity = "1";

            setTimeout(() => {
              estrela.style.transition = `stroke-dashoffset ${duracao}ms cubic-bezier(0.25, 0.8, 0.25, 1)`;

              requestAnimationFrame(() => {
                estrela.style.strokeDashoffset = "0";
              });

              setTimeout(resolve, duracao);
            }, 80);
          }, atraso);
        });
      }),
    );

    estrelas.forEach((estrela) => {
      estrela.style.opacity = "1";
      estrela.style.strokeDasharray = "none";
      estrela.style.strokeDashoffset = "0";
      estrela.style.transition = "none";
    });
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

    const duracaoEstrutura = 15000;
    const duracaoJanelas = 1200;

    if (estrutura) {
      const comprimento = estrutura.getTotalLength();

      estrutura.style.strokeDasharray = comprimento;
      estrutura.style.strokeDashoffset = comprimento;
      estrutura.style.opacity = "1";

      estrutura.getBoundingClientRect();

      estrutura.style.transition = `stroke-dashoffset ${duracaoEstrutura}ms linear`;

      estrutura.style.strokeDashoffset = "0";
    }

    const elementosJanelas = [];

    janelas.forEach((id) => {
      const janela = document.getElementById(id);

      if (!janela) return;

      const comprimento = janela.getTotalLength();

      janela.style.strokeDasharray = comprimento;
      janela.style.strokeDashoffset = comprimento;
      janela.style.opacity = "1";

      elementosJanelas.push(janela);
    });

    elementosJanelas.forEach((janela) => {
      janela.getBoundingClientRect();

      janela.style.transition = `stroke-dashoffset ${duracaoJanelas}ms linear`;

      janela.style.strokeDashoffset = "0";
    });

    await new Promise((resolve) => {
      setTimeout(resolve, duracaoEstrutura);
    });
  }

  // =====================================================
  // REDESENHAR PATH EM BRANCO
  // =====================================================

  function redesenharPathEmBranco(path, duracao = 800) {
    return new Promise((resolve) => {
      const comprimento = path.getTotalLength();

      const clone = path.cloneNode(true);

      clone.removeAttribute("id");
      clone.style.stroke = "#FFFFFF";
      clone.style.fill = "none";
      clone.style.opacity = "1";
      clone.style.strokeDasharray = comprimento;
      clone.style.strokeDashoffset = comprimento;

      path.parentNode.appendChild(clone);

      clone.getBoundingClientRect();

      clone.style.transition = `stroke-dashoffset ${duracao}ms linear`;

      path.style.transition = `stroke ${duracao}ms linear`;

      requestAnimationFrame(() => {
        clone.style.strokeDashoffset = "0";
        path.style.stroke = "rgba(255,255,255,0)";
      });

      setTimeout(() => {
        path.style.transition = "none";
        path.style.stroke = "#FFFFFF";

        clone.remove();

        resolve();
      }, duracao);
    });
  }

  // =====================================================
  // ESPADA NOTURNA
  // =====================================================

  async function desenharEspadaNoturna() {
    const espada = document.getElementById("espada");

    if (!espada) return;

    const partes = [
      document.getElementById("parte-preta"),
      document.getElementById("pedra-vermelha"),
      document.getElementById("parte-dourada"),
      ...document.querySelectorAll("#espada #lamina path"),
    ].filter(Boolean);

    espada.style.opacity = "1";

    partes.forEach((parte) => {
      const comprimento = parte.getTotalLength();

      parte.style.opacity = "1";
      parte.style.stroke = "#FFFFFF";
      parte.style.fill = "none";
      parte.style.transition = "none";
      parte.style.strokeDasharray = comprimento;
      parte.style.strokeDashoffset = comprimento;
    });

    espada.getBoundingClientRect();

    requestAnimationFrame(() => {
      partes.forEach((parte) => {
        parte.style.transition = "stroke-dashoffset 7000ms ease";

        parte.style.strokeDashoffset = "0";
      });
    });

    await new Promise((resolve) => {
      setTimeout(resolve, 7000);
    });

    partes.forEach((parte) => {
      parte.style.transition = "fill 2500ms ease";
      parte.style.fill = "#1E2C4F";
      parte.style.stroke = "#FFFFFF";
    });

    await new Promise((resolve) => {
      setTimeout(resolve, 2500);
    });
  }

  // =====================================================
  // ESTRELAS BRANCAS
  // =====================================================

  function redesenharEstrelaBranca(estrela, duracao = 1200) {
    return new Promise((resolve) => {
      if (!estrela) {
        resolve();
        return;
      }

      const comprimento = estrela.getTotalLength();

      estrela.style.stroke = "#010101";
      estrela.style.fill = "none";
      estrela.style.opacity = "1";
      estrela.style.strokeDasharray = comprimento;
      estrela.style.strokeDashoffset = comprimento;

      estrela.getBoundingClientRect();

      estrela.style.transition = `
        stroke ${duracao}ms linear,
        stroke-dashoffset ${duracao}ms ease
      `;

      requestAnimationFrame(() => {
        estrela.style.stroke = "#FFFFFF";
        estrela.style.strokeDashoffset = "0";
      });

      setTimeout(() => {
        estrela.style.transition = "none";
        estrela.style.stroke = "#FFFFFF";
        estrela.style.fill = "none";
        estrela.style.strokeDasharray = "";
        estrela.style.strokeDashoffset = "";

        resolve();
      }, duracao);
    });
  }

  // =====================================================
  // REDESENHAR CENÁRIO EM BRANCO
  // =====================================================

  async function redesenharTudoEmBranco() {
    const paths = [...document.querySelectorAll("#art path")].filter((path) => {
      if (path.closest("#espada")) return false;
      if (path.closest("#estrelas-constelacoes")) return false;
      if (path.closest("#estrelas-brancas")) return false;

      return true;
    });

    await Promise.all(paths.map((path) => redesenharPathEmBranco(path, 1800)));

    const estrelasBrancas = [
      ...document.querySelectorAll("#estrelas-brancas path"),
    ];

    await Promise.all(
      estrelasBrancas.map((estrela) => redesenharEstrelaBranca(estrela, 1200)),
    );
  }

  // =====================================================
  // LINHAS DAS CONSTELAÇÕES
  // =====================================================

  async function desenharLinhasConstelacoes() {
    const linhas = obterLinhasConstelacoes();

    for (const linha of linhas) {
      const comprimento = linha.getTotalLength();

      linha.style.transition = "none";
      linha.style.animation = "none";
      linha.style.stroke = "#DBAF50";
      linha.style.fill = "none";
      linha.style.opacity = "1";
      linha.style.strokeDasharray = comprimento;
      linha.style.strokeDashoffset = comprimento;

      linha.getBoundingClientRect();

      requestAnimationFrame(() => {
        linha.style.transition = "stroke-dashoffset 1000ms ease";

        linha.style.strokeDashoffset = "0";
      });

      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });

      linha.style.transition = "none";
      linha.style.strokeDasharray = "none";
      linha.style.strokeDashoffset = "0";
    }
  }

  // =====================================================
  // ATIVAR CONSTELAÇÕES
  // =====================================================

  async function ativarConstelacoes() {
    const estrelas = obterEstrelasConstelacoes();

    estrelas.forEach((estrela) => {
      estrela.style.transition = `
        fill 1200ms ease,
        stroke 1200ms ease
      `;

      estrela.style.stroke = "#DBAF50";
      estrela.style.fill = "#DBAF50";
      estrela.style.filter = "none";
    });

    await new Promise((resolve) => {
      setTimeout(resolve, 1200);
    });

    estrelas.forEach((estrela, index) => {
      estrela.style.transition = "none";
      estrela.style.animation =
        "estrelaConstelacaoBrilho 3.5s ease-in-out infinite";

      estrela.style.animationDelay = `${index * 0.35}s`;

      estrela.style.animationFillMode = "both";
    });

    await desenharLinhasConstelacoes();
  }

  // =====================================================
  // PREPARAR MODO NOTURNO
  // =====================================================

  function prepararModoNoturno() {
    document.querySelectorAll("#estrelas-brancas path").forEach((estrela) => {
      estrela.style.stroke = "#FFFFFF";
      estrela.style.fill = "none";
    });

    obterEstrelasConstelacoes().forEach((estrela) => {
      estrela.style.stroke = "#FFFFFF";
      estrela.style.fill = "none";
      estrela.style.opacity = "1";
    });

    obterLinhasConstelacoes().forEach((linha) => {
      linha.style.stroke = "#DBAF50";
      linha.style.fill = "none";
      linha.style.opacity = "0";
      linha.style.transition = "none";
      linha.style.animation = "none";
      linha.style.strokeDasharray = "";
      linha.style.strokeDashoffset = "";
    });
  }

  // =====================================================
  // ANOITECER
  // =====================================================

  function iniciarAnoitecer() {
    return new Promise((resolve) => {
      const fundo = document.getElementById("night-background");
      const background = document.getElementById("background");

      if (!fundo || !background) {
        resolve();
        return;
      }

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
  // BRILHO DA ESPADA
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

  // =====================================================
  // EFEITOS DA NOITE
  // =====================================================

  function ativarEfeitosDaNoite() {
    const art = document.getElementById("art");

    if (art) {
      art.classList.add("night-mode");
    }
  }

  // =====================================================
  // LUA
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
  // JANELAS
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
  // ESTRELAS DOURADAS
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
  // CARTA
  // =====================================================

  let notificacaoEnviada = false;
  let indiceCartaAtual = null;

  function escolherCarta() {
    if (!cartas || cartas.length === 0) {
      console.error("❌ Nenhuma carta foi encontrada.");
      return null;
    }

    const chave = "ana_noctis_cartas_lidas";

    let cartasLidas = JSON.parse(localStorage.getItem(chave)) || [];

    // Se todas as cartas já foram recebidas,
    // começa um novo ciclo.
    if (cartasLidas.length >= cartas.length) {
      cartasLidas = [];
    }

    // Apenas cartas que ainda não foram recebidas
    const disponiveis = cartas
      .map((_, index) => index)
      .filter((index) => !cartasLidas.includes(index));

    // Sorteia uma carta
    const indice = disponiveis[Math.floor(Math.random() * disponiveis.length)];

    // Marca como recebida
    cartasLidas.push(indice);

    localStorage.setItem(chave, JSON.stringify(cartasLidas));

    return cartas[indice];
  }

  function abrirCarta() {
    const overlay = document.getElementById("letter-overlay");
    const textoCarta = document.getElementById("letter-text");
    const assinatura = document.getElementById("letter-signature");

    if (!overlay || !textoCarta || !assinatura || !cartaDoAcesso) return;

    // =====================================================
    // NOTIFICAÇÃO
    // =====================================================

    if (!notificacaoEnviada) {
      notificacaoEnviada = true;

      emailjs
        .send("service_04hrmhh", "template_gd1y7po", {
          name: "Ana",
          email: "",
          message: `A Ana acessou o site e abriu a ${cartaDoAcesso.titulo}.`,
          carta: cartaDoAcesso.titulo,
          texto_carta: cartaDoAcesso.texto,
        })
        .then(() => {
          console.log("📨 Notificação enviada!");
          console.log("📜 Carta aberta:", cartaDoAcesso.titulo);
        })
        .catch((error) => {
          console.error("❌ Erro ao enviar notificação:", error);
          notificacaoEnviada = false;
        });
    }

    // =====================================================
    // ABRIR CARTA
    // =====================================================

    overlay.classList.add("open");

    textoCarta.textContent = "";
    assinatura.classList.remove("show");

    const carta = cartaDoAcesso.texto;
    let letra = 0;
    let textoAtual = "";

    function escreverCarta() {
      if (letra < carta.length) {
        textoAtual += carta[letra];
        textoCarta.textContent = textoAtual;
        letra++;
        setTimeout(escreverCarta, 35);
        return;
      }

      // Quando terminar de escrever, transforma o 🌻 em link
      if (cartaDoAcesso.linkGirassol) {
        const texto = textoCarta.textContent;
        const girassol = "🌻";
        const posicao = texto.lastIndexOf(girassol);

        if (posicao !== -1) {
          const antes = texto.slice(0, posicao);
          const depois = texto.slice(posicao + girassol.length);

          textoCarta.innerHTML =
            antes +
            `<a href="${cartaDoAcesso.linkGirassol}" 
            target="_blank" 
            rel="noopener noreferrer"
            class="link-girassol"
            aria-label="Abrir o girassol">${girassol}</a>` +
            depois;
        }
      }

      setTimeout(() => {
        assinatura.classList.add("show");
      }, 600);
    }

    escreverCarta();
  }

  function fecharCarta() {
    const overlay = document.getElementById("letter-overlay");

    if (overlay) {
      overlay.classList.remove("open");
    }
  }

  // =====================================================
  // EVENTOS DA CARTA
  // =====================================================

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
  // INÍCIO DA ANIMAÇÃO
  // =====================================================

  async function iniciar() {
    // Escolhe UMA carta para este acesso
    sortearCarta();

    await desenharGrupoJunto("pontinhos", 400);

    await desenharEstrelasDoDia();

    const lua = document.querySelector("#lua path");

    if (lua) {
      await desenharPath(lua, 1000);
    }

    const chaoPrincipal = document.getElementById("chao-principal");

    if (chaoPrincipal) {
      await desenharPath(chaoPrincipal, 2000);
    }

    const pedras = ["pedra1", "pedra2", "pedra3", "pedra4"];

    for (const id of pedras) {
      const pedra = document.getElementById(id);

      if (pedra) {
        await desenharPath(pedra, 400);
      }
    }

    const montanhaPrincipal = document.getElementById("montanha-principal");

    if (montanhaPrincipal) {
      await desenharPath(montanhaPrincipal, 2500);
    }

    const montanhaFundo = document.getElementById("montanha-fundo");

    if (montanhaFundo) {
      await desenharPath(montanhaFundo, 2500);
    }

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

    const animacaoCastelo = desenharCastelo();

    await new Promise((resolve) => {
      setTimeout(resolve, 2500);
    });

    const buraco = document.getElementById("chao-buraco-espada");

    if (buraco) {
      await desenharPath(buraco, 3000);
    }

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

    // ===================================================
    // ANOITECER
    // ===================================================

    await iniciarAnoitecer();

    prepararModoNoturno();

    await redesenharTudoEmBranco();

    // ===================================================
    // ESPADA
    // ===================================================

    await desenharEspadaNoturna();

    await animacaoCastelo;

    // ===================================================
    // EFEITOS DA NOITE
    // ===================================================

    ativarEfeitosDaNoite();
    preencherLua();
    preencherJanelas();

    criarBrilhoEspada();
    aumentarBrilhoBaseEspada();

    // ===================================================
    // CONSTELAÇÕES
    // ===================================================

    await ativarConstelacoes();

    // ===================================================
    // TEXTO
    // ===================================================

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
      iniciarMusica();

      if (introScreen) {
        introScreen.classList.add("hidden");
      }

      iniciar();
    });
  }
});
