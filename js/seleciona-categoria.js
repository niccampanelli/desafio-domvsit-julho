const tabelas = {
    trabalho: document.querySelector(".task__trabalho"),
    esporte: document.querySelector(".task__esporte"),
    estudos: document.querySelector(".task__estudo"),
    academia: document.querySelector(".task__academia"),
    lazer: document.querySelector(".task__lazer"),
    cuidados: document.querySelector(".task__especiais")
}

var selecionadas = [];
var listaCategorias = document.querySelector("#rotinas_categorias");

listaCategorias.addEventListener("click", (e) => {

    if(e.target && e.target.classList.contains("categoria")){
        if(selecionadas.length === 2)
            selecionadas.shift();
    
        selecionadas.push({
            categoria: e.target,
            tabela: tabelas[e.target.role]
        });
    
        if(selecionadas.length === 2){
            selecionadas[0].categoria.classList.remove("categoria__selecionada");
            selecionadas[0].tabela.classList.remove("escondido");

            selecionadas[1].categoria.classList.toggle("categoria__selecionada");
            selecionadas[1].tabela.classList.toggle("escondido");
        }
        else{
            selecionadas[0].categoria.classList.toggle("categoria__selecionada");
            selecionadas[0].tabela.classList.toggle("escondido");
        }
    }
})