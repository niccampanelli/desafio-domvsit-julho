
var tabela = document.querySelector("table")

tabela.addEventListener("click", function(event) {
    event.target.parentNode.classList.add("checked")
})