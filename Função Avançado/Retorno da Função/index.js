function multiplicador(numeroMultiplicador){
    // numeroMultiplicador fica aqui esperando o vlor da outra função
    return function(numero){
        return numero * numeroMultiplicador;
    }
}

// a variável duplicar recebe a função anônima que multiplica o número, recebendo 2 que será o multiplicador
const duplicar = multiplicador(2);
const triplicar = multiplicador(3);
const quadruplicar = multiplicador(5);

console.log(duplicar(4));
console.log(triplicar(4));
console.log(quadruplicar(4));
