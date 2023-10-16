// Criando um Array
const alunos = ["João", "Maria", "Luiz"];

// Substituindo o primeiro valor do array
alunos[0] = "Eduardo";

// Enviando Mario no FINAL do array
alunos.push("Mario");

// Enviando Roberta no INÍCIO do array
alunos.unshift("Roberta");

console.log("Exibindo o array inteiro: " + alunos)

// Remove o ultimo item do array e coloca na variável removidoFim
const removidoFim = alunos.pop();

// Remove o ultimo item do array e coloca na variável removidoInicio
const removidoInicio = alunos.shift();

console.log("O último item removido: " + removidoFim)
console.log("O primeiro item removido: " + removidoInicio)

// Fatiando o array, sera exibido os itens 0 e 1 apenas 
console.log(alunos.slice(0, 2))
