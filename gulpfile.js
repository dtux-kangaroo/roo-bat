const exec = require('child_process').exec;
const gulp = require('gulp');
const watch = require('gulp-watch');
const chalk = require('chalk');
const log = console.log;
  gulp.task('default', function () {
    return watch('src/**/*',function (e) {
        log(chalk.white(chalk.underline.bgBlue('正在构建...')))
        let bat= exec("npm run publish")
        bat.on('exit', (code) => {
            log(chalk.white(chalk.underline.bgBlue('构建完成')))
        });
    });
});
