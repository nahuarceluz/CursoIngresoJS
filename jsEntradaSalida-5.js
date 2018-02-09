/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostar()
{
    var nombre;
    var edad;
    nombre= document.getElementById ('elNombre').value;
    edad= document.getElementById ('laEdad').value;
    
    alert("Usted se llama "+nombre+" y tiene +edad+ años");
    
    
    ///alert(nombre);

    /*
    nombre="jose";
    alert ("nombre");
    alert ("su nombre es"+ nombre);
    nombre=prompt("Ingrese nombre");
    document.getElementById("elId").value=nombre;
    nombre=document.getElementById("elId").value
    /*
}

