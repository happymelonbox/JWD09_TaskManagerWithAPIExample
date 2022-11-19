function createNewCard(){

    // Full new task card
    const cardContainer = document.getElementById("currentTasksContainer")
    const newCard = cardContainer.appendChild(document.createElement("div"))
    newCard.setAttribute(".card")
    const newCardBody = newCard.appendChild(document.createElement("div"))
    newCardBody.setAttribute(".card-body")
}