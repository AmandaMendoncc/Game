class Personagem {
    constructor(nome, subtitulo, descricao, imagem) {
      this.nome = nome;
      this.subtitulo = subtitulo;
      this.descricao = descricao;
      this.imagem = imagem;
      this.pontos = 0;
    }
  }
  
  const personagens = {
    C1: new Personagem("C++", "O guerreiro épico", "Alta performance, complexidade e resistência. Se você não tem medo de controlar cada detalhe, C++ é seu campo de batalha.", "./imagens/C1.png"),
    Python: new Personagem("Python", "O solucionador de problemas", "Simples, versátil e amigável, sempre pronto para resolver qualquer bug com um sorriso no rosto.", "./imagens/Python.png"),
    JavaScript: new Personagem("JavaScript", "O criativo maluco", "Flexível, pode fazer quase tudo. Só não espere que seja sempre organizado.", "./imagens/JS.png"),
    Ruby: new Personagem("Ruby", "O romântico dos devs", "Elegante, cheio de charme, com uma curva de aprendizado suave e sempre pronto para te surpreender.", "./imagens/Ruby.png"),
    Java: new Personagem("Java", "O robusto", "Confiável e com vastas bibliotecas, nunca vai te deixar na mão, mesmo que precise de uma quantidade infinita de código.", "./imagens/Java.png"),
    Rust: new Personagem("Rust", "O perfeccionista", "Gosta de fazer tudo de forma correta e segura. Você vai investir um pouco mais de tempo, mas no final a sensação de segurança vale a pena.", "./imagens/Rust.png"),
    Swift: new Personagem("Swift", "O moderno e rápido", "Feito para os produtos Apple, é rápido como um raio e oferece sintaxe limpa. Adeus bugs, olá performance.", "./imagens/Swift.png"),
    Go: new Personagem("Go", "O minimalista", "Gosta de simplicidade, mas não abre mão de uma boa performance. Ideal para sistemas que precisam de rapidez sem complicação.", "./imagens/Go.png"),
    C2: new Personagem("C#", "O amigável", "Boa sintaxe, robusto, fácil de aprender, e com grande presença no mundo dos jogos e software corporativo.", "./imagens/C2.png"),
    SQL: new Personagem("SQL", "O mestre das bases de dados", "Organizado, metódico, sempre em busca de otimizar dados e consultas. Se você ama dados, SQL é sua escolha.", "./imagens/SQL.png"),
    PHP: new Personagem("PHP", "O multitarefa", "Nem sempre amado, mas sempre presente em todos os lugares, especialmente na web. Um pouco bagunçada, mas funciona.", "./imagens/PHP.png"),
    Lua: new Personagem("Lua", "O leve", "Usada em jogos e sistemas embarcados. Se você precisa de algo rápido, simples e eficiente, Lua é o caminho.", "./imagens/Lua.png"),
    Haskell: new Personagem("Haskell", "O filósofo", "Funcional, acadêmica e pura, Haskell vai te desafiar a pensar de maneira diferente. Para quem ama teoria.", "./imagens/Haskell.png"),
    Kotlin: new Personagem("Kotlin", "O jovem promissor", "Mais moderno que Java e menos verboso, ideal para Android e com a eficiência que você precisa.", "./imagens/Kotlin.png"),
    Perl: new Personagem("Perl", "O veterano", "Vai para todos os lados, uma linguagem que ama resolver problemas, mas não é a primeira escolha para os novatos.", "./imagens/Perl.png"),
    Scala: new Personagem("Scala", "O híbrido", "Combina o melhor da programação funcional com a orientação a objetos. Se você não quer se limitar a um só estilo, Scala é para você.", "./imagens/Scala.png"),
    Assembly: new Personagem("Assembly", "O herói esquecido", "Para quem gosta de trabalhar diretamente com a máquina, Assembly oferece total controle, mas com muita paciência.", "./imagens/Assembly.png"),
    R: new Personagem("R", "O cientista de dados", "Se você é um mestre em estatísticas ou precisa analisar grandes quantidades de dados, R é a sua escolha.", "./imagens/R.png"),
    Elixir: new Personagem("Elixir", "O mestre da concorrência", "Feita para sistemas distribuídos, Elixir é poderosa, moderna e feita para aguentar o tranco.", "./imagens/Elixir.png"),
    TypeScript: new Personagem("TypeScript", "O cuidadoso", "Se você ama JavaScript, mas precisa de um pouco mais de estrutura e segurança, TypeScript vai ser seu melhor amigo.", "./imagens/TypeScript.png"),
  };
  
  const perguntas = [
    {
      text: "Como você se sente quando o código não compila?",
      options: [
        { text: "Acho que vou tentar resolver tudo sozinho, sem medo!", pontos: { C1: 5, C2: 4, Java: 3, Go: 2, PHP: 1 } },
        { text: "Deixa, vou dar uma olhada na documentação e tentar de novo.", pontos: { Python: 5, Ruby: 4, TypeScript: 3, Kotlin: 2, Lua: 1 } },
        { text: "Só mais um ajuste e vai funcionar!", pontos: { Swift: 5, Rust: 4, C1: 3, JavaScript: 2, Haskell: 1 } },
        { text: "Puxa vida, vou pesquisar no Stack Overflow.", pontos: { SQL: 5, PHP: 4, Python: 3 , Ruby: 2, Assembly: 1 } },
      ]
    },
    {
      text: "Se fosse para escolher um projeto, qual seria?",
      options: [
        { text: "Criar um jogo de ação frenética, cheio de efeitos e poder.", pontos: { C1: 5, Java: 4, C2: 3 , Swift: 2, Lua: 1} },
        { text: "Desenvolver uma aplicação robusta e escalável.", pontos: { Java: 5, Rust: 4, Go: 3, Kotlin: 2, Scala: 1} },
        { text: "Um site criativo com muito conteúdo interativo.", pontos: { JavaScript: 5, Ruby: 4, TypeScript: 3, PHP: 2, Python: 1 } },
        { text: "Trabalhar em uma ferramenta científica para análise de dados.", pontos: { R: 5, Python: 4, SQL: 3, Haskell: 2, Elixir: 1 } },
      ]
    },
    {
      text: "Como você prefere organizar seu código?",
      options: [
        { text: "Organizado, mas com um toque de improviso para flexibilidade.", pontos: { JavaScript: 5, Python: 4, TypeScript: 3, Lua: 2, Ruby: 1 } },
        { text: "Cada detalhe no seu devido lugar, com todos os tipos definidos.", pontos: { Rust: 5, Kotlin: 4, Scala: 3, C1: 2, Java: 1} },
        { text: "Não me importo muito com a organização, desde que funcione.", pontos: { PHP: 5, Lua: 4, Go: 3, Python: 2, Java: 1 } },
        { text: "Com estrutura, mas sem perder a agilidade.", pontos: { C2: 5, Swift: 4, Kotlin: 3, Elixir: 2, Assembly: 1 } },
      ]
    },
    {
      text: "Se fosse para escolher um superpoder para seu código, qual seria?",
      options: [
        { text: "Capacidade de fazer tudo rodar perfeitamente em qualquer ambiente.", pontos: { Rust: 5, C1: 4, Go: 3, Python: 2, Elixir: 1 } },
        { text: "Ser capaz de construir qualquer coisa rapidamente, sem bugs.", pontos: { JavaScript: 5, Ruby: 4, Python: 3, Swift: 2, TypeScript: 1 } },
        { text: "Segurança máxima em todas as operações e sem falhas.", pontos: { Rust: 5, Haskell: 4, Java: 3, Go: 2, Kotlin: 1 } },
        { text: "Controlar o banco de dados como se fosse um super-herói.", pontos: { SQL: 5, R: 4, Python: 3, Scala: 2, Assembly: 1 } },
      ]
    },
    {
      text: "Se você tivesse que escolher uma filosofia de vida para programadores, qual seria?",
      options: [
        { text: "Fazer o melhor possível com o que tenho, sem complicação.", pontos: { Python: 5, Ruby: 4, Lua: 3, JavaScript: 2, Go: 1 } },
        { text: "O mínimo de código possível, mas com máxima performance.", pontos: { Rust: 5, C1: 4, Go: 3, Swift: 2, Kotlin: 1 } },
        { text: "Simplicidade sempre, mas com flexibilidade para crescer.", pontos: { JavaScript: 5, TypeScript: 4, Ruby: 3, Python: 2, Kotlin: 1 } },
        { text: "Se não for sólido e seguro, não vale a pena.", pontos: { Rust: 5, C2: 4, Java: 3, Scala: 2, Assembly: 1 } },
      ]
    },
    {
      text: "Qual é a sua maior motivação ao programar?",
      options: [
        { text: "Resolver problemas e aprender algo novo sempre.", pontos: { Python: 5, Ruby: 4, JavaScript: 3, TypeScript: 2, Go: 1 } },
        { text: "Fazer tudo funcionar rapidamente e de forma eficaz.", pontos: { C1: 5, Rust: 4, Java: 3, Swift: 2, Lua: 1 } },
        { text: "Garantir que meu código seja o mais limpo e eficiente possível.", pontos: { Rust: 5, Kotlin: 4, Go: 3, C2: 2, Scala: 1 } },
        { text: "Criar algo incrível e interativo para o usuário.", pontos: { JavaScript: 5, Ruby: 4, Python: 3, Swift: 2, Lua: 1 } },
      ]
    },
    {
      text: "Você prefere trabalhar em projetos…",
      options: [
        { text: "Com um código enxuto, mas que faça tudo funcionar.", pontos: { Ruby: 5, JavaScript: 4, Python: 3, Lua: 2, Swift: 1 } },
        { text: "Com foco em performance e controle total.", pontos: { C1: 5, Rust: 4, Go: 3, Kotlin: 2, Java: 1 } },
        { text: "Onde eu possa ser criativo e flexível com as soluções.", pontos: { JavaScript: 5, TypeScript: 4, Python: 3, Lua: 2, PHP: 1 } },
        { text: "Com código estruturado, seguro e bem documentado.", pontos: { Rust: 5, C2: 4, Scala: 3, Kotlin: 2, R: 1 } },
      ]
    },
    {
      text: "Qual é o seu maior desafio no desenvolvimento de software?",
      options: [
        { text: "Garantir que o código seja simples, mas ainda assim eficiente.", pontos: { Python: 5, Ruby: 4, JavaScript: 3, TypeScript: 2, Lua: 1 } },
        { text: "Manter o sistema rápido, sem perder a qualidade.", pontos: { C1: 5, Rust: 4, Go: 3, Kotlin: 2, Java: 1 } },
        { text: "Fazer tudo funcionar de maneira compatível em todas as plataformas.", pontos: { Java: 5, Swift: 4, Kotlin: 3, C2: 2, TypeScript: 1 } },
        { text: "Lidar com o banco de dados e otimizar as consultas.", pontos: { SQL: 5, R: 4, Python: 3, Go: 2, Java: 1 } },
      ]
    },
    {
      text: "Como você se sente em relação a bugs e erros?",
      options: [
        { text: "Bugs fazem parte do processo. Vamos resolver o mais rápido possível!", pontos: { Python: 5, Ruby: 4, JavaScript: 3, Lua: 2, PHP: 1 } },
        { text: "Bugs são inaceitáveis. Tenho que garantir que o código esteja perfeito.", pontos: { Rust: 5, C1: 4, Go: 3, Swift: 2, Kotlin: 1 } },
        { text: "Bugs são uma oportunidade de aprender e melhorar o código.", pontos: { Java: 5, Python: 4, TypeScript: 3, Lua: 2, Scala: 1 } },
        { text: "Bugs podem ser frustrantes, mas consigo sempre encontrar uma solução.", pontos: { C2: 5, Swift: 4, Kotlin: 3, Go: 2, Assembly: 1 } },
      ]
    },
    {
      text: "Qual é o seu tipo de projeto ideal?",
      options: [
        { text: "Desenvolver sistemas rápidos e de alta performance, com controle total.", pontos: { C1: 5, Rust: 4, Go: 3, Kotlin: 2, Java: 1 } },
        { text: "Criar interfaces bonitas e interativas, focando na experiência do usuário.", pontos: { JavaScript: 5, Ruby: 4, TypeScript: 3, Lua: 2, Python: 1 } },
        { text: "Trabalhar com dados e buscar a melhor forma de analisá-los.", pontos: { R: 5, Python: 4, SQL: 3, Scala: 2, Go: 1 } },
        { text: "Fazer modificações em jogos e sistemas menores e leves.", pontos: { Lua: 5, Python: 4, Swift: 3, Java: 2, Ruby: 1 } },
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
      <img src="${vencedor.imagem}" alt="${vencedor.nome}" />
      <h2>${vencedor.nome}!</h2>
      <h4>${vencedor.subtitulo}!</h4>
      <p>${vencedor.descricao}</p>
      <p><strong>Pontuação:</strong> ${vencedor.pontos}</p>
      <button class="reset-btn" onclick="reiniciarQuiz()">Tentar novamente</button>
    `;
    resultado.classList.remove("hidden");
  }
  
  function reiniciarQuiz() {
    document.getElementById("result-screen").classList.add("hidden");
    document.getElementById("start-screen").classList.remove("hidden");
  }
  
  function mostrarPersonagens() {
    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("characters-screen").classList.remove("hidden");
  
    const container = document.getElementById("character-list");
    container.innerHTML = '';
  
    Object.values(personagens).forEach(p => {
      const personagemDiv = document.createElement("div");
      personagemDiv.innerHTML = `
        <img src="${p.imagem}" alt="${p.nome}" />
        <div>${p.nome}</div>
      `;
      container.appendChild(personagemDiv);
    });
  }
  
  function voltarInicio() {
    document.getElementById("characters-screen").classList.add("hidden");
    document.getElementById("start-screen").classList.remove("hidden");
  }
  