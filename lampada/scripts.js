//Seleção dos ítens no HTML

const ligar = document.querySelector('#turnOn')
const desligar = document.querySelector('#turnOff')
const trocar = document.querySelector('#reload')
const lamp = document.querySelector('#lamp')

//função que verifica se a imagem está quebrada.
function isLampBroken() {
    return lamp.src.indexOf ('quebrada') > -1;
} 

//função para ligar a lampada
function lampOn() {
    if(!isLampBroken ()){
        lamp.src = './img/ligada.jpg'
    }
}

//função para desligar a lampada
function lampOff() {
    if(!isLampBroken ()){
        lamp.src = './img/desligada.jpg'
    }
}

//função para recarregar a página, caso a lampada esteja quebrada
function trocarLamp() {
    window.location.reload(true);
}

//função que quebra a lampada
function lampBroken() {
    lamp.src = './img/quebrada.jpg'
}

//Eventos de click nos botões e chamada das funções criadas acima.
ligar.addEventListener('click', lampOn);
desligar.addEventListener('click', lampOff);
trocar.addEventListener('click', trocarLamp)
lamp.addEventListener('dblclick', lampBroken);