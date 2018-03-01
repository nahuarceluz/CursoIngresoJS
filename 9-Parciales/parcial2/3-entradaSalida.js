//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var ancho;
	var largo;
	var	perimetro;
	var resultado;

	ancho=document.getElementById("ancho").value;
	largo=document.getElementById("largo").value;
	ancho=parseInt(ancho);
	largo=parseInt(largo);

	perimetro=ancho*largo;
	resultado= "Se necesitan "+perimetro+" metros de alambre para colocar 6 hilos en el perimetro";
	alert(resultado);
	
}

