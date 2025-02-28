const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('input');
const loginButton = loginForm.querySelector('button');
const greeting = document.querySelector('#greeting')

HIDDEN_CLASSNAME = 'hidden'
USERNAME_KEY = 'username'

function onLoginSubmit(event) {
    event.preventDefault()
    const username = loginInput.value
    localStorage.setItem(USERNAME_KEY, username)
    console.log(username)
    loginForm.classList.add(HIDDEN_CLASSNAME)
    greeting.classList.remove(HIDDEN_CLASSNAME)
    greeting.innerText = `Hello! ${username}`
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener('submit', onLoginSubmit)
} else {
    greeting.classList.remove(HIDDEN_CLASSNAME)
    greeting.innerText = `Hello! ${savedUsername}`
}