//this process will be executed by node js and has acess to node APIs and all system APIs also electron APIs.
const { app, BrowserWindow } = require('electron');
//app-current application
//BrowserWindow-creates and manages application windows
//s application is ready to create browser windows
app.whenReady().then(() => {//This waits for Electron to finish its initialization process before trying to create windows or access browser APIs.
    // Create a new browser window
    const mainWindow = new BrowserWindow({//creates new application window
        width: 600,//window width
        height: 600//window height
    });

    // Load the index.html file
    mainWindow.loadFile('index.html');//oads and displays the html file in the created window
});