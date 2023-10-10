let varA = "A"; // transformar varA em B
let varB = "B"; // transformar varB em C
let varC = "C"; // transformar varC em A

/*
const varATemporario = varA;
varA = varB;
varB = varC;
varC = varATemporario;
*/

// OU PODEMOS FAZER

[varA, varB, varC] = [varB, varC, varA]; // Dessa forma tudo é mudado no mesmo tempo

console.log(varA, varB, varC)