const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
]

const container = document.querySelector(".container");
const divCriada = document.createElement("div");

for (i = 0; i < elementos.length ; i++){
    const {tag, texto} = elementos[i];
    let element = document.createElement(tag);
    let text = document.createTextNode(texto);
    element.appendChild(text);
    divCriada.appendChild(element);
}

container.appendChild(divCriada);