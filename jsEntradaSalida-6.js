/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
    var numeroUno;
    var numeroDos;
    var resultresultadoo;

    numeroUno= document.getElementById ('numeroUno').value;
    numeroDos= document.getElementById ('numeroDos').value;
    
    numeroUno =parseInt (numeroUno);
    numeroDos =parseInt (numeroDos);

    resultado=numeroUno+numeroDos;

    alert (resultado);


    //Todo lo que devuelva tiene que tener un = al principio.
    //Definir todas las variables arriba.
    //El funcionar es una consecuencia de programar bien.



}

