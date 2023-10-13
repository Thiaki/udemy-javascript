// Math.{FUNCAO};
let num1 = 9.89;
let num2 = 223.23;

let arredondarNum1 = Math.round(num1); // round arredonda para o mais próximo
let arredondarNum1BAIXO = Math.floor(num1); // floor arredonda o número para baixo
let arredondarNum1CIMA = Math.ceil(num1); // ceil arredonda o número para cima
let maiorNumero = Math.max(num1, num2); // maior numero
let menorNumero = Math.min(num1, num2); // menor numero
let aleatorio = Math.random(); // Pega um número aleatório entre 1 e 0

console.log("Math.round: " + arredondarNum1);
console.log("Math.floor: " + arredondarNum1BAIXO);
console.log("Math.ceil: " + arredondarNum1CIMA);
console.log("Math.max: " + maiorNumero);
console.log("Math.min: " + menorNumero);
console.log("Math.random: " + (Math.round(aleatorio * 10)));