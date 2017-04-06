document.write("The current version of i.js " + process.version)
var fs = require('fs')
var contents = fs.readFileSync('./package.json', 'utf-8')
alert(contents)

var remote = require('electron').remote;
document.addEventListener('keydown', (e)=>{
    if(e.which == 123){
      remote.getCurrentWindow().webContents.openDevTools();
    }else if(e.which === 116){ //F5
      location.reload();
    }
})
document.addEventListener('click', function(e) {
  console.log('clicked...');
});
