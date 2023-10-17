function projeto () {
    const formulario = document.querySelector(".formulario");
    const resultado = document.querySelector(".resultado");
    let pessoas = [];

    // Retirando o carregamento da página quando enviar o formulário.
    // colocamos um escutador no click do botão e quando for clicado, retiramos o evento default que ele faz, que é carregar a página
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        const nome = (formulario.querySelector(".nome")).value;
        const sobrenome = (formulario.querySelector(".sobrenome")).value;
        const peso = (formulario.querySelector(".peso")).value;
        const altura = (formulario.querySelector(".altura")).value;

        // colocando as informações que pegamos nesse array em forma de objeto
        pessoas.push(
            {
                nome: nome,
                sobrenome: sobrenome,
                peso: peso,
                altura: altura
            }
        )

        // printando os dados dentro da div resultado
        resultado.innerHTML += "<p>" + nome + " " + sobrenome + " " + peso + " " + altura + "</p>";

        console.log(pessoas);
    })
}

projeto();