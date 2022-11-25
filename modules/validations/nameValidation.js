function nameValidation(){
    const name = document.getElementById("Title").value
    const errorH = document.createElement("h4")
    if (name === ""){
        errorH.innerHTML = `Please add a title`
        name.insertAdjacentElement('beforeend', errorH)
        return false
    }

    if (name.length < 5){
        errorH.innerHTML = `Title length must be longer than 5 characters`
        name.insertAdjacentElement('beforeend', errorH)
        return false
    }
    return true
}

export default nameValidation