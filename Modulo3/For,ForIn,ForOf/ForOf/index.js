// FOR OF
// Passa automaticamente por todo array ou objeto trazendo o valor dos elementos
const nome = ['Eduardo', 'Thiaki'];

// IN - retorna no número do indice
for (let i in nome){
    console.log(i);
    console.log(nome[i]); // Para trazer o valor
}

console.log("");

// OF - retorna o valor
for (let i of nome){
    console.log(i);
}