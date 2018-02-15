function Mostrar()
{
//tomo la edad  
    var edad;
    var estadoCivi;

    edad= document.getElementById("edad").value;
    estadoCivi= document.getElementById("estadoCivil").value;
    if(edad<18&&estadoCivi!="soltero")
    {
        alert("Eres muy pequeño para NO ser soltero");
    }
	


}//FIN DE LA FUNCIÓN