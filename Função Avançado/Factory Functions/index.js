function criarPessoa(nome, sobrenome, altura, peso){
    // Criando um objeto
    return {
        nome,
        sobrenome,
        // Criando uma função dentro do objeto
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join();
        },
        altura,
        peso,
        // get faz com que imc não seja mais uma função e retorne o valor
        imc(){
            // this faz mostrar que será puxado a variável do objeto q esta puxando. Ex: p1, p2
            const resultado = this.peso / (this.altura ** 2);
            return resultado.toFixed(2);
        }
    }
}

const p1 = criarPessoa('Eduardo', 'Thiaki', 1.70, 60);

// Chamando a função
console.log(p1.imc())
// Não precisa dos () pois não se trata mais de uma função
console.log(p1.nomeCompleto);
// Setando um nome e sobrenome dependendo do nome completo
p1.nomeCompleto = 'Jorge romário';
console.log(p1.nome);
console.log(p1.sobrenome);
