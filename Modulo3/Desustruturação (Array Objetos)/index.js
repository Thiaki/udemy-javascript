// Desustruturação Array
/*
const numeros = [1, 2, 3, 4, 5, 6];

const [primeiroNumero, segundoNumero, ...resto] = numeros; // Pega os números em order e o [...] faz com que venha todos os outros valores
console.log(primeiroNumero, segundoNumero);
console.log(resto);

const numbers = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(numbers[1][2]);
*/

// Desustruração Objeto
const pessoa = {
    nome: "Eduardo",
    sobrenome: "Thiaki",
    idade: 20,
    endereco: {
        rua: "Jardins",
        numero: 200
    },
    dataNascimento: '24/12/2003',
    altura: 1.70
}

// Não exite é um valor padrão se não tiver esse elemento
// foi mudado o nome da variável idade para i
// quando tiver um objeto dentro de outro, colocar entre colchetes e dois pontos
const { nome = "Não existe", sobrenome, idade : i, endereco: {rua: r, numero}, ...resto} = pessoa;

console.log(nome, sobrenome, i, r, numero, resto);