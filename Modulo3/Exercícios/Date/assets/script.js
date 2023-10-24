const diaDaSemanaTexto = (diaSemana) => {
    if (diaSemana === 0){
        return "Domingo";
    }
    else if (diaSemana === 1){
        return "Segunda"
    }
    else if (diaSemana === 2){
        return "Terça"
    }
    else if (diaSemana === 3){
        return "Quarta"
    }
    else if (diaSemana === 4){
        return "Quinta"
    }
    else if (diaSemana === 5){
        return "Sexta"
    }
    else if (diaSemana === 6){
        return "Sábado"
    }
    else{
        return "Valor Inválido"
    }
    
}

const mesTexto = (mes) => {
    const diasSemana = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return diasSemana[mes];
}

const formatarHoraEMinuto = (hora, minutos) => {
    if (hora <= 9){
        hora = `0${hora}`;
    }
    else if (minutos <= 9){
        minutos
         = `0${minutos}`;
    }
    return `${hora}:${minutos}`
}

const data = new Date();

const diaSemanaNum = data.getDate();
let mes = data.getMonth();
const ano = data.getFullYear();
let diaSemana = data.getDay();
let hora = data.getHours();
let minutos = data.getMinutes();

const h1 = document.querySelector('h1');

h1.textContent = (`${diaDaSemanaTexto(diaSemana)}, ${diaSemanaNum} de ${mesTexto(mes)} de ${ano} ${formatarHoraEMinuto(hora, minutos)}`);