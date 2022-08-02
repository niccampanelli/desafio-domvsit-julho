
var tabela = document.querySelector(".tbody__especiais")

tabela.addEventListener("click", function(event) {
    event.target.parentNode.classList.add("checked")
})