function nameValidation(){
    const name = document.getElementById("Title")
    const errorH = document.createElement("h6")
    errorH.setAttribute("class", "errors")
    if (name.value === ""){
        errorH.innerHTML = `Please add a title`
        name.after(errorH)
        return false
    }

    if (name.value.length < 5){
        errorH.innerHTML = `Title length must be longer than 5 characters`
        name.after(errorH)
        return false
    }
    return true
}

export default nameValidation