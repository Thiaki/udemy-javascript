// Cada vez que chamar ela, ela retorna um objeto contendo o valor retornado e se finalizou
function* geration01() {
    // Código
    yield 'Valor 01'
    // Código
    yield 'Valor 02'
    // Código
    yield 'Valor 03'
}

const g1 = geration01();

console.log(g1.next());
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().done);

console.log('-------------------------')

function* geration02(num1, num2){
    result = num1 + num2;
    console.log('Soma: ');
    yield result;
    result = num1 - num2;
    console.log('Subtração: ');
    yield result;
    result = num1 * num2;
    console.log('Multiplicação: ');
    yield result;
    result = num1 / num2;
    console.log('Divisão: ');
    yield result;
}


const g2 = geration02(2, 5);
for (let valor of g2){
    console.log(valor);
}