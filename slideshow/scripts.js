'use strict';

//Array de objetos que contém as imagens a ser carregadas no HTML
const images = [
    {'id': '1', 'url':'./img/chrono.jpg'},
    {'id': '2', 'url':'./img/inuyasha.jpg'},
    {'id': '3', 'url':'./img/ippo.png'},
    {'id': '4', 'url':'./img/tenchi.jpg'},
    {'id': '5', 'url':'./img/tenjhotenge.jpg'},
    {'id': '6', 'url':'./img/yuyuhakusho.jpg'}
]

//Seleciona o container onde serão inseridas as imagens
const containerItems = document.querySelector('#container-items')

//Função que utiliza o forEach, para fazer uma varredura nos items do array de imagens
//E adiciona cada uma delas dentro da div
const loadImages = (images, container) =>{
    images.forEach(image => {
        container.innerHTML += `
        <div class="item">
        <img src= '${image.url}'
        </div>
        `
    });
}

//Chamada da função, passando como parametro o array de imagens e o container 
//Onde as imagens serão inseridas
loadImages(images, containerItems);

//Seleciona todas as imagens criadas
let items = document.querySelectorAll('.item')


//Função que faz com que o elemento seja adicionado ao final do array
const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

//Função que faz com que o elemento seja adicionado no início do array
const next = () => {
    const lastItem = items[items.length - 1]
    containerItems.insertBefore(lastItem, items[0])
    items = document.querySelectorAll('.item')
}

//Seleção dos botões e chamada das funções para passar as imagens.
document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);
