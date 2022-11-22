import deleteFunction from './deleteFunction.js'
import openModal from './openModal.js'

function createNewCard(obj){
  let column = ""
  if (obj.status.toLowerCase() === "to do"){
   column = "tasksStatusToDo"
  } else if (obj.status.toLowerCase() === "working"){
   column = "tasksStatusWorking"
  } else if (obj.status.toLowerCase() === "review"){
   column = "tasksStatusInReview"
  } else if (obj.status.toLowerCase() === "done"){
   column = "tasksStatusDone"
  }
  const cardContainer = document.getElementById(column)
  const newCard = cardContainer.appendChild(document.createElement("div"))
  newCard.setAttribute("class", "card")
  const newCardBody = newCard.appendChild(document.createElement("div"))
  newCardBody.setAttribute("class", "card-body")
  const cardTitle = newCardBody.appendChild(document.createElement("h5"))
  cardTitle.setAttribute("class", "card-title")
  cardTitle.innerHTML = `${obj.title}`
  const cardDueDate = newCardBody.appendChild(document.createElement("h6"))
  cardDueDate.setAttribute("class", "card-subtitle")
  cardDueDate.setAttribute("class", "mb-2")
  cardDueDate.setAttribute("class", "text-muted")
  cardDueDate.innerHTML = `Due Date: ${obj.date}`
  const cardDescription = newCardBody.appendChild(document.createElement("h6"))
  cardDescription.setAttribute("class", "card-subtitle")
  cardDescription.setAttribute("class", "mb-2")
  cardDescription.setAttribute("class", "text-muted")
  cardDescription.innerHTML = `Description: ${obj.description}`
  const cardAssignedTo = newCardBody.appendChild(document.createElement("h6"))
  cardAssignedTo.setAttribute("class", "card-subtitle")
  cardAssignedTo.setAttribute("class", "mb-2")
  cardAssignedTo.setAttribute("class", "text-muted")
  cardAssignedTo.innerHTML = `Assigned To: ${obj.assigned_to}`
  const cardStatus = newCardBody.appendChild(document.createElement("h6"))
  cardStatus.setAttribute("class", "card-subtitle")
  cardStatus.setAttribute("class", "mb-2")
  cardStatus.setAttribute("class", "text-muted")
  cardStatus.innerHTML = `Status: ${obj.status}`
  const cardPodName = newCardBody.appendChild(document.createElement("h6"))
  cardPodName.setAttribute("class", "card-subtitle")
  cardPodName.setAttribute("class", "mb-2")
  cardPodName.setAttribute("class", "text-muted")
  cardPodName.innerHTML = `Pod Name: ${obj.pod_name}`
  // refactor the above into a function (code smell)
  const deleteButton = newCardBody.appendChild(document.createElement("button"))
  deleteButton.setAttribute("class", "taskCardButtons")
  deleteButton.innerHTML = "Delete"
  deleteButton.addEventListener("click", () => deleteFunction(obj))
  const editButton = newCardBody.appendChild(document.createElement("button"))
  editButton.setAttribute("class", "taskCardButtons")
  editButton.innerHTML = "Edit"
  editButton.setAttribute("data-toggle","modal")
  editButton.setAttribute("data-target", "#myModal")
  editButton.addEventListener("click", () => editButton(obj))
}

  export default createNewCard