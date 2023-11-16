// Filter - retorna um array com todos os valores com alguma condição

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

/*
const numerosMaior10 = []

for(let i of numeros){
    if(i > 10) numerosMaior10.push(i);
}
console.log(numerosMaior10);
*/

// Pega automaticamente o valor, indice e array completo, depois disso dentro da função é feita uma condição retornando valores da condição
const numerosFiltrados = numeros.filter((valor, indice, array) => {
    return (codição);
})

console.log(numerosFiltrados)


const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const pessoas5Letras = pessoas.filter(valor => valor.nome.length >= 5)
console.log(pessoas5Letras)

const pessoas50Anos = pessoas.filter(valor => valor.idade > 50);
console.log(pessoas50Anos)

const pessoasTerminaComA = pessoas.filter(valor => {
    return valor.nome.toLowerCase().endsWith('a');
});
console.log(pessoasTerminaComA)
