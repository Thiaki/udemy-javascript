// Criando um objeto de pessoa
const pessoa1 = {
    nome: "Eduardo",
    sobrenome: "Yoshida",
    idade: 19
};

const pessoa2 = {
    nome: "Maria",
    sobrenome: "Oliveira",
    idade: 50
};

// arrow function criando pessoa como objeto
const criarPessoa = (nome, sobrenome, idade) => (
    {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
    }
);

const pessoa3 = criarPessoa("Jorge", "Silva", 40)

const pessoa4 = {
    nome: "Matheus",
    sobrenome: "Oliveira",
    idade: 27,
    // Criando uma função como outro atributo
        falar() {
            // this nesse caso está se referindo ao objeto criado
            console.log(this.nome, this.sobrenome);
        }
}

pessoa4.falar()