const BrowserWindow = require('electron').BrowserWindow;
const url  = require('url');
const path = require('path')

exports.openAboutWindow = function(focusedWindow){

  let aboutWindow = new BrowserWindow({
      parent  : focusedWindow,
      modal   : true,
      show    : false,
      width   : 400,
      height  : 200
  })
  aboutWindow.loadURL(url.format({
    pathname  : path.join(__dirname, '../html/about.html'),
    protocol  : 'file',
    slashes   : true
  }))
  aboutWindow.setMenu(null)
  aboutWindow.once('ready-to-show', ()=>{
    aboutWindow.show()
  })
}
