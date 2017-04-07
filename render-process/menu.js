// menu Template
//const Menu = require('electron').Menu;
const electron = require('electron');
const {BrowserWindow, Menu, app} = electron;
const url  = require('url');
const path = require('path')
const about = require('./about');

exports.setMenu=function() {
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}
// define template
const template = [
  {
    label : 'Application',
    submenu : [
      {
        label : 'About',
        click : (item, focusedWindow)=>{
          about.openAboutWindow(focusedWindow);
        }
      },
      {
          label: 'Quit',
          accelerator: 'Ctrl+Q',
          click: () => {
              app.quit();
          }
      }
    ]
  },

  {
    label: 'Electron-1',
    submenu: [
      {
        label: 'Prefs-1',
        click: function() {
          onPrefsClicked1();
        },
        accelerator: process.platform === 'darwin' ? 'Alt+Command+I' : 'Ctrl+Shift+I'
      }
    ]
  },
  {
    label: 'Electron-2',
    submenu: [
      {
        label: 'Prefs-2',
        click: function() {
          onPrefsClicked2();
        }
      },
      {
        label: 'Prefs-3',
        click: function() {
          onPrefsClicked3();
        }
      }
    ]
  }
];

// function openAboutWindow(focusedWindow){
//
//   let aboutWindow = new BrowserWindow({
//       parent  : focusedWindow,
//       modal   : true,
//       show    : false,
//       width   : 400,
//       height  : 200
//   })
//   aboutWindow.loadURL(url.format({
//     pathname  : path.join(__dirname, 'html/about.html'),
//     protocol  : 'file',
//     slashes   : true
//   }))
//   aboutWindow.setMenu(null)
//   aboutWindow.once('ready-to-show', ()=>{
//     aboutWindow.show()
//   })
// }
