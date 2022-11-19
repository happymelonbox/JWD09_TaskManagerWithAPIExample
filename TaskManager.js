class TaskManager {
    static id = localStorage.getItem("TaskLastestID") > 0 ? localStorage.getItem("TaskLastestID")++ : 0
    constructor(title, description, assigned_to, date, status, pod_name){
        this.id = TaskManager.id
        this.title = title;
        this.description = description;
        this.assigned_to = assigned_to;
        this.date = date;
        this.status = status;
        this.pod_name = pod_name
    }

    saveNewTask(){
        fetch('https://jwd09-task-api.herokuapp.com/api/v1/tasks', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this),
        })
        .then(response =>
            console.log('Success:', response)
        )
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    updateTask(obj){
        fetch(`https://jwd09-task-api.herokuapp.com/api/v1/tasks/${obj.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj),
        })
        .then(response =>
            console.log('Success:', response)
        )
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    removeTask(obj){
        fetch(`https://jwd09-task-api.herokuapp.com/api/v1/tasks/${obj.id}`, {
            method: 'DELETE',
        })
        .then(response =>
            console.log('Success:', response)
        )
        .catch((error) => {
            console.error('Error:', error);
        });
    }
}

export default TaskManager