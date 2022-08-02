
var tabela = document.querySelector(".tbody__base");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut")
    setTimeout(() =>{
        event.target.parentNode.remove()
    },500)
})


