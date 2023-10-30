function random(min, max){
    let r = Math.round(Math.random()  * (max - min) + min);
    return r;
}


let ran = random(1, 10);

// Olha a condição e depois faz o código
while(ran !== 10){
    ran = random(1, 10);
    console.log(ran)
};


// Faz o código e depois checa a condição
do{
    ran = random(1, 10);
    console.log(ran)
} while(ran !== 10)