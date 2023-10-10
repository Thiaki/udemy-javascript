function soma(numero1, numero2){
    const resultadoSoma = parseFloat(numero1) + parseFloat(numero2);
    document.write(resultadoSoma.toFixed(2))
}


let numero1 = prompt("Digite o primeiro número: ");
let numero2 = prompt("Digite o segundo número: ");

soma(numero1, numero2);