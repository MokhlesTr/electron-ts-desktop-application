const path = require("path");
const { app, BrowserWindow, shell } = require("electron");

const isDev = process.env.IS_DEV === "true";
let mainWindow, splashWindow;

function createWindow() {
  splashWindow = new BrowserWindow({
    width: 400,
    height: 300,
    frame: false,
    alwaysOnTop: false,
    resizable: false,
    center: true,
    show: true,
  });

  splashWindow.loadFile(path.join(__dirname, "splash.html"));

  mainWindow = new BrowserWindow({
    width: 1024,
    height: 650,
    minHeight: 650,
    minWidth: 724,
    frame: true,
    title: "My Cool Desktop App",
    icon: path.join(__dirname, "../assets/iconCool.ico"),
    show: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../dist/index.html")}`
  );

  mainWindow.setMenuBarVisibility(false);

  mainWindow.once("ready-to-show", () => {
    setTimeout(() => {
      splashWindow.destroy();
      mainWindow.show();
    }, 500);
  });
}

app.whenReady().then(createWindow);
