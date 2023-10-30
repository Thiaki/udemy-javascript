const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let numero of numeros){

    if (numero === 2){
        console.log("Pular número 2");
        continue // Não cpmtinua o fluxo, apenas retorna para o for sem fazer o que está abaixo do continue
    }

    if (numero === 7){
        console.log("7 encontrad, saindo do fluxo...");
        break // Faz com que o laço pare de ser executado
    }

    console.log(numero);
}