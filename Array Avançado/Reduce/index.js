// Reduce retorna apenas um valor para o array inteiro

/* Sintaxe
const valorRetornado = array.reduce((acumulador, valor, indice, arrayInteiro) => {
  // Código
  return acumulador  
} valorInicialDoAcumulador)
*/

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce((acumulador, valor, indice, array) => {
    acumulador = acumulador + valor;
    return acumulador
}, 0)
console.log(total)



// Retornar a pessoa mais velha
const pessoas = [
    {nome: 'Luiz', idade: 20},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 64},
    {nome: 'Wallace', idade: 47},
];
const pessoaMaisVelha = pessoas.reduce((acumulador, valor, indice) => {
    if(acumulador.idade > valor.idade){
        return acumulador
    }
    return valor;
})
console.log(pessoaMaisVelha)