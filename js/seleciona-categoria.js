var base = document.querySelector('.task__base')

var trabalho = document.querySelector(".trabalho")
var trabalhoTabela = document.querySelector(".task__trabalho")

trabalho.addEventListener("click", function() {
    trabalhoTabela.classList.toggle("escondido")
    trabalho.classList.toggle("categoria__selecionada")

    esporteTabela.classList.remove("escondido")
    esporte.classList.remove("categoria__selecionada")

    estudoTabela.classList.remove("escondido")
    estudo.classList.remove("categoria__selecionada")

    academiaTabela.classList.remove("escondido")
    academia.classList.remove("categoria__selecionada")

    lazerTabela.classList.remove("escondido")
    lazer.classList.remove("categoria__selecionada")

    especiaisTabela.classList.remove("escondido")
    especiais.classList.remove("categoria__selecionada")
    
    
})



var esporte = document.querySelector(".esporte")
var esporteTabela = document.querySelector(".task__esporte")

esporte.addEventListener("click", function() {
    esporteTabela.classList.toggle("escondido")
    esporte.classList.toggle("categoria__selecionada")

    trabalhoTabela.classList.remove("escondido")
    trabalho.classList.remove("categoria__selecionada")


    estudoTabela.classList.remove("escondido")
    estudo.classList.remove("categoria__selecionada")

    academiaTabela.classList.remove("escondido")
    academia.classList.remove("categoria__selecionada")

    lazerTabela.classList.remove("escondido")
    lazer.classList.remove("categoria__selecionada")

    especiaisTabela.classList.remove("escondido")
    especiais.classList.remove("categoria__selecionada")
})



var estudo = document.querySelector(".estudo")
var estudoTabela = document.querySelector(".task__estudo")

estudo.addEventListener("click", function() {
    estudoTabela.classList.toggle("escondido")
    estudo.classList.toggle("categoria__selecionada")

    trabalhoTabela.classList.remove("escondido")
    trabalho.classList.remove("categoria__selecionada")

    esporteTabela.classList.remove("escondido")
    esporte.classList.remove("categoria__selecionada")


    academiaTabela.classList.remove("escondido")
    academia.classList.remove("categoria__selecionada")

    lazerTabela.classList.remove("escondido")
    lazer.classList.remove("categoria__selecionada")

    especiaisTabela.classList.remove("escondido")
    especiais.classList.remove("categoria__selecionada")

   
})



var academia = document.querySelector(".academia")
var academiaTabela = document.querySelector(".task__academia")

academia.addEventListener("click", function() {
    academiaTabela.classList.toggle("escondido")
    academia.classList.toggle("categoria__selecionada")

    trabalhoTabela.classList.remove("escondido")
    trabalho.classList.remove("categoria__selecionada")

    esporteTabela.classList.remove("escondido")
    esporte.classList.remove("categoria__selecionada")

    estudoTabela.classList.remove("escondido")
    estudo.classList.remove("categoria__selecionada")


    lazerTabela.classList.remove("escondido")
    lazer.classList.remove("categoria__selecionada")

    especiaisTabela.classList.remove("escondido")
    especiais.classList.remove("categoria__selecionada")

   
})



var lazer = document.querySelector(".lazer")
var lazerTabela = document.querySelector(".task__lazer")

lazer.addEventListener("click", function() {
    lazerTabela.classList.toggle("escondido")
    lazer.classList.toggle("categoria__selecionada")

    trabalhoTabela.classList.remove("escondido")
    trabalho.classList.remove("categoria__selecionada")

    esporteTabela.classList.remove("escondido")
    esporte.classList.remove("categoria__selecionada")

    estudoTabela.classList.remove("escondido")
    estudo.classList.remove("categoria__selecionada")

    academiaTabela.classList.remove("escondido")
    academia.classList.remove("categoria__selecionada")

    especiaisTabela.classList.remove("escondido")
    especiais.classList.remove("categoria__selecionada")

  
})



var especiais = document.querySelector(".especiais")
var especiaisTabela = document.querySelector(".task__especiais")

especiais.addEventListener("click", function() {
    especiaisTabela.classList.toggle("escondido")
    especiais.classList.toggle("categoria__selecionada")

    trabalhoTabela.classList.remove("escondido")
    trabalho.classList.remove("categoria__selecionada")

    esporteTabela.classList.remove("escondido")
    esporte.classList.remove("categoria__selecionada")

    estudoTabela.classList.remove("escondido")
    estudo.classList.remove("categoria__selecionada")

    academiaTabela.classList.remove("escondido")
    academia.classList.remove("categoria__selecionada")

    lazerTabela.classList.remove("escondido")
    lazer.classList.remove("categoria__selecionada")

   

})


