function fetchTasks(){
    fetch("https://jwd09-task-api.herokuapp.com")
    .then(resp => resp.json())
    .then(info => {
        localStorage.setItem("tasks", JSON.stringify(info))
    })
}

export default fetchTasks