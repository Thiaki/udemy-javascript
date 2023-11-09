// Constroi um objeto
// inicia com letra maiúscula e para chamar, usar new
// não precisa utilizar retur, o new já faz esse papel

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.falarNomeCompleto = () => {
        console.log(`${this.nome} ${this.sobrenome} é meu nome completo`)
    };
}

const p1 = new Pessoa('Eduardo', 'Yoshida');

p1.falarNomeCompleto();