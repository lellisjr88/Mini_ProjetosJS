//Seleção dos elementos no HTML
const img = document.querySelector('#img')
const buttons = document.querySelector('#buttons')

//Variáveis de controle
let colorIndex = 0;
let intervalId = null;


//função que chama o evento e o torna automático e também segura para não acelerar o setInterval
const trafficLight = (event) =>{
    stopAutomatic();
    turnOn[event.target.id]();
}


//função que adiciona mais um a cada vez que o setInterval é chamado e que zera a contagem, se ele for maior que 2
const nextIndex = () => {
    if (colorIndex < 2 ) {
        ++colorIndex;
    }else {
        colorIndex = 0;
    }
}

//função que troca as cores
const changeColor = () => {
    const colors = ['red', 'yellow','green']
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
}

//função que limpa o setInterval
const stopAutomatic = () => {
    clearInterval (intervalId);
}

//Objeto criado para armazenar as cores e imagens que serão chamadas na função
const turnOn = {
    'red': () =>{
        img.src = './img/vermelho.png'
    },
    'yellow': () => {
        img.src = './img/amarelo.png'
    },
    'green': () => {
        img.src = './img/verde.png'
    },
    'automatic': () => intervalId = setInterval( changeColor, 1000 )
}


//Adiciona o escutador de eventos ao botão e chama a função principal
buttons.addEventListener('click', trafficLight);