var inputField = document.getElementById("inputField")
var mainWebView = document.getElementById("mainWebView")
let goButton = document.getElementById("goButton")

// This is so that the webview looks normal every time the window is reloaded
window.onload = resizeWebView()

// When enter is pressed from the inputField
goButton.addEventListener("click", (event) => {
    // Don't reload the app window
    event.preventDefault()

    // Get the value from the urlInput field 
    let website = inputField.value

    // This removes focus from the input field so the cursor doesn't keep blinking when not typing in the field
    inputField.blur()

    loadSiteToWebView(website)
})

// This is executed if the window is resized
function resizeWebView() {
    // The newWebViewWidth is the width of the window - 60px because the tabs container is 60px
    let newWebViewWidth = window.innerWidth - 60
    // This sets the new style to the mainWebViewContainer
    document.getElementById("mainWebViewContainer").style.width = newWebViewWidth + "px"
}

// This filters and loads the website argument to the webview
function loadSiteToWebView(website) {
    document.querySelector("#mainWebView").setAttribute("src", website)

}


// For IPC
// const {
//     ipcRenderer,
//     ipcMain
// } = require("electron")

// someButton.addEventListener("click", () => {
//     ipcRenderer.send("message")
// })