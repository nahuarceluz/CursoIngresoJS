//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
	var producto;
	var resultado;

	
	producto=document.getElementById("importe").value;
	producto=parseInt(producto);

	producto=prompt("producto");
	resultado= producto*1.2;
	alert(resultado);
	
}

