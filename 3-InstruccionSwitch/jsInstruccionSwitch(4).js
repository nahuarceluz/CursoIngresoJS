function Mostrar()
{
//tomo la edad  
var mesDelAño 
mesDelAño= document.getElementById('mes').value;

    switch (mesDelAño)
    {
        case "Febrero":
            alert ("Este mes tiene 28 días");
            break;
        case "Enero":
        case "Marzo":
        case "Mayo":
        case "Julio":
        case "Agosto":
        case "Octubre":
        case "Diciembre":
            alert ("Este mes tiene 31 días");
            break;
        default:
            alert ("Este mes tiene 30 días");
            break;
        
    }
    

//alert (mesDelAño);
	
	



}//FIN DE LA FUNCIÓN