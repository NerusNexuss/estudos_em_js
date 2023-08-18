document.querySelector('#criar').addEventListener('click', criarParagrafo); 

function criarParagrafo()
{ 
    let texto = document.querySelector('#texto'); 

    let paragrafo = document.createElement('p'); 
    paragrafo.textContent = texto.value;  

    document.querySelector('section').appendChild(paragrafo); 

    texto.value = '';

}