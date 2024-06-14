let nSorteados = [];
let nsecret = nAleatorio();
let nTenta = 1;
function msgInicial(){
    exibirTexto('h1','Número Secreto');
    exibirTexto('p','Escolha um Número entre 1 e 100');
}
msgInicial();

function exibirTexto(tag, texto){
 let campo = document.querySelector(tag);
 campo.innerHTML = texto; 
 responsiveVoice.speak(texto,'Brazilian Portuguese',{rate:1.2});   
}

function verificarChute() {
    let input = document.querySelector('input').value;
    console.log(input);
    console.log("Botão Clicado");
    console.log(nsecret);
    if(input == nsecret){
        let checkTenta = nTenta > 1 ? "tentativas" : "tentativa";
        let msgTenta = `Descobriu o número ${nsecret} com ${nTenta} ${checkTenta}!`;
        exibirTexto('h1', 'PARABÉNS!');
        exibirTexto('p', msgTenta);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if(input < nsecret){
            exibirTexto('p', 'Número Secreto é Maior');
        }
        else {
          exibirTexto('p', 'Número Secreto é Menor');  
        }
        nTenta++;
        limpaCampo();
    }
}

function nAleatorio() {
let numeromax = 100;
let nEscolhido = parseInt(Math.random() * numeromax + 1);

let qtdElementosList = nSorteados.length;

if (qtdElementosList == numeromax){
    nSorteados = [];
}

if(nSorteados.includes(nEscolhido)){
    return nAleatorio();
}
else {
    nSorteados.push(nEscolhido); 
    console.log(nSorteados);
    return nEscolhido;

}
}


function limpaCampo(){
 input = document.querySelector('input');
 input.value = '';   
}

function reiniciarJogo(){
    nsecret = nAleatorio();
    nTenta = 1;
    limpaCampo();
    msgInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}