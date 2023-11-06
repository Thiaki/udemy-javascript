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
        arrayLista();
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
            arrayLista();
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
    // Convertendo um array javascript para uma string JSON
    const tarefaJSON = JSON.stringify(lista);
    // Guarda no localStorage o array lista e coloca o nome de tarefas para poder chamar depois
    localStorage.setItem('tarefas', tarefaJSON);
}

function recuperaTarefas() {
    const tarefas = localStorage.getItem('tarefas');
    const lista = JSON.parse(tarefas);
    
    for(let tarefas of lista){
        criarTarefa(tarefa);
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
recuperaTarefas();
