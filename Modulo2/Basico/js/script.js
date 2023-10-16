// Funções
function escreva(texto){
    document.write(texto);
    document.write("<br>");
}
// Se caso o valor não foi colocado no parâmetro quando a função for chamada, o valor padrão será 1, assim não dará erro
function soma(n1 = 1, n2 = 1){
    let resultadoSoma = n1 + n2;
    return resultadoSoma.toFixed(2); // .toFixed(2) -> fixa 2 casas depos da vírgula
}
function subtracao(n1, n2){
    let resultadoSubtracao = n1 - n2;
    return resultadoSubtracao.toFixed(2);
}
function multiplicacao(n1, n2){
    let resultadoMultiplicacao = n1 * n2;
    return resultadoMultiplicacao.toFixed(2);
}
// Arrow function:
const divisao = (n1, n2) => (n1 / n2).toFixed(2);


const numero1 = 100; // Variável que não pode mudar seu valor
const numero2 = parseFloat("10.54"); // Transformando a string para um float

console.log(typeof numero2); // Mostra o tipo da variável (string, number, boolean, undefined, null)
console.log(Number.isInteger(numero1)); // Retorna true ou false para se esse numdero for inteiro ou não

// Exibindo as operações
escreva("A soma é: " + soma(numero1, numero2));
escreva("A subtracao é: " + subtracao(numero1, numero2));
escreva("A multiplicacao é: " + multiplicacao(numero1, numero2));
escreva("A divisao é: " + divisao(numero1, numero2));

alert("Alerta Alerta Alerta");

let booleanApagar = confirm("Deseja Apagar?"); // Exibe Sim ou Não e retorna um boolean dependendo da opção do usuário
escreva("Usuário clicou em: " + booleanApagar);

let nome = prompt("Digite seu nome:"); // Caixa de digitação para o usuário
escreva("Nome do usuário é: " + nome);

/* -------------- */
