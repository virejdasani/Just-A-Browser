const inputField = document.getElementById("inputField")
const webview = document.getElementById("mainWebView")
const webviewContainer = document.getElementById("mainWebViewContainer")
const goButton = document.getElementById("goButton")

// This is so that the webview looks normal every time the window is reloaded
window.onload = resizeWebView()

// TODO - make this work with cmd and ctrl both
document.addEventListener('keyup', (e) => {
    if (e.ctrlKey && e.key === "r") {
        alert("r")
    }
})

// When enter is pressed from the inputField
goButton.addEventListener("click", (event) => {
    // Don't reload the app window
    event.preventDefault()

    // Get the value from the urlInput field 
    let website = inputField.value

    loadSiteToWebView(website)

    // This removes focus from the input field so the cursor doesn't keep blinking when not typing in the field
    inputField.blur()
})





// console.log(document.querySelector("#mainWebView").getAttribute("src"))
// console.log(webview.getTitle())


// For IPC
// const {
//     ipcRenderer,
//     ipcMain
// } = require("electron")

// someButton.addEventListener("click", () => {
//     ipcRenderer.send("message")
// })