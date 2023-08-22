AOS.init();

const dataEvento = new Date("Mar 02, 2024 00:00:00");
const timeStampDoEvento = dataEvento.getTime();

const contaAsHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    const diferencaTempo = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000*60*60*24;
    const horaEmMs = 1000*60*60;
    const minutoEmMs = 1000*60;
    const segundoEmMs = 1000;

    const diasAteEvento = Math.floor(diferencaTempo/(diaEmMs));
    const horasAteEvento = Math.floor((diferencaTempo%(diaEmMs))/(horaEmMs));
    const minutosAteEvento = Math.floor((diferencaTempo%(horaEmMs))/(minutoEmMs));  
    const segundosAteEvento = Math.floor((diferencaTempo%(minutoEmMs))/(segundoEmMs));   

    document.getElementById("contador").innerHTML = `Faltam ${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s para o aniversário do Claudenir`

    if (diferencaTempo < 0) {
        clearInterval(contaAsHoras);
        document.getElementById("contador").innerHTML = "Evento expirado";
    }
}, 1000)