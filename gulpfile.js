// //本地安装gulp:为了在此处引入gulp
// //require():commonjs的规范
// var gulp = require('gulp');
// var sass = require('gulp-sass');
// var browserSync = require('browser-sync')
// // 编译sass
// // 利用gulp任务来编译
// // 创建gulp任务：gulp.task()
// gulp.task('complileSass',function(){
//     // 查找sass文件
//     // 匹配文件成功后，返回文档流
//     gulp.src('./src/**/*.scss')
//         //编译sass文件
//         .pipe(sass({outputStyle:'compact'}).on('error',sass.logError))
//         //输出文件到硬盘
//         .pipe(gulp.dest('./src/css'));
// });


// //监听sass文件修改
// gulp.task('jtSass',function(){
//     //监听home.scss文件,如果有修改，则自动执行compileSass任务
//     gulp.watch('./src/sass/index.scss',['complileSass']);
// });

//浏览器同步
// gulp.task('serve', function() {
//   browserSync({
//     server: {
//       baseDir: ['dist']
//     },
//   }, function(err, bs) {
//     console.log(bs.options.getIn(["urls", "local"]));
//   });

//   gulp.watch('src/sass/*.css',['style']);
//   gulp.watch('src/js/*.js',['script']);
//   gulp.watch('src/img/*.*',['image']);
//   gulp.watch('src/*.html',['html']);
// });
/* 
* @Author: Marte
* @Date:   2017-09-23 11:27:19
* @Last Modified by:   Marte
* @Last Modified time: 2018-09-16 22:59:27
*/
var gulp = require('gulp');
var sass = require('gulp-sass');
// var rename = require('gulp-rename');
// gulp.task('compileSass',function(){
//     gulp.src(['./src/**/*.scss','!./src/sass/var.scss'])
//            .pipe(sass({outputStyle:'compact'}))
//            .on('error',sass.logError)
//            .pipe(gulp.dest('./src/css'));
// });

// gulp.task('monitor',function(){
//     gulp.watch('./src/sass/*.scss',['compileSass']);
// });


var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

// 静态服务器 + 监听 scss/html 文件
gulp.task('server', ['sass'], function() {
    browserSync.init({
        server: "./src",
        files:['./src/**/*.html','./src/**/*.js','./src/**/*.php']
    });
    gulp.watch("src/sass/*.scss", ['sass']);
    gulp.watch("src/*.html").on('change', reload);
});

// scss编译后的css将注入到浏览器里实现更新
gulp.task('sass', function() {
    return gulp.src("src/sass/*.scss")
        .pipe(sass({outputStyle:'compact'}).on('error',sass.logError))
        .pipe(gulp.dest("src/css"))
        .pipe(reload({stream: true}));
});

// 默认gulp运行server事件
gulp.task('default', ['server']);
