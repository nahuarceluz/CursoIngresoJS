function Mostrar()
{
//tomo la edad  
    var edad;
    var estadoCivi;

    edad= document.getElementById("edad").value;
    estadoCivi= document.getElementById("estadoCivil").value;
    if(edad<18&&estadoCivi=="Casado")
    {
        alert("NO HACER NADA");
    }
    else
    {
        alert("Es soltero y no es menor");
    }


}//FIN DE LA FUNCIÓN