> # 自动生成 html 图片和文本代码块，支持 web 和小程序端

## node 版本 > 8.x.x

## 安装依赖

> npm install

## 启动

> npm start

http://localhost:3006/

> # 图片代码生成

## 配置好 projectConfig.js 文件即可，一般是配置好路径

```

module.exports = {
  // 文件路径
  filesPath: 'G:/work-demo/electricfront/src/assets/appIcon',
  // 是否自动打开浏览器
  autoOpenBrowser: true,
  // ['localhost', 'autoIp']，不建议修改
  host: 'localhost',
  // 端口号，不建议修改
  port: 3006
}

```

> # 文本代码生成

## 参考配置文件 data.csv

> # 项目预览

![Image text](https://raw.githubusercontent.com/is-liyiwei/gif/master/codeGenerator/1.png)
![Image text](https://raw.githubusercontent.com/is-liyiwei/gif/master/codeGenerator/2.png)
![Image text](https://raw.githubusercontent.com/is-liyiwei/gif/master/codeGenerator/3.png)
![Image text](https://raw.githubusercontent.com/is-liyiwei/gif/master/codeGenerator/4.png)
![Image text](https://raw.githubusercontent.com/is-liyiwei/gif/master/codeGenerator/5.png)
