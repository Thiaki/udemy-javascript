let nome = prompt("Digite seu nome completo: ");


nomeTamanho = nome.length;
nomeSegundaLetra = nome[1];
nomeLetraAPrimeiro = (nome.indexOf("a")) + 1;
nomeLetraAUltimo = (nome.lastIndexOf("a")) + 1;
nome3LetrasUltima = nome.slice(-3);
nomeSeparadas = nome.split(" ");
nomeMaiusculo = nome.toUpperCase();
nomeMinusculo = nome.toLowerCase();


document.body.innerHTML += `Seu nome é: ${nome}<br />`;
document.body.innerHTML += `Seu nome tem ${nomeTamanho} letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nomeSegundaLetra} <br />`;
document.body.innerHTML += `Qual o primeiro índice da letra a no seu nome? ${nomeLetraAPrimeiro}<br />`;
document.body.innerHTML += `Qual o último índice da letra a no seu nome? ${nomeLetraAUltimo}<br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome3LetrasUltima}<br />`;
document.body.innerHTML += `As palavras do seu nome são: ${nomeSeparadas}<br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nomeMaiusculo}<br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${nomeMinusculo}<br />`;