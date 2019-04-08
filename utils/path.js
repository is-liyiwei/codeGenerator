var path = require('path')

const fixPathCompatibleSystem = (str) => str.split(path.sep).join('/')

module.exports = {
  fixPathCompatibleSystem
}
