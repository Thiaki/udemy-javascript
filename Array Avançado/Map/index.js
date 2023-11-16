// Parecido com o filter, mas pode também alterar os valores em um novo array

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosDobrados = numeros.map(valor => valor * 2)
// console.log(numerosDobrados)



const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const nomesPessoas = pessoas.map(valor => valor.nome)
console.log(nomesPessoas)

const retirarNomeDasPessoas = pessoas.map((valor) => {
    const newObject = {...valor};
    delete newObject.nome;
    return newObject;
})
console.log(retirarNomeDasPessoas)

const idPessoas = pessoas.map((valor, indice) => {
    const newObject = {...valor};
    newObject.id = indice;
    return newObject
})
console.log(idPessoas)
