import compareDate from "./compareDate.js"

function dueDateValidation(){
    const dueDate = document.getElementById("dd").value
    const dueDateSplit = dueDate.split("-")
    const today = new Date().toLocaleString().split("/")
    const errorH = document.createElement("h6")
    errorH.setAttribute("class", "errors")

    if (dueDate === ""){
        errorH.innerHTML = `Please enter a due date`
        dueDate.after(errorH)
        return false
    }

    if (!compareDate(today, dueDateSplit)){
        errorH.innerHTML = `Due Date must be in the future!`
        description.after(errorH)
        return false
    }

    return true
}

export default dueDateValidation