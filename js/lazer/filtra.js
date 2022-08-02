var campoFiltro = document.querySelector("#filtrar-tabela")

campoFiltro.addEventListener("input", function() {
    var todo = document.querySelectorAll(".do")
    console.log(this.value);
    if (this.value.length > 0) {
        for (var i = 0; i < todo.length; i++) {
            var task = todo[i]
            var tdDo = task.querySelector(".info-do")
            var toDo = tdDo.textContent

            var expressao = new RegExp(this.value, "i")
            if (!expressao.test(toDo)) {
                task.classList.add("invisivel")
            } else {
                task.classList.remove("invisivel")
            }

        }
    }else{
        for (var i = 0; i < todo.length; i++) {
            var task = todo[i]
            task.classList.remove("invisivel")
            
        }
    }
})