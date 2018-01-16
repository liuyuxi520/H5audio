var gulp = require('gulp'),
    less = require('gulp-less'),//转换less用的
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),//合并
    rename = require('gulp-rename'),//重命名
    cleancss = require('gulp-clean-css'),//压缩
    uglify = require('gulp-uglify'),//混淆js
    imagemin = require('gulp-imagemin'),
    nodeapp = require('./app.js');
// var fs = require('fs');
// var rev = require('gulp-rev');//加MD5后缀
// var jshint = require('gulp-jshint');//js校验

gulp.task("css",function(){
	gulp.src("./public/less/**/*.less")
	    .pipe(less())
	    .pipe(autoprefixer({ //自动为css添加兼容前缀
		    browsers: ['Explorer >= 9.0', 'Firefox >= 11.0','Chrome >= 17.0'],
		    remove:true //是否去掉不必要的前缀 默认：true 
		}))
        .pipe(cleancss()) 
        .pipe(rename({suffix:'.min'}))
	    .pipe(gulp.dest("./public/css"));
});
gulp.task("image",function(){
	gulp.src("./public/img/*")
		.pipe(imagemin())
		.pipe(gulp.dest("./public/images"));
});
gulp.task("js",function(){
	gulp.src("./public/javascripts/**/*.js")
		.pipe(gulp.dest("./public/js"));
});
gulp.task("www",function(){
    var server = nodeapp.listen(8089,function(){
        var host = server.address().address;
        var port = server.address().port;
        console.log('Example app listening at http://%s:%s', host, port);
        console.log()
    }); 
});

gulp.task("lyx",["css","www","image","js"]); 

gulp.task("default",["lyx"],function(){
    gulp.watch(["./public/less/**/*.less"],["css"]);
    gulp.watch(["./public/javascripts/**/*.js"],["js"]);
});