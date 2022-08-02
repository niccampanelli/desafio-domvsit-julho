
var tabela = document.querySelector(".tbody__academia")

tabela.addEventListener("click", function(event) {
    event.target.parentNode.classList.add("checked")
})