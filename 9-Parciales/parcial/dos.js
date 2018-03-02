function Mostrar()
{
    var importeFinal;
    var descuento;
    var resultado;

    descuento=prompt("Ingrese descuento");
    importeFinal=prompt("Ingrese importe");
    
    
    
    importeFinal=parseInt(importeFinal);
    descuento=parseInt(descuento);

    resultado=importeFinal*0.21;
    alert(resultado);

}
