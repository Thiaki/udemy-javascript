let numero = Number(prompt("Digite um número:"));

// Fazendo as operações
const raizQuadrada = numero ** 0.5;
const inteiro = Number.isInteger(numero);
const notANumber = Number.isNaN(numero);
const arrendondarBaixo = Math.floor(numero);
const arrendondarCima = Math.ceil(numero);

// Puxando tags html
const numeroHtml = document.getElementById("numero");
const raizHtml = document.getElementById("raiz");
const inteiroHtml = document.getElementById("int");
const nanHtml = document.getElementById("NaN");
const baixoHtml = document.getElementById("baixo");
const cimaHtml = document.getElementById("cima");
const decimaisHtml = document.getElementById("decimais");

// Atribuindo valores as tags html
numeroHtml.textContent = numero;
raizHtml.textContent = raizQuadrada;
inteiroHtml.textContent = inteiro;
nanHtml.textContent = notANumber;
baixoHtml.textContent = arrendondarBaixo;
cimaHtml.textContent = arrendondarCima;
decimaisHtml.textContent = numero.toFixed(2);