// Funções
function escreva(texto){
    document.write(texto);
    document.write("<br>");
}
function soma(){
    let resultadoSoma = numero1 + numero2;
    escreva("A soma é: " + resultadoSoma.toFixed(2)); // .toFixed(2) -> fixa 2 casas depos da vírgula
}
function subtracao(){
    let resultadoSubtracao = numero1 - numero2;
    escreva("A subtração é: " + resultadoSubtracao.toFixed(2));
}
function multiplicacao(){
    let resultadoMultiplicacao = numero1 * numero2;
    escreva("A multiplicação é: " + resultadoMultiplicacao.toFixed(2));
}
function divisao(){
    let resultadoDivisao = numero1 / numero2;
    escreva("A divisão é: " + resultadoDivisao.toFixed(2));
}


const numero1 = 100; // Variável que não pode mudar seu valor
const numero2 = parseFloat("10.54"); // Transformando a string para um float

console.log(typeof numero2); // Mostra o tipo da variável (string, number, boolean, undefined, null)
console.log(Number.isInteger(numero1)); // Retorna true ou false para se esse numdero for inteiro ou não

// Exibindo as operações
soma();
subtracao();
multiplicacao();
divisao();


alert("Alerta Alerta Alerta");

let booleanApagar = confirm("Deseja Apagar?"); // Exibe Sim ou Não e retorna um boolean dependendo da opção do usuário
escreva("Usuário clicou em: " + booleanApagar);

let nome = prompt("Digite seu nome:"); // Caixa de digitação para o usuário
escreva("Nome do usuário é: " + nome);

/* -------------- */
