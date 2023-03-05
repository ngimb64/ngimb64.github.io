const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');


gulp.task('check', function() {
    return new Promise(function(resolve, reject) {
        console.log('\nGulp Initiated!!!\n');
        resolve();
    });
});

gulp.task('prefix', function () {
    return gulp.src('assets/pre_css/*.css')
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 99 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('assets/css'))}
);