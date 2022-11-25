import editTask from "./editTask.js"

function addValuesToModal(obj){
    document.getElementById("Title").setAttribute("value", obj.title)
    document.getElementById("des").setAttribute("value", obj.description)
    document.getElementById("assto").setAttribute("value", obj.assigned_to)
    document.getElementById("dd").setAttribute("value", obj.date)
    document.getElementById("status").setAttribute("value", obj.status)
    document.getElementById("podName").setAttribute("value", obj.pod_name)
    // document.getElementById("btn-Submit").removeEventListener("click")
    document.getElementById("btn-Submit").addEventListener("click", ()=>{editTask(obj)})
}
export default addValuesToModal