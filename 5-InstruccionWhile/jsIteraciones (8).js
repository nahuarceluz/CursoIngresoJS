function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';

	while(respuesta=="si")
	{
		numero=prompt("ingrese numeros");
		numero=parseInt(numero);
		while(isNaN(numero))
		{
			numero=prompt("Ingrese numeros");
			numero=parseInt(numero);
		}
			if(numero>0)
			{
				positivo= positivo-negativo
			}
			else if(numero!=0)
			{
				negativo= negativo*positivo
			}

	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN