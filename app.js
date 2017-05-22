/**
 * Created by linjianxi on 2017/5/22.
 */

const electron = require("electron")
const app = electron.app
const BrowserWindow = electron.BrowserWindow
var path = require("path")
let mainWindow

function  createWindow() {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 800
  })

  mainWindow.loadURL('http://www.bearhunting.cn/')
  mainWindow.on("closed", function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})
var handleStartupEvent = function () {
  if (process.platform !== 'win32') {
    return false;
  }

  var squirrelCommand = process.argv[1];

  switch (squirrelCommand) {
    case '--squirrel-install':
    case '--squirrel-updated':
      install();
      return true;
    case '--squirrel-uninstall':
      uninstall();
      app.quit();
      return true;
    case '--squirrel-obsolete':
      app.quit();
      return true;
  }


  function install() {
    var cp = require('child_process');
    var updateDotExe = path.resolve(path.dirname(process.execPath), '..', 'update.exe');
    var target = path.basename(process.execPath);
    var child = cp.spawn(updateDotExe, ["--createShortcut", target], { detached: true });
    child.on('close', function(code) {
      app.quit();
    });
  }
  function uninstall() {
    var cp = require('child_process');
    var updateDotExe = path.resolve(path.dirname(process.execPath), '..', 'update.exe');
    var target = path.basename(process.execPath);
    var child = cp.spawn(updateDotExe, ["--removeShortcut", target], { detached: true });
    child.on('close', function(code) {
      app.quit();
    });
  }

};

if (handleStartupEvent()) {
  return;
}