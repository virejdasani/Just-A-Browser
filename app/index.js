const { ipcRenderer, ipcMain } = require("electron")


// cancelBtn.addEventListener("click", () => {
//     ipcRenderer.send("browser-close")
// })

// maximizeBtn.addEventListener("click", () => {
//     if (maximizeBtn.src.includes("enlarge.png")) {
//         ipcRenderer.send("browser-maximize")
//         maximizeBtn.src = "./assets/smaller_screen.png"
//     } else {
//         ipcRenderer.send("browser-smallify")
//         maximizeBtn.src = "./assets/enlarge.png"
//     }
// })

// minimizeBtn.addEventListener("click", () => {
//     ipcRenderer.send("browser-minimize")
// })

// ipcRenderer.on("maximized-success", () => {
//     ipcRenderer.send("browser-maximize")
//     maximizeBtn.src = "./assets/smaller_screen.png"
// })

// if (localStorage.getItem("first-time") === null) {
//     page.innerHTML = 
//     `
//     <div class="intro">
//         <br/>
//         <br/>
//         <br/>
//         <img src="./assets/BrowserLogo.png" class="intro-img">
//         <h1>Welcome To Browser</h1>
//         <h3>Your Legendary Browsing Experience Begins Here</h3>
//         <br/>
//         <br/>
//         <h2>Before Getting Started</h2>
//         <h4>Browser Might Be A Little Different Than Your Other Usual Browsers</h4>
//         <div class="points">
//         <span class="point">You can drag the Browser window by using the drag icon at the top left corner</span>
//         <span class="point">The window actions are placed in the top right corner</span>
//         <span class="point">View your bookmarks and other options by clicking on the bookmark icon</span>
//         </div>
//         <br/>
//         <button class="app-major-btn" onclick="firstDestructure()">Got It! 👍</button>
//         <br/>
//     </div>
//     `
// }

// function firstDestructure() {
//     localStorage.setItem("first-time", false)
//     document.body.style.backgroundImage = "url(./assets/demoBack.png)"
//     page.innerHTML = 
//     `
//     <div class="pop-webs">
//     <h2 style="color: black">Popular Websites</h2>
//     <div class="recommendation_grid">
//         <div class="recom">
//             <img src="./assets/youtube.png">
//             <div class="tooltip">YouTube</div>
//         </div>
//         <div class="recom">
//             <img src="./assets/netflix.png">
//             <div class="tooltip">Netflix</div>
//         </div>
//         <div class="recom">
//             <img src="./assets/amazon.png">
//             <div class="tooltip">Amazon</div>
//         </div>
//         <div class="recom">
//             <img src="./assets/insta.png">
//             <div class="tooltip">Instagram</div>
//         </div>
//         <div class="recom">
//             <img src="./assets/facebook.png">
//             <div class="tooltip">FaceBook</div>
//         </div>
//         <div class="recom">
//             <img src="./assets/wiki.png">
//             <div class="tooltip">WikiPedia</div>
//         </div>
//         <div class="recom">
//             <img src="./assets/reddit.png">
//             <div class="tooltip">Reddit</div>
//         </div>
//         <div class="recom">
//             <img src="./assets/zoom.png">
//             <div class="tooltip">Zoom</div>
//         </div>
//     </div>
//     </div>
//     `
// }
