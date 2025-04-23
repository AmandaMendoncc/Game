// Classe que representa um personagem
class Personagem {
    constructor(nome, descricao, imagem) {
      this.nome = nome;
      this.descricao = descricao;
      this.imagem = imagem;
      this.pontos = 0;
    }
  }
  
  // Definição dos personagens
  const personagens = {
    Personagem1: new Personagem("Personagem1", "Descrição1", ".."),
    Personagem2: new Personagem("Personagem2", "Descrição2", ".."),
    Personagem3: new Personagem("Personagem3", "Descrição3", ".."),
  };
  
  // Lista de perguntas e opções com pontuação
  const perguntas = [
    {
      text: "Qual a sua cor favorita?",
      options: [
        { text: "azul", pontos: { Personagem1: 3, Personagem2: 2, Personagem3: 1 } },
        { text: "amarelo", pontos: { Personagem1: 1, Personagem2: 3, Personagem3: 2 } },
        { text: "verde", pontos: { Personagem1: 2, Personagem2: 1, Personagem3: 3 } },
      ]
    },
    {
      text: "Pergunta2",
      options: [
        { text: "1", pontos: { Personagem1: 3, Personagem2: 2, Personagem3: 1 } },
        { text: "2", pontos: { Personagem1: 1, Personagem2: 3, Personagem3: 2 } },
        { text: "3", pontos: { Personagem1: 2, Personagem2: 1, Personagem3: 3 } },
      ]
    },
    {
      text: "Pergunta3",
      options: [
        { text: "1", pontos: { Personagem1: 3, Personagem2: 2, Personagem3: 1 } },
        { text: "2", pontos: { Personagem1: 1, Personagem2: 3, Personagem3: 2 } },
        { text: "3", pontos: { Personagem1: 2, Personagem2: 1, Personagem3: 3 } },
      ]
    }
  ];
  
  let perguntaAtual = 0;
  
  function startQuiz() {
    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("quiz-screen").classList.remove("hidden");
    perguntaAtual = 0;
    Object.values(personagens).forEach(p => p.pontos = 0);
    mostrarPergunta();
  }
  
  function mostrarPergunta() {
    const quiz = document.getElementById("quiz-screen");
    const pergunta = perguntas[perguntaAtual];
  
    quiz.innerHTML = `
      <h2>${pergunta.text}</h2>
      <div class="options">
        ${pergunta.options.map((opcao, index) => 
          `<button onclick="selecionarOpcao(${index})">${opcao.text}</button>`
        ).join('')}
      </div>
    `;
  }
  
  function selecionarOpcao(index) {
    const opcaoSelecionada = perguntas[perguntaAtual].options[index];
    for (const [personagem, pontos] of Object.entries(opcaoSelecionada.pontos)) {
      personagens[personagem].pontos += pontos;
    }
    perguntaAtual++;
    if (perguntaAtual < perguntas.length) {
      mostrarPergunta();
    } else {
      mostrarResultado();
    }
  }
  
  function mostrarResultado() {
    document.getElementById("quiz-screen").classList.add("hidden");
    const resultado = document.getElementById("result-screen");
  
    const vencedor = Object.values(personagens).reduce((a, b) => a.pontos > b.pontos ? a : b);
  
    resultado.innerHTML = `
      <h2>Você é ${vencedor.nome}!</h2>
      <p>${vencedor.descricao}</p>
      <img src="${vencedor.imagem}" alt="${vencedor.nome}" />
      <p><strong>Pontuação:</strong> ${vencedor.pontos}</p>
      <button class="reset-btn" onclick="reiniciarQuiz()">Tentar novamente</button>
    `;
    resultado.classList.remove("hidden");
  }
  
  function reiniciarQuiz() {
    document.getElementById("result-screen").classList.add("hidden");
    document.getElementById("start-screen").classList.remove("hidden");
  }
  