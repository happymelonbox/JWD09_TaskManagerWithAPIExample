function dueDateValidation(){
    const dueDate = document.getElementById("des")
    const errorH = document.createElement("h6")
    errorH.setAttribute("class", "errors")
    if (dueDate.value === ""){
        errorH.innerHTML = `Please add a description`
        dueDate.after(errorH)
        return false
    }

    if (dueDate.value.length < 15){
        errorH.innerHTML = `Description length must be longer than 15 characters`
        dueDate.after(errorH)
        return false
    }
    return true
}

export default dueDateValidation