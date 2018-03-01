//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var mes;
	mes=prompt("Ingrese un mes");
	
	switch(mes)
	{
		case "enero":
			alert("Veranito");
			break;
			
		case "Febrero":
			alert("Veranito");
			break;
		
		default:
			alert("Extraño el verano");
			break;

	}
	
}

