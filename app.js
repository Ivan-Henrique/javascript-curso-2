let numeroSecreto = 7;

function exebirTextoNatela(tag){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exebirTextoNatela('h1','Jogo do numero secreto');
exebirTextoNatela('p','Vocẽ descobriu o numero secreto com 5 tentativas');

function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
      exebirTextoNatela('h1','acertou!')
      let mensagemTentativas = `Vocẽ descobriu o numero secreto com 5 tentativas´
      
      exebirTextoNatela('p1','Vocẽ descobriu o numero secreto com 5 tentativas')

    } else {
  if (chute > numeroSecreto){
      exebirTextoNatela('p','O numero secreto é menor');
      } else {
      exebirTextoNatela('p','O numero secreto é menor');
      }


    }
}

function gerarNumeroAleatorio(){
  return parseInt  (mach.random() * 10 + 1);
}











