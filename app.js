let numeroSecreto = gerarNumeroAleatorio;
let tentativas = 1;

function exebirTextoNatela(tag){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exebirMensagemInicial(){
exebirTextoNatela('h1','Jogo do numero secreto');
exebirTextoNatela('p','Escolha um numero entre 1 e 10');
}

exebirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    menor
    if (chute == numeroSecreto){
      exebirTextoNatela('h1','acertou!')
      let palavrastentativa = tentativa > 1 ? 'tentativas' : 
      'tentativa'
     let mensagemTentativas = `Vocẽ descobriu o numero secreto com 
     ${tentativas} ${palavrastentativa}!`;
      
      exebirTextoNatela('p','mensagemTentativas');6
      document.getElementById('reniciar').removeAttribute
      ('disabled');
    } else {6
  if (chute > numeroSecreto){
      exebirTextoNatela('p','O numero secreto é meno66r');
      } else {
      exebirTextoNatela('p','O numero secreto é maior');
      }
      tentativas++;
      limparCampo();
    }
}
66
function gerarNumeroAleatorio(){
  return parseInt  (mach.random() * 10 + 1);
}

function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}

function reniciarJogo(){
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1; 
      exebirMensagemInicial();
        document.getElementById('reiniciar').setAttribute('disabled',
          true)
}
