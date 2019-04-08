var fs = require('fs')
var path = require('path')

let findFileByPathSync = startPath => {
  let result = []
  function finder(pa) {
    let files = fs.readdirSync(pa)
    files.forEach(val => {
      let fPath = path.join(pa, val)
      let stats = fs.statSync(fPath)
      if (stats.isDirectory()) {
        finder(fPath)
      }
      if (stats.isFile()) result.push(fPath)
    })
  }
  finder(startPath)
  return result
}

module.exports = {
  findFileByPathSync
}
