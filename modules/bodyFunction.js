import TaskManager from "../classes/TaskManager.js";
import createNewCard from "./createNewCard.js";
import fetchTasks from "./fetchTasks.js";
import displayTasks from "./displayTasks.js"

function bodyFunction(){
    fetchTasks();
    displayTasks();
    addValidationToModal();

    // let newTask = new TaskManager("Sharpen Pencil", "Blunt pencils need sharpening", "Steven","2022-11-19", "Done", "Podlet of fire")
    // newTask.saveNewTask()

    

}

export default bodyFunction