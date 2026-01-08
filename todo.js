console.log("JS loaded")

const taskInput = document.getElementById('input')
const submitButton = document.getElementById('submitBtn')
const todoList = document.getElementById('todo-list')

// window.prompt("aeergdrgsr:", submitButton.innerHTML)

// https://www.youtube.com/watch?v=G0jO8kUrg-I
// https://www.youtube.com/watch?v=cijPd-TXPn4
// https://www.youtube.com/watch?v=NziV9JRUzrA&pp=ugUHEgVlbi1VUw%3D%3D
// code TV

submitButton.onclick = function getInput() {
    if (taskInput.value === '') {
        alert("'nothing' can't be in your to do list")
    } else {
    let li = document.createElement("li")
    li.innerHTML = taskInput.value
    todoList.appendChild(li)
    let spanD = document.createElement("span")
    spanD.setAttribute("class","spanDel")
    spanD.innerHTML = "DELETE"
    li.appendChild(spanD)
    let spanE = document.createElement("span")
    spanE.innerHTML = "EDIT"
    spanE.setAttribute("class","spanEd")
    li.appendChild(spanE)
    }
    taskInput.value = ''
    save()
}

/* 
addGloblEventListener("click", "div", e => {
        console.log("hi")
    } )

function addGlobalEventListener(type, selector, callBack) {
    (id).addEventListener(type, e => {
        if (e.target.matches(selector)) callback(e)
    })
}
*/

todoList.addEventListener("click", function(t) { 
    // const spanDelete = document.querySelector(".spanDel")
    // const spanDelete = li.querySelector("spanDel")
    // const spanEdit = document.querySelector(".spanEd")
    const li = t.target.parentElement

    if (t.target.tagName === "LI") { 
        t.target.classList.toggle("complete")
        // t.target.style.textDecoration = "line-through"
        // t.target.style.color = "green"
        // console.log(":p")
        save()
    } else if (t.target.classList.contains("spanDel")) {
        t.target.parentElement.remove()
        save()
    } else if (t.target.classList.contains("spanEd")) {
        const update = prompt("Edit Task:", t.target.parentElement.firstChild.textContent)
    
        if (update !== null && update !== "") {
            t.target.parentElement.firstChild.textContent = update
            t.target.parentElement.classList.remove("complete")
            save()
        }
        /* if (update !== null) {
            li.textContext = update
            li.classList.remove("complete")
        }
        */
    }
}, false)

function save() {
    localStorage.setItem("tasks" , todoList.innerHTML) // f*** ToT
}

function load() {
    todoList.innerHTML = localStorage.getItem("tasks")
}
load()