
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

var input = 'scss/*.scss';
var output = 'css';

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

var autoprefixerOptions = {
  browsers: [
    'last 2 versions', 
    '> 1%', 
    'ie >= 10',
    'Firefox ESR'
  ]
};


gulp.task('sass', function () {
  return gulp
    .src(input)
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest(output));
});
gulp.task('default', function(){
  gulp.watch(input, ['sass']); 
  // Other watchers
});

gulp.task('prod', function () {
  return gulp
    .src(input)
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest(output));
});