function deleteFunction(obj){
    console.log(obj)
    fetch(`https://jwd09-task-api.herokuapp.com/api/v1/tasks/${obj.id}`, {
        method: 'DELETE',
        headers: {
         'Content-type': 'application/json; charset=UTF-8'
        },
       })
    .then((response) => response.json())
    .then((data) => {
        console.log('Success:', data)
        alert("Deleted!")
        location.reload()
        })
    .catch((error) => {
        console.error('Error:', error);
    });

}

export default deleteFunction