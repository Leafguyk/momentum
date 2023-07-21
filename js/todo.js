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
    toDos = toDos.filter(item => item.id !== parseInt(li.id))
    saveTodos()
}


function paintToDo(newTodoObj) {
    const li = document.createElement('li')
    const span = document.createElement('span')
    const button = document.createElement("button");
    button.innerText = "X"
    button.addEventListener("click", deleteToDo)
    li.id = newTodoObj.id;
    li.appendChild(span)
    li.appendChild(button)
    span.innerText = newTodoObj.text
    toDoList.appendChild(li)
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    };
    toDos.push(newTodoObj)
    paintToDo(newTodoObj)
    saveTodos()
}

toDoForm.addEventListener("submit", handleToDoSubmit)

const savedToDos = localStorage.getItem('todos')

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos
    parsedToDos.forEach(paintToDo)
}