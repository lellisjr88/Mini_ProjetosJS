//Seleciona o botão no HTML

const calcular = document.querySelector('#calcular') 


function imc () {

    //Seleciona todos os campos de input no HTML que serão utilizados
    const nome = document.querySelector('#nome').value
    const altura = document.querySelector('#altura').value
    const peso = document.querySelector('#peso').value
    const resultado = document.querySelector('#resultado')
    

    //Validação para ver se os campos estão preenchidos
    if (nome !== "" && altura !== "" && peso !== "") {
       
        const valorIMC = (peso / (altura *altura)).toFixed(2);//Calculo do IMC


        //Validação para saber a classificação do IMC conforme o peso e a altura
        let classificacao;
        if (valorIMC <= 18.4 ) {
            classificacao = "Abaixo do Peso"
        }else if (valorIMC  <= 24.9) {
            classificacao = "Você está no peso ideal"
        }else if (valorIMC  <= 29.9) {
            classificacao = "Você está com sobrepeso"
        }else if (valorIMC  <= 34.9) {
            classificacao = "Obesidade Grau 1"
        }else if (valorIMC  <= 39.9) {
            classificacao = "Obesidade Grau 2"
        }else if (valorIMC > 40) {
            classificacao = "Obesidade Grau 3"
        }

        //Insere o resultado no HTML
        resultado.textContent = 
        `Olá ${nome}, seu IMC é: 
             ${valorIMC} 
             ${classificacao}.`
   
    }else {
        resultado.textContent = "Preencha todos os campos acima!"
    }
    
 
}


//Adiciona um evento de click ao botão e chama a função que calcula o IMC
calcular.addEventListener('click', imc);


