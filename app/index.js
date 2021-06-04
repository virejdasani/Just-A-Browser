const inputField = document.getElementById("inputField")
const webview = document.getElementById("mainWebView")
const webviewContainer = document.getElementById("mainWebViewContainer")
const goButton = document.getElementById("goButton")

// This is so that the webview looks normal every time the window is reloaded
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

// When the webview is loaded, this is executed
webview.addEventListener('dom-ready', () => {
    // For the back button
    document.getElementById("backButton").addEventListener("click", () => {
        // If can go back, then go back
        if (webview.canGoBack) {
            webview.goBack()
        } else {
            // For some reason, anything put in here has no effect
        }
    })

    // For the forward button
    document.getElementById("forwardButton").addEventListener("click", () => {
        // If can go forward, then go forward
        if (webview.canGoForward) {
            webview.goForward()
        } else {
            // For some reason, anything put in here has no effect
        }
    })

    // To reload the webviews
    document.getElementById("reloadButton").addEventListener("click", () => {
        // Reload the webview
        webview.reload()
    })

    // For the back button
    document.getElementById("homeButton").addEventListener("click", () => {
        // Go to index.html
        location.href = 'index.html'
    })

    // webview.addEventListener('page-title-updated', () => {
    //     // When a page title changes
    // })

    // When the site in the webview is loading
    webview.addEventListener('did-start-loading', () => {
        // TODO - add loading animation
    })

    // When the site in the webview has been loaded successfully
    webview.addEventListener('did-stop-loading', () => {
        // TODO - stop loading animation
    })

    // If the page url is updated, the url is reflected in the input field. Note, 'update-target-url' also works instead of 'did-navigate'
    webview.addEventListener('did-navigate', () => {
        document.getElementById("inputField").value = webview.getURL()
        console.log(webview.getURL())
    })
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