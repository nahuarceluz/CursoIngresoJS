function Mostrar()
{

	var contador=0;
	var numero;
	var acumuladorNegativos=0;
	var contadorNegativos=0;
	var contadorPositivos=0;
	var contadorCeros=0;
	var contadorPares=0;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;
	
	//declarar contadores y variables 
	
	var respuesta="si";
	
	while(respuesta!="no")
	{
		contador++;
		numero=prompt("Ingrese numero");
		numero=parseInt(numero);
		if(numero%2==0)
		{
			contadorPares++;
		}
		if(numero<0)
		{
			acumuladorNegativos=acumuladorNegativos+numero;
			contadorNegativos++;
		}
		else
		{
			if(numero>0)
			{
				acumuladorNegativos=acumuladorNegativos+numero;
				contadorPositivos++
			}
		}
	}
		promedioNegativos=acumuladorNegativos/contadorNegativos;
		promedioPositivos=acumuladorPositivos/contadorPositivos
		diferencia=acumuladorPositivos-acumuladorNegativos;

		respuesta=prompt("No para salir!");




}//FIN DE LA FUNCIÓN