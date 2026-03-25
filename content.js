function insertTextAndSubmit(text) {
    console.log("chamando aqui??", text);
    const editor = document.querySelector('[data-testid="chat-input"]');
    editor.focus();
    document.execCommand('selectAll', false, null);
    document.execCommand('insertText', false, text);
    
    let button = document.getElementById('send-message-button');
    console.log("button", button);
    button.click();
}

const textosAleatorios = [
  "Ayel ficou conhecido como top laner agressivo na solo queue",
  "Seu nome real é Marcelo Mello",
  "Já jogou por equipes como INTZ, paiN Gaming, RED Canids e KaBuM!",
  "Ficou famoso por picks diferentes no top como Illaoi e Yorick",
  "Era conhecido por não ter medo de arriscar jogadas",
  "Teve destaque no cenário competitivo brasileiro (CBLOL)",
  "Já enfrentou top laners fortes como Yang e Robo",
  "Seu estilo de jogo mistura agressividade com picks off-meta",
  "Também ganhou visibilidade como streamer",
  "Foi considerado um jogador inconsistente em alguns momentos da carreira",
  "Já carregou jogos com campeões split push",
  "Tem preferência por campeões de dano e pressão de rota",
  "Já jogou partidas decisivas em playoffs do CBLOL",
  "Ficou conhecido por sua personalidade tranquila fora do jogo",
  "Teve fases onde dominava a solo queue brasileira",
  "Já utilizou campeões como Renekton, Fiora e Camille",
  "Seu gameplay muitas vezes focava em ganhar vantagem cedo",
  "Já foi criticado por overextend em partidas competitivas",
  "É lembrado por jogar sem medo em matchups difíceis",
  "Depois do competitivo, focou mais em criação de conteúdo",
  "Já fez streams com gameplay educativo",
  "Era conhecido por tentar surpreender com picks inesperados",
  "Participou de várias temporadas do CBLOL",
  "Tem experiência contra jogadores internacionais",
  "Seu nome 'Ayel' ficou bem conhecido na comunidade BR de LoL"
];

setInterval(() => {
    const randomTexto = textosAleatorios[Math.floor(Math.random() * textosAleatorios.length)];
    insertTextAndSubmit(randomTexto);
}, 30000);