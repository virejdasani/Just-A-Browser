const inputField = document.getElementById("inputField")
const webview = document.getElementById("mainWebView")
const webviewContainer = document.getElementById("mainWebViewContainer")
const goButton = document.getElementById("goButton")

window.onload = resizeWebView()

document.addEventListener("keyup", (e) => {
    // if (e.key === "Meta" || e.key === "Control") {
    //     // e.preventDefault()
    //     console.log(e)
    //     ctrlPressed = true
    // }
    // if (e.key === "r" && ctrlPressed === true) {
    //     alert()
    // }
    // TODO - ctrl + r reloads
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