function subeNivel(){
    nivelActual++;
    document.querySelector("#subir_nivel").play();
}

function actualizaNivel(){
    
    var nivelTexto = nivelActual +1;
    if(nivelTexto <10){
        nivelTexto = "0" + nivelTexto;
    }
}

function cargaNuevoNivel(){
    subeNivel();
    actualizaNivel();
    iniciar();
}