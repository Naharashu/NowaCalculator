const { app, BrowserWindow } = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true
  })

  win.setTitle("NowaCalculator v1.0.0")
  win.loadFile('index.html');
}

app.on("ready", () => {
  createWindow();
});

app.on("quit", () => {
    app.quit();
});