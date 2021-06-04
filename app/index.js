var inputField = document.getElementById("inputField")
let goButton = document.getElementById("goButton")

// When enter is pressed from the inputField
goButton.addEventListener("click", (event) => {
    // Don't reload the app window
    event.preventDefault()

    // Get the value from the urlInput field 
    let website = inputField.value

    // This removes focus from the input field so the cursor doesn't keep blinking when not typing in the field
    inputField.blur()

    console.log(website)
})


// For IPC
// const {
//     ipcRenderer,
//     ipcMain
// } = require("electron")

// someButton.addEventListener("click", () => {
//     ipcRenderer.send("message")
// })