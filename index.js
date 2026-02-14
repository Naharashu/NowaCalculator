const { app, BrowserWindow } = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 400,
    height: 245,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      webviewTag: false,
      enableWebSQL: false,
      spellcheck: false,
      sandbox: true,
      plugins: false,
      webSecurity: true,
      webgl: false
    },
    autoHideMenuBar: true
  })

  win.setTitle("NowaCalculator v1.1.0")
  win.loadFile('index.html');
}

app.disableHardwareAcceleration();

app.commandLine.appendSwitch('disable-background-update');
app.commandLine.appendSwitch('disable-geolocation');
app.commandLine.appendSwitch('disable-extensions-update');
app.commandLine.appendSwitch('disable-features', 'AutofillEnableProfileAutofill,AutofillEnableAddressAutofill');
app.commandLine.appendSwitch('js-flags', '--max-old-space-size=128');
app.commandLine.appendSwitch('disable-software-rasterizer');
app.commandLine.appendSwitch('disable-sync');
app.commandLine.appendSwitch('disable-print-preview');
app.commandLine.appendSwitch('disable-speech-api');


app.on("ready", () => {
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
