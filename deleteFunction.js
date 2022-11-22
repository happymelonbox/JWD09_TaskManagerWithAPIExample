function deleteFunction(obj){
    console.log(obj)
    fetch(`https://jwd09-task-api.herokuapp.com/api/v1/tasks/${obj.id}`, {
        method: 'DELETE',
        headers: {
         'Content-type': 'application/json; charset=UTF-8'
        },
       })
    .then(resp => console.log(resp))
    .then(info => {
        alert("Deleted!")
        location.reload()
    })

}

export default deleteFunction