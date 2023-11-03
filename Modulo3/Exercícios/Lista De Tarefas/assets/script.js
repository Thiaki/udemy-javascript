function criarTarefa(tarefa) {
    const botao = document.createElement('button');
    const li = document.createElement('li');
    botao.textContent = "Remover Tarefa";
    botao.classList.add('btn-apagar')
    li.textContent = tarefa;
    htmlLista.appendChild(li);
    li.appendChild(botao);
}

function limparInput(){
    tarefa.value = "";
    tarefa.focus();
}

function adicionarTarefa() {
    if (tarefa.value !== ""){
        criarTarefa(tarefa.value);
        limparInput();
        arrayLista()
    }
    else {
        alert("Tarefa Vazia");
        limparInput();
    }
}

function apagarTarefa() {
    document.addEventListener('click', (e) => {
        const el = e.target;
        if (el.classList.contains('btn-apagar')){
            el.parentElement.remove();
        }
    })
}

function arrayLista() {
    const listaTarefas = document.querySelectorAll('li');
    const lista = [];

    for (let tarefa of listaTarefas) {
        let tarefaTexto = tarefa.textContent;
        tarefaTexto = tarefaTexto.replace('Remover Tarefa', '');
        lista.push(tarefaTexto);
    }
}



const btnAdicionar = document.querySelector('#adicionar');
const tarefa = document.querySelector('#tarefa');
const htmlLista = document.querySelector('#lista'); 



btnAdicionar.addEventListener('click', () => {
    adicionarTarefa();
});

tarefa.addEventListener('keypress', (e) => {
    if (e.keyCode === 13){
        adicionarTarefa();
    }
})

apagarTarefa();
