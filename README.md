## 使用electron node 构建桌面应用程序

 Electron.js 可以让你通过简单的html/js/css，就可以构建桌面应用程序。
 Electron.js你也许会联想到它是拥有GUI的js库或者框架，然而它并不是，它使用web页面作为它的GUI，
 可以把它看成一个被JavaScript控制的精简的Chromium浏览器。

#### 1. 打包成运行包
1.1没打包之前，想要用Electron运行你的应用有两种方式，在应用目录打开命令行，输入electron .
##### 1.2 安装依赖
常规打包需要用到electron-packager模块，所以先在命令行中输入npm install --save-dev electron-packager安装。

#### 1.3  package.json里添加一条打包命令,避免每次编译敲打N多的代码
```
"scripts": {
  "build": "electron-packager . bearhunting --win --out dis --arch=x64 --electron-version=1.0.0 --icon=./dis/logo.ico  --overwrite --ignore=node_modules --version-string.CompanyName=bearhunting --version-string.ProductName=bearhunting"
}
```
### 1.4 执行npm run build开始打包
结果如图：
![github](https://github.com/antbrothers/electronjs/blob/master/img/by.png)

## 2 打包成安装包
#### 2.0 Electron官方推荐使用grunt-electron-installer模块自动生成 Windows 安装向导。
注意：以下操作都在bearhunting-win32-x64的父级目录中
#### 2.1 安装grunt-electron-installer
新建package.json文件
####2.2 打开命令行，输入npm install grunt-electron-installer --save-dev安装grunt-electron-installer模块,接着输入npm install grunt --save-dev安装grunt
#### 2.3 配置Gruntfile.js
因为要用到grunt执行打包任务，所以，新建一个Gruntfile.js文件，并配置gurnt.config
#### 2.4 grunt打包
结果图：
![github](https://github.com/antbrothers/electronjs/blob/master/img/rs.png)




