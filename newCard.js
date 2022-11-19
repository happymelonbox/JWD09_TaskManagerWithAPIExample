function createNewCard(obj){
    const cardContainer = document.getElementById("currentTasksContainer")
    const newCard = cardContainer.appendChild(document.createElement("div"))
    newCard.setAttribute("class", "card")
    const newCardBody = newCard.appendChild(document.createElement("div"))
    newCardBody.setAttribute("class", "card-body")
    const cardTitle = newCardBody.appendChild(document.createElement("h5"))
    cardTitle.setAttribute("class", "card-title")
    cardTitle.innerHTML = `${obj.cardTitle}`
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
    cardAssignedTo.innerHTML = `Description: ${obj.assigned_to}`
    const cardStatus = newCardBody.appendChild(document.createElement("h6"))
    cardStatus.setAttribute("class", "card-subtitle")
    cardStatus.setAttribute("class", "mb-2")
    cardStatus.setAttribute("class", "text-muted")
    cardStatus.innerHTML = `Description: ${obj.status}`
    const cardPodName = newCardBody.appendChild(document.createElement("h6"))
    cardPodName.setAttribute("class", "card-subtitle")
    cardPodName.setAttribute("class", "mb-2")
    cardPodName.setAttribute("class", "text-muted")
    cardPodName.innerHTML = `Description: ${obj.pod_name}`
    const deleteButton = newCardBody.appendChild(document.createElement("button"))
    deleteButton.innerHTML = "Delete"
    const editButton = newCardBody.appendChild(document.createElement("button"))
    editButton.innerHTML = "Edit"
}

  export default createNewCard