var gulp = require('gulp');
var concat = require('gulp-concat');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var utilities = require('gulp-util');
var buildProduction = utilities.env.production;//tells build task wether to make a dev or production build, based on wether this evaluates to true
var del = require('del');
var jshint = require('gulp-jshint');


gulp.task('concatInterface', function() {
  return gulp.src(['./js/*-interface.js']) //get all interface files
    .pipe(concat('allConcat.js'))//concatenate then
    .pipe(gulp.dest('./tmp'));//put them in this temp folder
});

gulp.task('jsBrowserify', ['concatInterface'], function() {//runs concatInterface
  return browserify({entries: ['./tmp/allConcat.js']})//do browserify process to all concatenated files in temp folder
  .bundle() //bundle them (?)
  .pipe(source('app.js')) //put the output in this file
  .pipe(gulp.dest('./build/js')); //put production file in this folder
});

gulp.task("minifyScripts", ["jsBrowserify"], function(){
  return gulp.src("./build/js/app.js")//looks at your production file
    .pipe(uglify())//minifies it
    .pipe(gulp.dest("./build/js"));//puts it here
});

gulp.task("build", ['clean'], function(){//calls clean task, then does this function
  if (buildProduction) {//if buildProduction is true..
    gulp.start('minifyScripts');//make minified buproduction file
  } else {
    gulp.start('jsBrowserify');
  }
});

gulp.task("clean", function(){//cleans old temp and build files so we grab the newest ones
  return del(['build', 'tmp']);
});

gulp.task('jshint', function(){
  return gulp.src(['js/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
