
var tabela = document.querySelector(".tbody__esporte")

tabela.addEventListener("click", function(event) {
    event.target.parentNode.classList.add("checked")
})