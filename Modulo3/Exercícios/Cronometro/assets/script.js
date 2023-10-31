function mostrarTempo(){
    let cronometro = new Date();
    cronometro.setHours(0);
    cronometro.setMinutes(0);
    cronometro.setSeconds(0);
    timer.textContent = cronometro.toLocaleTimeString();
}

function iniciar(){
    botaoIniciar.addEventListener('click', (e) => {
        setInterval((a) => timer.textContent = mostrarTempo(), 1000)
    })
}

function pausar() {
    botaoPausar.addEventListener('click', (e) => {
        setInterval((a) => mostrarTempo(), 1000)
        timer.style.color = "red";
    })
}

function zerar() {
    botaoZerar.addEventListener('click', (e) => {
        clearInterval(iniciar());
    })
}


const timer = document.querySelector("#timer");
const botaoIniciar = document.querySelector("#iniciar");
const botaoPausar = document.querySelector("#pausar");
const botaoZerar = document.querySelector("#zerar");

mostrarTempo();
iniciar();
pausar();
zerar();
