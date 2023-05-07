const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

let toDos = [];

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(toDos))
}

function deleteToDo(event) {
    const li = event.target.parentElement
    li.remove()
}

function paintToDo(newTodo) {
    const li = document.createElement('li')
    const span = document.createElement('span')
    const button = document.createElement("button");
    button.innerText = "X"
    button.addEventListener("click", deleteToDo)
    li.appendChild(span)
    li.appendChild(button)
    span.innerText = newTodo
    toDoList.appendChild(li)
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo)
    paintToDo(newTodo)
    saveTodos()
}

toDoForm.addEventListener("submit", handleToDoSubmit)

const savedToDos = localStorage.getItem('todos')


if (saveTodos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos
    parsedToDos.forEach(paintToDo)
}