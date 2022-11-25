function assignedToValidation(){
    const assignedTo = document.getElementById("assTo")
    const errorH = document.createElement("h6")
    errorH.setAttribute("class", "errors")
    if (assignedTo.value === ""){
        errorH.innerHTML = `Please assign a member`
        assignedTo.after(errorH)
        return false
    }
    return true
}

export default assignedToValidation