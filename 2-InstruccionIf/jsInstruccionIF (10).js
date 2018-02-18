function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var numero;

	numero= Math.random()*(11-1)+1

	numero= parseInt(numero);

	if(numero>=9)
	{
		alert ("Excelente");
	}
	else if(numero>4)
	{
		alert ("Aprobó!");
	}
	else if(numero<4)
	{
		alert ("Vamos, la proxima se puede");
	}
	
	
		

	
}//FIN DE LA FUNCIÓN