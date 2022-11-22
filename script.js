import TaskManager from "./classes/TaskManager.js";
import createNewCard from "./modules/newCard.js";


window.addEventListener('load', ()=>bodyFunction())

function bodyFunction(){
    fetch("https://jwd09-task-api.herokuapp.com")
    .then(resp => resp.json())
    .then(info => {
        localStorage.setItem("tasks", JSON.stringify(info))
    })

    let tasks = localStorage.getItem("tasks")

    JSON.parse(tasks).map(task => {
        createNewCard(task)
    })

    // let newTask = new TaskManager("Sharpen Pencil", "Blunt pencils need sharpening", "Steven","2022-11-19", "Done", "Podlet of fire")
    // newTask.saveNewTask()
}
