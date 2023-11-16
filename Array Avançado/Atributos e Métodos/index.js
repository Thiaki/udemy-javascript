const nomes = ['Eduardo', 'Otávio', 'Vitoria', 'Marcos', 'Fernanda'];

// Apaga o último elemento
nomes.pop();
// Adiciona um elemento
nomes.push('João');




// Vai até o elemento de indice 3, e remove 2 elementos contando com ele, depois adiciona Roberta no array  
const removidos = nomes.splice(3, 2, 'Roberta')

console.log(nomes)
console.log(removidos)
