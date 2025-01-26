const showMessage = (message, status, showMessage) => {
    const outputMessage = document.querySelector(".output-message")
    let TypeClass = ""
    showMessage === true ? TypeClass = "d-flex" : TypeClass = "d-none"

    outputMessage.classList.remove("d-none","d-flex", "status-error", "status-success", "status-warning")
    outputMessage.querySelector("h3").textContent = message;
    outputMessage.classList.add(TypeClass, status)
    console.log("classe atual", TypeClass)
}

export default showMessage