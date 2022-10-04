function iniciarCronometro(){
    var segundos = 60;
    var minutos =0;
    var segundosTextos;
    var minutosTextos;
    var cronometro;

    function actualizarContador(){
        segundos--;
        if(segundos < 0){
            segundos = 59;
            minutos--;
        }
        if(minutos < 0){
            segundos=0;
            minutos=0;
            clearInterval(cronometro);
        }
        segundosTextos=segundos;
        minutosTextos=minutos;

        if(segundos <10){
            segundosTextos = "0"+segundos;
        }
        if(minutos <10){
            minutosTextos = "0"+minutos;
        }
        document.querySelector("#minutos").innerText = minutosTextos;
        document.querySelector("#segundos").innerText = segundosTextos;

    }
    cronometro = setInterval(actualizarContador,1000);
}