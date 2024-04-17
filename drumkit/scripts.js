'use strict'; //Prevenção de Erros:

//Array que armazena os sons que estão no HTML
const sons = {
    'A': 'boom.wav',
    'S': 'clap.wav',
    'D': 'hihat.wav',
    'F': 'kick.wav',
    'G': 'openhat.wav',
    'H': 'ride.wav',
    'J': 'snare.wav',
    'K': 'tink.wav',
    'L': 'tom.wav'

}


//Função que cria uma div e a insere no container que está no HTML
const criarDiv = function (texto) {
    const div = document.createElement('div')//Cria uma nova div
    div.classList.add('key'); //Adiciona a classe key a div criada
    div.textContent = texto; //insere o texto que é passado por parâmetro na função na div
    div.id = texto; //adiciona um id a div
    document.getElementById('container').appendChild(div) //Insere o elemento no HTML
}

//Faz um forEach e cria uma nova div a cada elemento que foi passado no Array de sons
const exibir = function(sons){
    Object.keys(sons).forEach(criarDiv)
}

//Função que chama os sons que estão no array
const tocarSom = (letra) => {
    const audio = new Audio(`./sounds/${sons[letra]}`)
    audio.play();
}

//Adiciona a classe criada no CSS para dar efeito ao clicar nas divs
const adicionarEfeito = (letra) =>{
    document.getElementById(letra).classList.add('active')
}

//Remove a classe com os efeitos criada no CSS 
const removerEfeito = (letra) =>{
    const div = document.getElementById(letra);
    const removeActive = () => div.classList.remove('active')
    div.addEventListener('transitionend', removeActive)
}


//Função para validar se estamos clicando nas letras ou fora delas.
const ativarDiv = (evento) => {
    let letra = '';

   if (evento.type == 'click') {
     letra = evento.target.id;
   } else {
     letra = evento.key.toUpperCase();
   }
   const letraPermitida = sons.hasOwnProperty(letra);
   if (letraPermitida) {
        adicionarEfeito(letra)
        tocarSom(letra)
        removerEfeito(letra)
   }

}

//Chama a função e passa como parâmetro o array de sons
exibir(sons);

//Seleciona o container no HTML e adiciona o evento de click a ele
document.getElementById('container').addEventListener('click', ativarDiv);

//Pega o evento de tecla do teclado.
window.addEventListener('keydown', ativarDiv)

