let numeroSecreto = 7;

function exebirTextoNatela('tag'){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exebirTextoNatela('h1','Jogo do numero secreto');
exebirTextoNatela('p','Vocẽ descobriu o numero secreto!');

function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
      exebirTextoNatela('h1','acertou!')
    }
    

function gerarNumeroAleatorio(){
  return parseInt  (mach.random() * 10 + 1);
}












onsole.log('chute == numeroSecreto');
    }