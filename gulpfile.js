var gulp = require('gulp'),
sass = require('gulp-sass'),
watch = require('gulp-watch'),
concat = require('gulp-concat'),
uglify = require('gulp-uglify'),
imagemin = require('gulp-imagemin'),
uglifycss = require('gulp-uglifycss');


gulp.task('watch', function() {
    gulp.watch(['**/*.sass', '**/*.scss'], ['sass','css']);
    gulp.watch('src/js/**/*.js', ['js']);
    gulp.watch('src/*.html', ['html']);
    gulp.watch('src/images/**/*', ['images']);
    gulp.watch('src/fonts/**/*', ['fonts']);
});

gulp.task('js', function() {
return gulp.src([
    'src/libs/jquery/jquery.min.js',
    'src/libs/jquery/jquery-ui.min.js',
    'src/libs/masonry/masonry.min.js',
    'src/libs/carousel/owl.carousel.min.js',
    'src/js/main.js'])
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
});

gulp.task('sass', function () {    
    return gulp.src([
        'src/sass/**/*.sass', 
        'src/sass/**/*.scss'])
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('src/css'));
});
gulp.task('css', function () {
    gulp.src([
        'src/libs/bootstrap/bootstrap.min.css',
        'src/libs/jquery/jquery-ui.theme.min.css',
        'src/libs/jquery/jquery-ui.min.css',
        'src/libs/carousel/owl.carousel.css',
        'src/css/main.css'
    ])
    .pipe(uglifycss({
        "uglyComments": true
    }))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('build/css'));
    
});
gulp.task('html', function () {
    gulp.src([
        'src/index.html',
    ])
    .pipe(concat('index.html'))
    .pipe(gulp.dest('build'));
    
});
gulp.task('images', function() {
    gulp.src('src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/img/'))
});
gulp.task('fonts', function() {
    gulp.src('src/fonts/**/*')
        .pipe(gulp.dest('build/fonts/'))
 
});

gulp.task('default', ['js', 'css', 'html', 'images', 'fonts']);