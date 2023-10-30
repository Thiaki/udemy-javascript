const paragrafo = document.querySelector('.paragrafos');
const ps = paragrafo.querySelectorAll('p');

const estiloBody = getComputedStyle(document.body);
const backgroundcolorBody = estiloBody.backgroundColor;

// console.log(backgroundcolorBody);

for (let p of ps){
    console.log(p);
    p.style.backgroundColor = backgroundcolorBody;
    p.style.color = '#fff';
}
