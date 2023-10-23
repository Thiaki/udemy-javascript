function main() {
    
    // FUNÇÕES
    const removerClasseResultado = () => resultado.classList.remove((resultado.classList).item(resultado.classList - 1));

    const exibirResultado = (texto, imc, resultadoImc, classname) => {
        if (imc == 0 || resultadoImc == 0){
        resultado.innerHTML = texto;

        }
        else{
            resultado.innerHTML = texto + imc + " " + resultadoImc;
        }
        removerClasseResultado();
        resultado.classList.add(classname);
    }
    // ------- //

    const formulario = document.querySelector("#formulario");
    const resultado = document.querySelector("#sucesso-erro");
    const regexNumerica = /^[0-9]*$/;
    let resultadoImc;
    
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
    
        const peso = formulario.querySelector("#peso").value;
        const altura = formulario.querySelector("#altura").value;
    
        let imc = (peso / (altura * altura)).toFixed(1);
        
        if (imc <= 18.5){
            resultadoImc = "Abaixo do Peso";
        }
        else if (imc > 18.5 && imc <= 24.9){
            resultadoImc = "Peso Normal";
        }
        else if (imc > 25 && imc <= 29.9){
            resultadoImc = "Sobrepeso";
        }
        else if (imc > 30 && imc <= 34.9){
            resultadoImc = "Obesidade grau 1";
        }
        else if (imc > 35 && imc <= 39.9){
            resultadoImc = "Obesidade grau 2";
        }
        else if (imc > 40){
            resultadoImc = "Obesidade grau 3";
        }
        
        if (imc > 0){
            exibirResultado("Seu IMC é ", imc, resultadoImc, "sucesso");
        }
        else if (!regexNumerica.test(altura) && !regexNumerica.test(peso)){
            exibirResultado("Peso e Altura Inválidas ", 0, 0, "erro");
        }
        else if (!regexNumerica.test(altura)){
            exibirResultado("Altura Inválida ", 0, 0, "erro");
        }
        else if (!regexNumerica.test(peso)){
            exibirResultado("Peso Inválido ", 0, 0, "erro");
        }   
    
    })
}

main();