// FOR IN
// Passa automaticamente por todo array ou objeto trazendo o número do indice dos elementos
const frutas = ['Pera', 'Maçã', 'Uva'];

const pessoas = {
    nome: 'Eduardo',
    sobrenome: 'Thiaki',
    idade: 20
}

for (let i in frutas){
    console.log(frutas[i]);
}

console.log("");

for (let i in pessoas){
    console.log(pessoas[i])
}