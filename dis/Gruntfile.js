/**
 * Created by linjianxi on 2017/5/22.
 */
var grunt = require("grunt");

grunt.config.init({
  pkg: grunt.file.readJSON('package.json'),
  'create-windows-installer': {
    x64: {
      appDirectory: './bearhunting-win32-x64',
      authors: 'linjianxi',
      // iconUrl:'./logo.ico',
      exe: 'bearhunting.exe',
      description:"bearhunting",
      setupIcon:"./logo.ico",
      noMsi:true
    }
  }
})

grunt.loadNpmTasks('grunt-electron-installer');
grunt.registerTask('default', ['create-windows-installer']);
