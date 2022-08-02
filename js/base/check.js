
var tabela = document.querySelector(".tbody__base")

tabela.addEventListener("click", function(event) {
    event.target.parentNode.classList.add("checked")
})