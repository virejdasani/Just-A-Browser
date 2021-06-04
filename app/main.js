const {
    app,
    BrowserWindow,
    ipcMain,
} = require("electron")

const path = require("path")

const open = require('open')

function createWindow() {
    const window = new BrowserWindow({
        height: 800,
        width: 1200,
        hasShadow: true,
        resizable: true,
        minWidth: 550,
        minHeight: 400,
        // icon: 'TODO',
        webPreferences: {
            webviewTag: true,
            contextIsolation: false
        }
    })

    window.loadURL(`file://${path.join(__dirname, 'index.html')}`)

    // This opens all links with `target="_blank"` attribute in external browser
    window.webContents.on('new-window', function (event, url) {
        event.preventDefault()
        open(url)
    })

    // Open the DevTools, either of the below work
    // window.webContents.openDevTools()
    // window.webContents.toggleDevTools()

}

// For IPC
// ipcMain.on("message", () => {
//     console.log("do something here")
// })

// When app is ready
app.whenReady().then(() => {
    createWindow()

    app.on('activate', function () {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})