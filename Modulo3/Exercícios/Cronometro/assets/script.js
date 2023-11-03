function criarHoraSegundos(milisegundos){
    const segundos = milisegundos * 1000;
    const date = new Date(segundos);
    return date.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

const relogio = document.querySelector("#timer");
const botaoIniciar = document.querySelector("#iniciar");
const botaoPausar = document.querySelector("#pausar");
const botaoZerar = document.querySelector("#zerar");
let segundos = 0;
let timer;

function iniciarRelogio(){
    timer = setInterval(() => {
        segundos++
        relogio.innerHTML = criarHoraSegundos(segundos);
    }, 1000);
}

botaoIniciar.addEventListener('click', (e) => {
    clearInterval(timer);
    iniciarRelogio();
    relogio.style.color = "white";
})

botaoPausar.addEventListener('click', (e) => {
    clearInterval(timer);
    relogio.style.color = "red";
})

botaoZerar.addEventListener('click', (e) => {
    clearInterval(timer);
    relogio.textContent = '00:00:00';
    segundos = 0;
    relogio.style.color = "white";
})
