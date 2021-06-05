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

    webview.addEventListener('page-title-updated', (title) => {
        document.getElementById("tabText0").innerText = title.title
    })

    // If the page url is updated, the url is reflected in the input field. Note, 'update-target-url' also works instead of 'did-navigate'
    webview.addEventListener('did-navigate', () => {
        document.getElementById("inputField").value = webview.getURL()
    })

    // Update the favicon onto the tab button
    webview.addEventListener('page-favicon-updated', (favicon) => {
        document.getElementById("tab0").style.backgroundImage = "url('" + favicon.favicons[0] + "')"
    })


    // When the site in the webview is loading
    webview.addEventListener('did-start-loading', () => {
        // TODO - add loading animation
    })

    // When the site in the webview has been loaded successfully
    webview.addEventListener('did-stop-loading', () => {
        // TODO - stop loading animation
    })
})