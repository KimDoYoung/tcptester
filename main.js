const electron = require('electron')
const {app, BrowserWindow, Menu} = electron

const path = require('path')
const url  = require('url');
const glob = require('glob');

const debug = /--debug/.test(process.argv[2])

if (process.mas) app.setName('TCP Tester')
var mainWindow = null;

function initialize(){
  var shouldQuit = makeSingleInstance();
  if (shouldQuit) return app.quit();

  loadMainProcess();
  function createWindow(){
    mainWindow = new BrowserWindow({
      width : 800, height : 600,
      //backgroundColor: '#2e2c29',
      center : true

    })
    mainWindow.loadURL(url.format({
      pathname : path.join(__dirname,'html/index.html'),
      protocol : 'file:',
      slashes  : true
    }))
    //menu
    require("./render-process/menu").setMenu();
    // var menu = Menu.buildFromTemplate(menuTemplate.setMenu());
    // mainWindow.setMenu(menu);

    mainWindow.on('closed', function(){
      mainWindow = null;
    })
  }

  app.on('ready',createWindow);
  app.on('window-all-closed', function(){
     if(process.platform !== 'darwin'){
       app.quit();
     }
  });
  app.on('activate', function(){
     if(mainWindow === null){
       createWindow();
     }
  });
}
function makeSingleInstance () {
  if (process.mas) return false

  return app.makeSingleInstance(function () {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore()
      mainWindow.focus()
    }
  })
}

// Require each JS file in the main-process dir
function loadMainProcess () {
  var files = glob.sync(path.join(__dirname, 'main-process/**/*.js'))
  files.forEach(function (file) {
    require(file)
  })
  //autoUpdater.updateMenu()
}



initialize();
