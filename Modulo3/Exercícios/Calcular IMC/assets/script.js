function main() {
    const formulario = document.querySelector("#formulario");
    const resultado = document.querySelector("#sucesso-erro");
    const regexNumerica = /^[0-9]*$/;
    let resultadoImc
    
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
    
        const removerClasseResultado = () => resultado.classList.remove((resultado.classList).item(resultado.classList - 1)); 
        
        if (imc > 0){
            resultado.innerHTML = `Seu IMC é ${imc} (${resultadoImc})`;
            removerClasseResultado();
            resultado.classList.add("sucesso");
        }
        else if (!regexNumerica.test(altura) && !regexNumerica.test(peso)){
            resultado.innerHTML = "Peso e Altura Inválidas";
            removerClasseResultado();
            resultado.classList.add("erro");
        }
        else if (!regexNumerica.test(altura)){
            resultado.innerHTML = "Altura Inválida";
            removerClasseResultado();
            resultado.classList.add("erro");
        }
        else if (!regexNumerica.test(peso)){
            resultado.innerHTML = "Peso Inválido";
            removerClasseResultado();
            resultado.classList.add("erro");
        }   
    
    })
}

main();