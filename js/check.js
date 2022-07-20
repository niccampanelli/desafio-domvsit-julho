
var tabela = document.querySelector("tbody")

tabela.addEventListener("click", function(event) {
    event.target.parentNode.classList.add("checked")
})