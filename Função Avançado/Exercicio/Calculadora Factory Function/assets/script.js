function criarCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia(){
            this.cliqueBotao();
            this.pressionaEnter();
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagarUm(){
            this.display.value = this.display.value.slice(0, -1);
        },

        realizarConta(){
            let conta = this.display.value;

            try{
                conta = eval(conta);
                if(!conta){
                    alert('Conta inválida');
                    this.display.value = '';
                    return;
                }
                this.display.value = String(conta);
            }
            catch(e) {
                alert("Conta inválida");
            }
        },

        cliqueBotao() {
            document.addEventListener('click', (e) => {
                const el = e.target;
                if (el.classList.contains('btn-num')){
                    this.btnDisplay(el.innerText);
                }
                if (el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }
                if (el.classList.contains('btn-del')){
                    this.apagarUm();
                }
                if (el.classList.contains('btn-eq')){
                    this.realizarConta();
                }

            });
        },

        btnDisplay(texto) {
            this.display.value += texto;
        },

        pressionaEnter(){
            this.display.addEventListener('keypress', (e) => {
                if(e.keyCode === 13){
                    this.realizarConta();
                }
            })
        },
    };
}

const calculadora = criarCalculadora();
calculadora.inicia();
