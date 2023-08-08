function somar(){
    som1 = Number(document.getElementById("som1").value); 
    som2 = Number(document.getElementById("som2").value); 

    let resultado = som1 + som2; 
    
    document.getElementById('resultado').innerText = "Resultado: " + resultado;


}