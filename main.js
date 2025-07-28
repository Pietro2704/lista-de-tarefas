// criar uma função
function Add(){
    // pegar o valor do input
    const input = document.querySelector("#tarefa").value
    // criar uma li
    const li = document.createElement("li")
    // mudar o texto da li para o valor do input
    li.textContent = input
    // colocar o li na minha ul
    const ul = document.querySelector("#lista")
    ul.appendChild(li)
}


// add um evento de click no botao para fazer a função criada
const btn = document.querySelector("#btn")
btn.addEventListener('click', Add)