function mostraHora(){
    let data = new Date;

    return data.toLocaleTimeString('pt-BR',{
        hour12: false
    });
}

// SetInterval roda a cada 100 milisegundos essa função
const timer = setInterval(() => console.log(mostraHora()), 1000);

// SetTimeout executa apenas uma vez em 10000 milisegundos
// clearInterval para a execução do timer
setTimeout(() => clearInterval(timer), 10000)

setTimeout(() => console.log("exibindo em 5 seg"), 5000)