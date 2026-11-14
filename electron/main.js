const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
function create() {
  const w = new BrowserWindow({ width: 1400, height: 900, icon: path.join(__dirname, '..', 'icon.png'), title: 'Kabinetsaz - ArchTverse', webPreferences: { contextIsolation: true } });
  Menu.setApplicationMenu(null);
  w.loadFile(path.join(__dirname, '..', 'www', 'index.html'));
}
app.whenReady().then(create);
app.on('window-all-closed', () => app.quit());
