//constante que está armazenando o dado que vai ser recebido pelo formulario
// # referencia o id do formulario 
const form  = document.querySelector('#formulario');

// escutando e previnindo o envio do formulario
form.addEventListener('submit', function (e){
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso){

        setResultado( 'Peso invalido', false);
        return;
    }

    if(!altura){

        setResultado('altura invalida', false);
        return;
    }

    const imc= getImc(peso, altura);
    const nivel = getNivelImc(imc);
    
    const msg = `Seu IMC atual é ${imc} (${nivel})`;

    setResultado(msg, true);
});

function getNivelImc (imc){
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade N1', 'Obesidade N2']

    if(imc >= 39.9){
        return nivel[5];
    }else if (imc >= 34.9){
        return nivel[4];
    }else if (imc >= 29.9){
        return nivel[3];
    }else if (imc >= 24.9){
        return nivel[2];
    }else if (imc >= 18.5){  
        return nivel[1];
    }else if(imc < 18.5){
        return nivel [0];
    }
}

//função que está fazendo o calculo do IMC
function getImc(peso, altura){
    const imc = peso / altura ** 2;
    // retornando o IMC com somente duas casas decimais.
    return imc.toFixed(2);
}

function criaParagrafo (){
    const paragrafo = document.createElement('p');
    //adicionando uma classe ao paragrafo via JS
    return paragrafo;
}

//função que fara ser exibido o resultado 
function setResultado (msg, isValid){
    const resultado = document.querySelector('#resultado')
    //setando o resultado no html como o comando innerHTML
    // limpando o resultado
    resultado.innerHTML = '';
    const paragrafo = criaParagrafo();

    if (isValid){
        paragrafo.classList.add('paragrafo-resultado');
    }else{
        paragrafo.classList.add('bad');
    }
    paragrafo.innerHTML= msg;
    //inserindo um elemento no resultado, um filho.
    resultado.appendChild(paragrafo);
}