const { app, BrowserWindow } = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 400,
    height: 245,
    autoHideMenuBar: true,
    title: "NowaCalculator v1.0.0"
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