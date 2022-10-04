function barajaTarjetas(lasTarjetas){
    var resultado;
    var totalTarjetas = lasTarjetas.concat(lasTarjetas);
    resultado = totalTarjetas.sort(
        function(){
          return  0.5 - Math.random();
        }
    );
   return resultado;
}

//funcion que crea divs en el html con un foreach()
function reparteTarjetas(lasTarjetas){

    var mesa = document.querySelector("#mesa");
    var tarjetasBarajadas = barajaTarjetas(lasTarjetas);
    mesa.innerHTML = "";

    tarjetasBarajadas.forEach(
        function(elemento){
            
        var tarjeta = document.createElement("div");
        tarjeta.innerHTML=
        "<div class='tarjeta' data-valor="+
        elemento+
        ">"+
            "<div class='tarjeta__contenido'>"+
            "<img class='imgT' src='assets/"+elemento+"'/>"+
            "</div>"+
        "</div>";
        mesa.appendChild(tarjeta);

        }
    );
}