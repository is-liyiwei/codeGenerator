var express = require('express')
var router = express.Router()
var path = require('path')
var fs = require('fs')
var projectConfig = require('../projectConfig')

var findFileByPathSync = require('../utils/files').findFileByPathSync
var fixPathCompatibleSystem = require('../utils/path').fixPathCompatibleSystem

router.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  res.header('Access-Control-Allow-Headers', 'heData')
  next()
})

let isImageExt = ext => {
  return /.(gif|jpg|jpeg|png|gif|jpg|png)$/.test(ext)
}

router.get('/files', function(req, res, next) {
  try {
    const filterKeyQuery = req.query.filterKeyQuery
    let allIcon = findFileByPathSync(path.resolve(projectConfig.filesPath))
    let allData = []
    for (let index = 0; index < allIcon.length; index++) {
      let fileInfo = path.parse(allIcon[index])
      // console.log(fs.statSync(allIcon[index]))
      if (isImageExt(fileInfo.ext)) {
        let filePath = fixPathCompatibleSystem(allIcon[index]).split(projectConfig.filesPath)[1]
        // let fileName = filePath.substring(filePath.lastIndexOf('/') + 1)
        let fileName = fileInfo.base
        if (fileName.indexOf(filterKeyQuery) != -1) {
          allData.push({
            fileName: fileName,
            filePath: filePath,
            idByName: fileName.split('.')[0]
          })
        }
      } else {
        console.log('图片类型必须是.gif,jpeg,jpg,png中的一种')
      }
    }
    res.send(allData)
  } catch (error) {
    res.status(500).send('请检查projectConfig.js文件路径是否设置正确')
  }
})

router.get('/getText', function(req, res, next) {
  try {
    fs.readFile(path.resolve(projectConfig.excelPath), function(err, data) {
      if (err) {
        console.log(err.stack)
        return
      }

      function ConvertToTable(data, callBack) {
        data = data.toString()
        var table = new Array()
        var rows = new Array()
        rows = data.split('\r\n')
        for (var i = 0; i < rows.length; i++) {
          table.push(rows[i].split(','))
        }
        callBack(table)
      }

      ConvertToTable(data, function(table) {
        table.pop()
        res.send(table)
      })
    })
  } catch (error) {
    res.status(500).send('请求出错')
  }
})

module.exports = router
