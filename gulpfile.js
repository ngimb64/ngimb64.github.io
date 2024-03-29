const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('check', function() {
    return new Promise(function(resolve, reject) {
        console.log('\nGulp Initiated!!!\n');
        resolve();
    });
});

gulp.task('watch', function () {
    gulp.watch('assets/pre_css/*.css', {events: ['add', 'change']}, function () {
        return gulp.src('assets/pre_css/*.css')
            .pipe(autoprefixer({
                cascade: false,
                grid: true
            }))
            .pipe(gulp.dest('assets/css'))
    });
});

gulp.task('autoprefix', function () {
    return gulp.src('assets/pre_css/*.css')
        .pipe(autoprefixer({
            cascade: false,
            grid: true
        }))
        .pipe(gulp.dest('assets/css'))
})

//gulp.task('default', gulp.series('check', 'watch'));