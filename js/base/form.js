function baseTodo() {
  var botaoAdicionar = document.querySelector("#adicionar-todo-base");
  botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    //achando elemento
    var form = document.querySelector("#form-adiciona-base");

    //recuperando valor pela função
    var todo = obtemTodoForm(form);

    var erros = validaTodo(todo);

    if (erros.length > 0) {
      exibeMensagensErro(erros);
      return;
    }

    adicionaTodoTabela(todo);

    form.reset();
    var ul = document.querySelector("#mensagens-erro-base");
    ul.innerHTML = "";
  });

  function adicionaTodoTabela(todo) {
    var doTr = montaTr(todo);
    var tabela = document.querySelector(".tbody__base");
    tabela.appendChild(doTr);
  }

  function exibeMensagensErro(erros) {
    var ul = document.querySelector("#mensagens-erro-base");
    ul.innerHTML = "";
    erros.forEach((erro) => {
      var li = document.createElement("li");
      li.textContent = erro;
      ul.appendChild(li);
    });
  }

  function obtemTodoForm(form) {
    var todo = {
      do: form.do.value,
    };
    return todo;
  }

  function montaTr(todo) {
    var doTr = document.createElement("tr");
    doTr.classList.add("do-base");

    //criando td e colocando valor pela função
    //adicionando os td dentro da tr
    doTr.appendChild(montaTd(todo.do, "info-do"));

    return doTr;
  }

  function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
  }

  function validaTodo(todo) {
    var erros = [];

    if (todo.do.length == 0) {
      erros.push("Tarefa não pode ser em branco");
    }

    return erros;
  }
}
