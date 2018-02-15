function Mostrar()
{
//tomo la edad  
    var edad;
    edad= document.getElementById("edad").value 
    if(edad>18)
    {
        alert ("Sos adulto");
    }
    else
    {
        if(edad<13)
        {
            alert ("Sos niño");
        }
        else
        {
            alert("Sos adolescente");
        }
        
    } 

} //FIN DE LA FUNCIÓN