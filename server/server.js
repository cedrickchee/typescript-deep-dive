var production = process.env.NODE_ENV === 'production'
if(!production) {
  var chokidar = require('chokidar')
  var watcher = chokidar.watch('./client/build')
  watcher.on('ready', function() {
    watcher.on('all', function() {
      console.log("Clearing /client/build/ module cache from server")
      Object.keys(require.cache).forEach(function(id) {
        if (/[\/\\]client\/build[\/\\]/.test(id)) delete require.cache[id]
      })
    })
  })
}