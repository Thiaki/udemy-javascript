const numeros = [1, 2, 3, 4, 5, 6];

const [primeiroNumero, segundoNumero, ...resto] = numeros; // Pega os números em order e o [...] faz com que venha todos os outros valores
console.log(primeiroNumero, segundoNumero);
console.log(resto);

const numbers = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(numbers[1][2]);