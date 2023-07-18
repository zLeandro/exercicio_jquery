const form = document.getElementById("lista");
const tarefas = [];
let linhas = "";


form.addEventListener("submit", function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha(){
    const inputTarefa = document.getElementById("tarefa");

    if (tarefas.includes(inputTarefa.value)) {
        alert(`A tarefa: ${inputTarefa.value} ja foi inserida`);
    }
    else {
        tarefas.push(inputTarefa.value);
    
        let linha = "<tr>";
        linha += `<td onclick="riscarTarefa(this)">${inputTarefa.value}</td>`;
        linha += "</tr>";
    
        linhas += linha;
    }

    inputTarefa.value = "";
}

function atualizaTabela() {
    const tabela = document.getElementById("tabela");
    tabela.innerHTML = linhas;
}

function riscarTarefa(element) {
    if (element.classList.contains("tarefa-concluida")) {
        element.classList.remove("tarefa-concluida");
    } 
    
    else {
        element.classList.add("tarefa-concluida");
    }}

