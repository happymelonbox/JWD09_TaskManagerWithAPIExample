import TaskManager from "./TaskManager.js";

window.addEventListener('load', bodyFunction)

function bodyFunction(){
    fetch("https://jwd09-task-api.herokuapp.com")
    .then(resp => resp.json())
    .then(info => {
        localStorage.setItem("tasks", JSON.stringify(info))
    })

    

    let tasks = localStorage.getItem("tasks")
    const taskContainer = document.getElementById("currentTasksContainer")
    
    JSON.parse(tasks).map(task => {
        taskContainer.appendChild(document.createElement("p")).innerHTML = `Task Id: ${task.id}<br/>Task Title: ${task.title}<br/>Task Description: ${task.description}<br/>Task Assignment: ${task.assigned_to}<br/>Task Due Date: ${task.date}<br/>Task Status: ${task.status}`
    })

    // let newTask = new TaskManager("Sharpen Pencil", "Blunt pencils need sharpening", "Steven","2022-11-19", "Done", "Podlet of fire")
    // newTask.saveNewTask()
}

  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>