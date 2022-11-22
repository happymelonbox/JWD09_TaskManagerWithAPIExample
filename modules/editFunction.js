function editFunction(obj){
    fetch(`https://jwd09-task-api.herokuapp.com/api/v1/tasks/${obj.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
}

export default editFunction