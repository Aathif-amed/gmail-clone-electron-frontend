const { app, BrowserWindow } = require('electron')
require('@electron/remote/main').initialize()
function createWindow () {
  const win = new BrowserWindow({
    width: 1200,
    height: 900,
    webPreferences: {
      enableRemoteModule:true,
    }
  })
  // preload: path.join(__dirname, 'preload.js')
  
  win.loadURL('http://localhost:3000')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
