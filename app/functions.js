// This filters and loads the website argument to the webview
function loadSiteToWebView(value) {
    let url

    // TODO - make it so that if the website doesn't exist, it googles it

    // if (google), then search it on google
    if (!value.includes("http") && !value.includes(".")) {
        // url = "https://" + website + ".com"
        url = "https://www.google.com/search?q=" + value
    }
    // if (http(s)://google), then make it (http(s)://google.com)
    else if (value.includes("http") && !value.includes(".")) {
        url = value + ".com"
    }
    // if (google.(*)), then make it (https://google.(*))
    else if (!value.includes("http") && value.includes(".")) {
        url = "https://" + value
    }
    // if (https://google.com), then keep it (https://google.com)
    else {
        url = value
    }
    document.querySelector("#mainWebView").setAttribute("src", url)
}

// This is executed if the window is resized
function resizeWebView() {
    // The newWebViewWidth is the width of the window - 60px because the tabs container is 60px
    var newWebViewWidth = window.innerWidth - 60
    // This sets the new style to the mainWebViewContainer
    document.getElementById("mainWebViewContainer").style.width = newWebViewWidth + "px"
}

