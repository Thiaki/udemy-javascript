function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.cliqueBotao();
        this.pressionaEnter();
    };

    this.clearDisplay = () => {
        this.display.value = '';
    };

    this.apagarUm = () => {
        this.display.value = this.display.value.slice(0, -1);
    };

    this.realizarConta = () => {
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
    };

    this.cliqueBotao = () => {
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
    };

    this.btnDisplay = (texto) => {
        this.display.value += texto;
    };

    this.pressionaEnter = () => {
        this.display.addEventListener('keypress', (e) => {
            if(e.keyCode === 13){
                this.realizarConta();
            }
        })
    }
}

const calculadora = new Calculadora();
calculadora.inicia();
