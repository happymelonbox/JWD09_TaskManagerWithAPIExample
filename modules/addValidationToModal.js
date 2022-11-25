function addValidationToModal(){
    const submitButton = document.getElementById("btn-Submit")
    submitButton.addEventListener("click", () => submitNewTask())
}

export default addValidationToModal