const zeroEsquerda = (num) => {
    return num <= 9 ? `0${num}` : num
}

const formataData = (data) => {
    const dia = zeroEsquerda(data.getDate());
    const ano = zeroEsquerda(data.getFullYear());
    const mes = zeroEsquerda(data.getMonth() + 1);
    const hora = zeroEsquerda(data.getHours());
    const min = zeroEsquerda(data.getMinutes());
    const seg = zeroEsquerda(data.getSeconds());
    return (`${dia}/${mes}/${ano} ${hora}:${min}:${seg}`)
}

const data = new Date();
console.log(formataData(data));