
var tabela = document.querySelector(".tbody__estudo")

tabela.addEventListener("click", function(event) {
    event.target.parentNode.classList.add("checked")
})