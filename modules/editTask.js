function editTask(obj){
    const editedTask = {
        id: obj.id,
        title: document.getElementById("Title").value,
        description: document.getElementById("des").value,
        assigned_to: document.getElementById("assto").value,
        date: document.getElementById("dd").value,
        status: document.getElementById("status").value,
        pod_name: document.getElementById("podName").value
    }
    console.log(editedTask)
    fetch(`https://jwd09-task-api.herokuapp.com/api/v1/tasks/${editedTask.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: editedTask,
      })
        .then((response) => console.log(response.ok))
        // .then((data) => {
        //   console.log('Success:', data);
        // })
        // .catch((error) => {
        //   console.error('Error:', error);
        // });
}

export default editTask