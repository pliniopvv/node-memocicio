const { app, BrowserWindow } = require('electron');
const { server } = require('./server/index');

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 600,
        height: 600,
        backgroundColor: '#fff',

        icon: `file://${__dirname}/dist/assets/icon.png`
    });

    //win.setMenu(null);

    win.loadURL(`file://${__dirname}/dist/index.html`);

    //debug tools;
    // win.webContents.openDevTools();

    win.on('closed', function() {
        win = null;
        server.close();
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', function() {


    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function() {
    if (win == null) {
        createWindow();
    }
});
