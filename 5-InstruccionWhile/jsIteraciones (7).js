function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';

	while(respuesta=="si")
	{
		contador++;
		numero=prompt("Ingrese numero");
		numero=parseInt(numero);
		acumulador=acumulador+numero;

		respuesta= prompt("Desea continuar?");
		
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN