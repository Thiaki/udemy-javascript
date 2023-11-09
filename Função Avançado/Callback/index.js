// Função de callback é utilizada pois em uma aplicação nem semple acontece tudo na ordem, e nesse caso precisamos que uma função aconteça antes da outra para que não de erro.

/* queremos que execute
    f1
    f2
    f3
    olá mundo
*/

/* Dessa forma está dando errado pois os tempos de execução estão aleatórios
function tempoAleatorio (max = 3000 , min = 1000){
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1(){
    setTimeout(() =>{
        console.log('f1');
    }, tempoAleatorio())
}

function f2(){
    setTimeout(() =>{
        console.log('f2');
    }, tempoAleatorio())
}

function f3(){
    setTimeout(() =>{
        console.log('f3');
    }, tempoAleatorio())
}

f1();
f2();
f3();
console.log('Olá mundo')
*/

// CRIANDO CALLBACK

function tempoAleatorio (max = 3000 , min = 1000){
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1(callback){
    setTimeout(() =>{
        console.log('f1');
        // se existir um callback, executa esse callback (depois de executar essa função)
        if (callback) callback();
    }, tempoAleatorio())
}

function f2(callback){
    setTimeout(() =>{
        console.log('f2');
        if (callback) callback();
    }, tempoAleatorio())
}

function f3(callback){
    setTimeout(() =>{
        console.log('f3');
        if (callback) callback();
    }, tempoAleatorio())
}

// Está chamado todas as funções
f1(f1Callback);

function f1Callback(){
    f2(f2Callback);
}

function f2Callback(){
    f3(f3Callback);
}

function f3Callback(){
    console.log('Olá mundo');
}
