
var tabela = document.querySelector(".tbody__trabalho")

tabela.addEventListener("click", function(event) {
    event.target.parentNode.classList.add("checked")
})