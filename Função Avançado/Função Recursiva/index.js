// Funções recursivas se chamam dentro da função para ficar em um loop
function recursiva(max){
    // return para terminar o código caso max seja 10
    if(max > 10) return;
    console.log(max)
    max++;
    recursiva(max)
}

recursiva(-10)