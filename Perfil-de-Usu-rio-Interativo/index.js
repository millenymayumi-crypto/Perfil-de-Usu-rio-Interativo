const tituloNome = document.querySelector(".titulo");
const imagemUsuario = document.querySelector(".imagem-usuario");
const inputNome = document.querySelector(".input-nome");
const btnAddName = document.querySelector(".btn-add-name");
const tarefa = document.querySelector(".tarefa");
const inputTarefa = document.querySelector(".input-tarefa");
const btnAddTask = document.querySelector(".btn-add-task");
const listaTarefas = document.querySelector(".lista-tarefas");
const btnClear = document.querySelector(".clear");
const imagemPadrao = "./img/men.png";

// ---- Carregar dados salvos ----

// Carregar nome salvo
const nomeSalvo = localStorage.getItem("nomeUsuario");
if(nomeSalvo) {
    tituloNome.textContent = nomeSalvo;
}
// Carregar imagem salva
const imagemSalva  = localStorage.getItem("imagemUsuario");
if(imagemSalva) {
    imagemUsuario.src = imagemSalva;
}


// ---- NOME ----
btnAddName.addEventListener("click", () => {

    const nome = inputNome.value.trim();

    if(nome === "") {
        alert("Escreva seu nome")
    } else {
        tituloNome.textContent = nome;
        inputNome.value = "";
        localStorage.setItem("nomeUsuario", nome);
    }
});

// ---- IMAGEM ----
btnAddTask.addEventListener("click", () => {
    
    const arquivo = inputTarefa.files[0];

    if(!arquivo || !arquivo.type.startsWith("image/")) { // “se não tiver arquivo selecionado” OU não for um arquivo de imagem
        alert("Selecione uma imagem");
        return;
    }

    // Validação de tamanho: máximo 2MB
    const maxSize = 2 * 1024 * 1024; // 2MB em bytes
    if(arquivo.size > maxSize) {
        alert("A imagem é muito grande. Escolha uma menor que 2MB.");
        return;
    }

    const leitor = new FileReader();

    leitor.onload = () => {
        imagemUsuario.src = leitor.result;
        localStorage.setItem("imagemUsuario", leitor.result);
    };     
    
    leitor.readAsDataURL(arquivo);
    inputTarefa.value = "";
    
});

btnClear.addEventListener("click", () => {

    inputNome.value = "";

    tituloNome.textContent = "";

    imagemUsuario.src = "./img/men.png";

    localStorage.removeItem("nomeUsuario");
    localStorage.removeItem("imagemUsuario");
})