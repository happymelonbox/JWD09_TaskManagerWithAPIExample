import TaskManager from "../classes/TaskManager.js";
import createNewCard from "./createNewCard.js";

function displayTasks(){
    let tasks = TaskManager.getAllTasks()

    tasks.map(task => {
        createNewCard(task)
    })
}

export default displayTasks