
function Mostrar()
{
    var lado;
    var altura;
    var perimetro;
    var resultado;

    lado=document.getElementById("laBase").value;
    altura=document.getElementById("laBase").value;
    perimetro=document.getElementById("laBase").value;
    lado=parseInt(lado);
    altura=parseInt(altura);
    
    resultado=lado+altura*3;
    alert(resultado);



}
