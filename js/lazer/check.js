
var tabela = document.querySelector(".tbody__lazer")

tabela.addEventListener("click", function(event) {
    event.target.parentNode.classList.add("checked")
})