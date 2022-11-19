import TaskManager from "./TaskManager.js";

    fetch("https://jwd09-task-api.herokuapp.com")
    .then(resp => resp.json())
    .then(info => {
        localStorage.setItem("tasks", JSON.stringify(info))
    })

    let tasks = localStorage.getItem("tasks")
    console.log(JSON.parse(tasks))
    JSON.parse(tasks).map(task => {
        document.body.appendChild(document.createElement("p")).innerHTML = `Task Id: ${task.id}<br/>Task Title: ${task.title}<br/>Task Description: ${task.description}<br/>Task Assignment: ${task.assigned_to}<br/>Task Due Date: ${task.date}<br/>Task Status: ${task.status}`
    })

    // let newTask = new TaskManager("Sharpen Pencil", "Blunt pencils need sharpening", "Steven","2022-11-19", "Done", "Podlet of fire")
    // newTask.saveNewTask()