function descriptionValidation(){
    const description = document.getElementById("des")
    const errorH = document.createElement("h6")
    errorH.setAttribute("class", "errors")
    if (description.value === ""){
        errorH.innerHTML = `Please add a description`
        description.after(errorH)
        return false
    }

    if (description.value.length < 15){
        errorH.innerHTML = `Description length must be longer than 15 characters`
        description.after(errorH)
        return false
    }
    return true
}

export default descriptionValidation