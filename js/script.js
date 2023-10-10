function escreva(texto){
    document.write(texto);
    document.write("<br>");
}

function soma(){
    let resultadoSoma = numero1 + numero2 + numero3;
    escreva(resultadoSoma);
}

let nomeVariavel = "Hello Word";
escreva(nomeVariavel);

console.log(typeof nomeVariavel) // Mostra o tipo da variável (string, number, boolean, undefined, null)

const numero1 = 100; // Variável que não pode mudar seu valor
const numero2 = 10.54;
let numero3 = 40;

soma();
