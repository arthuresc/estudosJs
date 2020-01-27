/* Não preciso de objeto */

var inputTodo = document.querySelector('#app-todo #input-todo');
var submitTodo = document.querySelector('#app-todo #submit-todo');
var todoList = document.querySelector('#app-todo #todo-list');
var todos = [

];

var count = 0;

function renderTodo() {
  todoList.innerHTML = ""; /* Sempre apagara todos os to-do's para a função abaixo renderizar denovo todos eles denovo na tela */
  for (var i = 0; i < todos.length; i++) {
    if (todos[i].check == true){
      var todoElement = document.createElement('li'); /* Cria a <li> que vai segurar cada to-do */
      var textElement = document.createElement('p'); /* Cria o <p> que vai conter o texto de cada to-do */
      var options = document.createElement('div'); /* Cria um elemento <div> para conter as opções do to-do (check e deletar) */
      var checkBtn = document.createElement('div'); /* Cria uma <div> que será o botão de check do to-do */
      var closeBtn = document.createElement('div');/* Cria uma <div> que será o botão de deletar (close) do to-do */
      var text = document.createTextNode(todos[i].text); /* Cria uma variável aonde vai estar gravado a cada passagem do for...of o texto de cada to-do que antes estava no array */
      todoElement.setAttribute('class', 'todo'); /*  */
      textElement.appendChild(text)
      options.setAttribute('class', 'opt-todo')
      checkBtn.setAttribute('class', 'check');
      checkBtn.setAttribute('onclick', 'checkTodo( ' + i + ' )');
      closeBtn.setAttribute('class', 'close');
      closeBtn.setAttribute('onclick', 'closeTodo( ' + i + ' )');
      options.appendChild(checkBtn);
      options.appendChild(closeBtn);
      todoElement.appendChild(textElement);
      todoElement.appendChild(options);
      todoList.appendChild(todoElement); /* Não pode ficar fora do true do if se não da erro na hora de deletar */
    }else{
      var todoElement = document.createElement('li'); /* Cria a <li> que vai segurar cada to-do */
      var textElement = document.createElement('p'); /* Cria o <p> que vai conter o texto de cada to-do */
      var options = document.createElement('div'); /* Cria um elemento <div> para conter as opções do to-do (check e deletar) */
      var checkBtn = document.createElement('div'); /* Cria uma <div> que será o botão de check do to-do */
      var closeBtn = document.createElement('div');/* Cria uma <div> que será o botão de deletar (close) do to-do */
      var text = document.createTextNode(todos[i].text); /* Cria uma variável aonde vai estar gravado a cada passagem do for...of o texto de cada to-do que antes estava no array */
      todoElement.setAttribute('class', 'todo-checked'); /*  */
      textElement.appendChild(text)
      options.setAttribute('class', 'opt-todo')
      checkBtn.setAttribute('class', 'check');
      checkBtn.setAttribute('onclick', 'checkTodo( ' + i + ' )');
      closeBtn.setAttribute('class', 'close');
      closeBtn.setAttribute('onclick', 'closeTodo( ' + i + ' )');
      options.appendChild(checkBtn);
      options.appendChild(closeBtn);
      // todoElement.setAttributeNodeNS('class', 'todo-checked');
      todoElement.appendChild(textElement);
      todoElement.appendChild(options);
      todoList.appendChild(todoElement); /* Não pode ficar fora do true do if se não da erro na hora de deletar */
      console.log('Deu true')
  }
      // var position = todos.lastIndexOf(todo);
    // console.log(position)
    // todoElement.setAttribute('id', '"todo" + position +');
    console.log(closeBtn); /* é só para testar */
    console.log(checkBtn); /* é só para testar */

  }
}
/* Função para adicionar o to-do novo a lista */
function addTodo() {
  let todoObj = { text: (inputTodo.value), check: true};
  todos.push(todoObj);
  renderTodo();
}
submitTodo.onclick = addTodo;

var checkBtn = document.querySelector('.check');

function checkTodo(pos) {
  if (todos[pos].check == true){
    todos[pos].check = false;
    renderTodo();
    console.log('checado')
  } else {
    todos[pos].check = true;
    renderTodo();
    console.log('DESchecado')
  }
}

var closeBtn = document.querySelector('.close');

function closeTodo(pos) {
  todos.splice(pos, 1);
  renderTodo();
  console.log('foi deletado');
}