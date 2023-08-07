function AddConteudo(){ 
    const paragrafos = document.querySelectorAll('p');

    for (let i = 0; i < paragrafos.length; i++){
     paragrafos[i].innerText = "oi";
    }
}


