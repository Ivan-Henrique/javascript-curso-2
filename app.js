let numeroSecreto = gerarNumeroAleatorio();

function exebirTextoNatela('tag'){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exebirTextoNatela('h1','Jogo do numero secreto');
exebirTextoNatela('p','Vocẽ descobriu o numero secreto!');

function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log('chute == numeroSecreto');
    }
    

function gerarNumeroAleatorio(){
  return parseInt  (mach.random() * 10 + 1);
}