const electron = require('electron')
const {app, BrowserWindow, Menu} = electron

const path = require('path')
const url  = require('url')

// menu Template
menuTemplate = [
  {
    label : 'Application',
    submenu : [
      {
        label : 'About',
        click : ()=>{
          openAboutWindow();
        }
      }
    ]
  }
]


let mainWindow = null;

function createWindow(){
  mainWindow = new BrowserWindow({
    width : 800, height : 600
  })
  mainWindow.loadURL(url.format({
    pathname : path.join(__dirname,'index.html'),
    protocol : 'file:',
    slashes  : true
  }))
  //menu
  var menu = Menu.buildFromTemplate(menuTemplate)
  mainWindow.setMenu(menu)

  mainWindow.on('closed', function(){
    mainWindow = null;
  })
}
function openAboutWindow(){
  let aboutWindow = new BrowserWindow({
      parent  : mainWindow,
      modal   : true,
      show    : false,
      width   : 400,
      height  : 200
  })
  aboutWindow.loadURL(url.format({
    pathname  : path.join(__dirname, 'about.html'),
    protocol  : 'file',
    slashes   : true
  }))
  aboutWindow.setMenu(null)
  aboutWindow.once('ready-to-show', ()=>{
    aboutWindow.show()
  })
}

app.on('ready',createWindow);
app.on('window-all-closed', function(){
   if(process.platform !== 'darwin'){
     app.quit();
   }
})
app.on('activate', function(){
   if(mainWindow === null){
     createWindow();
   }
})
